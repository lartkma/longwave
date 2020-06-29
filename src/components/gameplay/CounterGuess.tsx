import React, { useContext } from "react";
import { TeamReverse } from "../../state/GameState";
import { Spectrum } from "../common/Spectrum";
import { CenteredColumn, CenteredRow } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { MiniMarkdown } from "../common/MiniMarkdown";
import { GameModelContext } from "../../state/GameModelContext";
import { ScoreRound } from "../../state/ScoreRound";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function CounterGuess(props: {locale: string}) {
  const {
    gameState,
    localPlayer,
    clueGiver,
    spectrumCard,
    setGameState,
  } = useContext(GameModelContext);

  if (!clueGiver) {
    return null;
  }

  const notMyTurn = clueGiver.team === localPlayer.team;
  const locale = GetLocaleData(props.locale);
  const counterGuessTeamString = locale.teamName(TeamReverse(clueGiver.team));

  if (notMyTurn) {
    return (
      <div>
        <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} locale={props.locale}/>
        <CenteredColumn>
          <div>
            <MiniMarkdown text={locale.string('clueGivenLabel', {name: clueGiver.name, clue: gameState.clue})} />
          </div>
          <div>{locale.string('counterGuessWaiting', {team: counterGuessTeamString})}</div>
        </CenteredColumn>
      </div>
    );
  }

  return (
    <div>
      <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} locale={props.locale}/>
      <CenteredColumn>
        <div>
          <MiniMarkdown text={locale.string('clueGivenLabel', {name: clueGiver.name, clue: gameState.clue})} />
        </div>
      </CenteredColumn>
      <CenteredRow>
        <Button
          text={locale.string('counterGuessLeft')}
          onClick={() =>
            setGameState(ScoreRound(gameState, clueGiver.team, "left"))
          }
        />
        <Button
          text={locale.string('counterGuessRight')}
          onClick={() =>
            setGameState(ScoreRound(gameState, clueGiver.team, "right"))
          }
        />
      </CenteredRow>
    </div>
  );
}
