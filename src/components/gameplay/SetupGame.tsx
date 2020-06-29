import React from "react";
import { GameType, RoundPhase } from "../../state/GameState";
import { CenteredRow, CenteredColumn } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { LongwaveAppTitle } from "../common/Title";
import { useContext } from "react";
import { GameModelContext } from "../../state/GameModelContext";
import { NewRound } from "../../state/NewRound";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function SetupGame(props: {locale: string}) {
  const { gameState, setGameState, localPlayer } = useContext(GameModelContext);
  const localeStrings = GetLocaleData(props.locale).strings;

  const startGame = (gameType: GameType) => {
    if (gameType === GameType.Teams) {
      setGameState({
        roundPhase: RoundPhase.PickTeams,
        gameType,
      });
    } else {
      setGameState({
        ...NewRound(localPlayer.id, gameState),
        gameType,
      });
    }
  };

  return (
    <CenteredColumn>
      <LongwaveAppTitle />
      <CenteredRow>
        <Button
          text={localeStrings.standardModeButton}
          onClick={() => startGame(GameType.Teams)}
        />
        {/* <Button
          text={localeStrings.coopModeButton}
          onClick={() => startGame(GameType.Cooperative)}
        /> */}
        <Button text={localeStrings.freeModeButton} onClick={() => startGame(GameType.Freeplay)} />
      </CenteredRow>
    </CenteredColumn>
  );
}
