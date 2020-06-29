import React, { useContext } from "react";
import { TeamReverse, TeamName } from "../../state/GameState";
import { Spectrum } from "../common/Spectrum";
import { CenteredColumn, CenteredRow } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { MiniMarkdown } from "../common/MiniMarkdown";
import { GameModelContext } from "../../state/GameModelContext";
import { ScoreRound } from "../../state/ScoreRound";
import { GetLocaleData } from "../../locale/GetLocaleData";
import { ReplaceParameters } from "../common/ReplaceParameters";

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
  const localeStrings = GetLocaleData(props.locale).strings;
  const counterGuessTeamString = localeStrings[TeamName(TeamReverse(clueGiver.team))];

  if (notMyTurn) {
    return (
      <div>
        <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} locale={props.locale}/>
        <CenteredColumn>
          <div>
            <MiniMarkdown text={ReplaceParameters(localeStrings.clueGivenLabel, {name: clueGiver.name, clue: gameState.clue})} />
          </div>
          <div>{ReplaceParameters(localeStrings.counterGuessWaiting, {team: counterGuessTeamString})}</div>
        </CenteredColumn>
      </div>
    );
  }

  return (
    <div>
      <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} locale={props.locale}/>
      <CenteredColumn>
        <div>
          <MiniMarkdown text={ReplaceParameters(localeStrings.clueGivenLabel, {name: clueGiver.name, clue: gameState.clue})} />
        </div>
      </CenteredColumn>
      <CenteredRow>
        <Button
          text={localeStrings.counterGuessLeft}
          onClick={() =>
            setGameState(ScoreRound(gameState, clueGiver.team, "left"))
          }
        />
        <Button
          text={localeStrings.counterGuessRight}
          onClick={() =>
            setGameState(ScoreRound(gameState, clueGiver.team, "right"))
          }
        />
      </CenteredRow>
    </div>
  );
}
