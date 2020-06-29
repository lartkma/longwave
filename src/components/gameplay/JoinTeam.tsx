import React from "react";
import { CenteredRow, CenteredColumn } from "../common/LayoutElements";
import { RoundPhase, Team } from "../../state/GameState";
import { Button } from "../common/Button";
import { LongwaveAppTitle } from "../common/Title";
import { useContext } from "react";
import { GameModelContext } from "../../state/GameModelContext";
import { NewTeamGame } from "../../state/NewGame";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function JoinTeam(props: {locale: string}) {
  const { gameState, localPlayer, setGameState } = useContext(GameModelContext);
  const locale = GetLocaleData(props.locale);

  const leftTeam = Object.keys(gameState.players).filter(
    (playerId) => gameState.players[playerId].team === Team.Left
  );
  const rightTeam = Object.keys(gameState.players).filter(
    (playerId) => gameState.players[playerId].team === Team.Right
  );

  const joinTeam = (team: Team) => {
    setGameState({
      players: {
        ...gameState.players,
        [localPlayer.id]: {
          ...localPlayer,
          team,
        },
      },
    });
  };

  const startGame = () =>
    setGameState(
      NewTeamGame(gameState.players, localPlayer.id, gameState)
    );

  return (
    <CenteredColumn>
      <LongwaveAppTitle />
      <div>{locale.string('joinTeamPrompt')}</div>
      <CenteredRow
        style={{
          alignItems: "flex-start",
          alignSelf: "stretch",
        }}
      >
        <CenteredColumn>
          <div>{locale.teamName(Team.Left)}</div>
          {leftTeam.map((playerId) => (
            <div key={playerId}>{gameState.players[playerId].name}</div>
          ))}
          <div>
            <Button text={locale.string('joinGameButton')} onClick={() => joinTeam(Team.Left)} />
          </div>
        </CenteredColumn>
        <CenteredColumn>
          <div>{locale.teamName(Team.Right)}</div>
          {rightTeam.map((playerId) => (
            <div key={playerId}>{gameState.players[playerId].name}</div>
          ))}
          <div>
            <Button text={locale.string('joinGameButton')} onClick={() => joinTeam(Team.Right)} />
          </div>
        </CenteredColumn>
      </CenteredRow>
      {gameState.roundPhase === RoundPhase.PickTeams && (
        <Button text={locale.string('startGameButton')} onClick={startGame} />
      )}
    </CenteredColumn>
  );
}
