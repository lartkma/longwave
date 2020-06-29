import React, { useContext } from "react";
import { GetScore } from "../../state/GetScore";
import { CenteredColumn, CenteredRow } from "../common/LayoutElements";
import { Spectrum } from "../common/Spectrum";
import { Button } from "../common/Button";
import { MiniMarkdown } from "../common/MiniMarkdown";
import {
  GameType,
  Team,
  InitialGameState,
  TeamReverse,
} from "../../state/GameState";
import { GameModelContext } from "../../state/GameModelContext";
import { NewRound } from "../../state/NewRound";
import { Info } from "../common/Info";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function ViewScore(props: {locale: string}) {
  const { gameState, clueGiver, spectrumCard } = useContext(GameModelContext);
  const locale = GetLocaleData(props.locale);

  if (!clueGiver) {
    return null;
  }

  const score = GetScore(gameState.spectrumTarget, gameState.guess);
  const wasCounterGuessCorrect =
    (gameState.counterGuess === "left" &&
      gameState.spectrumTarget < gameState.guess) ||
    (gameState.counterGuess === "right" &&
      gameState.spectrumTarget > gameState.guess);

  let reverseTeam = TeamReverse(clueGiver.team);

  return (
    <div>
      <Spectrum
        spectrumCard={spectrumCard}
        handleValue={gameState.guess}
        targetValue={gameState.spectrumTarget}
        locale={props.locale}
      />
      <CenteredColumn>
        <div>
          <MiniMarkdown text={locale.string('clueGivenLabel', {name: clueGiver.name, clue: gameState.clue})} />
        </div>
        <div>{locale.string('scoreGivenMessage', {score})}</div>
        {gameState.gameType === GameType.Teams && (
          <div>
            {wasCounterGuessCorrect
              ? locale.string('counterScoreMessageYes', {team: locale.teamName(reverseTeam)})
              : locale.string('counterScoreMessageNo', {team: locale.teamName(reverseTeam)})}
          </div>
        )}
        <NextTurnOrEndGame locale={props.locale} />
      </CenteredColumn>
    </div>
  );
}

function NextTurnOrEndGame(props: {locale: string}) {
  const { gameState, localPlayer, clueGiver, setGameState } = useContext(
    GameModelContext
  );
  const locale = GetLocaleData(props.locale);

  if (!clueGiver) {
    return null;
  }

  const resetButton = (
    <Button
      text={locale.string('resetGameButton')}
      onClick={() => {
        setGameState({
          ...InitialGameState(),
          deckSeed: gameState.deckSeed,
          deckIndex: gameState.deckIndex,
        });
      }}
    />
  );

  if (gameState.leftScore >= 10 && gameState.leftScore > gameState.rightScore) {
    return (
      <>
        <div>{locale.string('winTeamMessage', {team: locale.teamName(Team.Left)})}</div>
        {resetButton}
      </>
    );
  }

  if (
    gameState.rightScore >= 10 &&
    gameState.rightScore > gameState.leftScore
  ) {
    return (
      <>
        <div>{locale.string('winTeamMessage', {team: locale.teamName(Team.Right)})}</div>
        {resetButton}
      </>
    );
  }

  const score = GetScore(gameState.spectrumTarget, gameState.guess);

  const scoringTeamString = locale.teamName(clueGiver.team);

  let bonusTurn = false;

  const nextTeam = (() => {
    if (gameState.gameType !== GameType.Teams) {
      return Team.Unset;
    }

    if (score === 4) {
      if (
        gameState.leftScore < gameState.rightScore &&
        clueGiver.team === Team.Left
      ) {
        bonusTurn = true;
        return Team.Left;
      }
      if (
        gameState.rightScore < gameState.leftScore &&
        clueGiver.team === Team.Right
      ) {
        bonusTurn = true;
        return Team.Right;
      }
    }

    return TeamReverse(clueGiver.team);
  })();

  const eligibleToDraw = (() => {
    if (clueGiver.id === localPlayer.id) {
      return false;
    }

    if (gameState.gameType !== GameType.Teams) {
      return true;
    }

    return localPlayer.team === nextTeam;
  })();

  return (
    <>
      {bonusTurn && (
        <CenteredRow>
          <div>{locale.string('catchupMessageTitle', {team: scoringTeamString})}</div>
          <Info>
            {locale.string('catchupMessageDescription')}
          </Info>
        </CenteredRow>
      )}
      {eligibleToDraw && (
        <Button
          text={locale.string('drawNextCardButton')}
          onClick={() => setGameState(NewRound(localPlayer.id, gameState))}
        />
      )}
    </>
  );
}
