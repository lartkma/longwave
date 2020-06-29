import React from "react";
import { RoundPhase, GameType, Team } from "../../state/GameState";
import { GiveClue } from "./GiveClue";
import { MakeGuess } from "./MakeGuess";
import { ViewScore } from "./ViewScore";
import { JoinTeam } from "./JoinTeam";
import { Scoreboard } from "./Scoreboard";
import { SetupGame } from "./SetupGame";
import { CounterGuess } from "./CounterGuess";
import { useContext } from "react";
import { GameModelContext } from "../../state/GameModelContext";
import { PreviousTurnResult } from "./PreviousTurnResult";

export function ActiveGame(props: {locale: string}) {
  const { gameState, localPlayer } = useContext(GameModelContext);

  if (gameState.roundPhase === RoundPhase.SetupGame) {
    return <SetupGame locale={props.locale} />;
  }

  if (
    gameState.gameType === GameType.Teams &&
    (gameState.roundPhase === RoundPhase.PickTeams ||
      localPlayer.team === Team.Unset)
  ) {
    return <JoinTeam locale={props.locale} />;
  }

  return (
    <>
      {gameState.roundPhase === RoundPhase.GiveClue && <GiveClue locale={props.locale} />}
      {gameState.roundPhase === RoundPhase.MakeGuess && <MakeGuess locale={props.locale} />}
      {gameState.roundPhase === RoundPhase.CounterGuess && <CounterGuess locale={props.locale} />}
      {gameState.roundPhase === RoundPhase.ViewScore && <ViewScore locale={props.locale} />}
      <Scoreboard locale={props.locale} />
      {gameState.previousTurn && (
        <PreviousTurnResult {...gameState.previousTurn} locale={props.locale} />
      )}
    </>
  );
}
