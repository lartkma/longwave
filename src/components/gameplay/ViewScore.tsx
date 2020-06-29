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
  TeamName,
  TeamReverse,
} from "../../state/GameState";
import { GameModelContext } from "../../state/GameModelContext";
import { NewRound } from "../../state/NewRound";
import { Info } from "../common/Info";
import { GetLocaleData } from "../../locale/GetLocaleData";
import { ReplaceParameters } from "../common/ReplaceParameters";

export function ViewScore(props: {locale: string}) {
  const { gameState, clueGiver, spectrumCard } = useContext(GameModelContext);
  const localeStrings = GetLocaleData(props.locale).strings;

  if (!clueGiver) {
    return null;
  }

  const score = GetScore(gameState.spectrumTarget, gameState.guess);
  const wasCounterGuessCorrect =
    (gameState.counterGuess === "left" &&
      gameState.spectrumTarget < gameState.guess) ||
    (gameState.counterGuess === "right" &&
      gameState.spectrumTarget > gameState.guess);

  let scoreTemplate: string;
  if (typeof localeStrings.scoreGivenMessage === 'string') {
    scoreTemplate = localeStrings.scoreGivenMessage;
  } else {
    scoreTemplate = localeStrings.scoreGivenMessage(score);
  }
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
          <MiniMarkdown text={ReplaceParameters(localeStrings.clueGivenLabel, {name: clueGiver.name, clue: gameState.clue})} />
        </div>
        <div>{ReplaceParameters(scoreTemplate, {score})}</div>
        {gameState.gameType === GameType.Teams && (
          <div>
            {wasCounterGuessCorrect
              ? ReplaceParameters(localeStrings.counterScoreMessageYes, {team: localeStrings[TeamName(reverseTeam)]})
              : ReplaceParameters(localeStrings.counterScoreMessageNo, {team: localeStrings[TeamName(reverseTeam)]})}
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
  const localeStrings = GetLocaleData(props.locale).strings;

  if (!clueGiver) {
    return null;
  }

  const resetButton = (
    <Button
      text={localeStrings.resetGameButton}
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
        <div>{ReplaceParameters(localeStrings.winTeamMessage, {team: localeStrings[TeamName(Team.Left)]})}</div>
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
        <div>{ReplaceParameters(localeStrings.winTeamMessage, {team: localeStrings[TeamName(Team.Right)]})}</div>
        {resetButton}
      </>
    );
  }

  const score = GetScore(gameState.spectrumTarget, gameState.guess);

  const scoringTeamString = localeStrings[TeamName(clueGiver.team)];

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
          <div>{ReplaceParameters(localeStrings.catchupMessageTitle, {team: scoringTeamString})}</div>
          <Info>
            {localeStrings.catchupMessageDescription}
          </Info>
        </CenteredRow>
      )}
      {eligibleToDraw && (
        <Button
          text={localeStrings.drawNextCardButton}
          onClick={() => setGameState(NewRound(localPlayer.id, gameState))}
        />
      )}
    </>
  );
}
