import { useParams } from "react-router-dom";
import React from "react";
import { useStorageBackedState } from "../hooks/useStorageBackedState";
import { useNetworkBackedGameState } from "../hooks/useNetworkBackedGameState";
import { InputName } from "./InputName";
import { RandomFourCharacterString } from "../../state/RandomFourCharacterString";
import { GameModelContext } from "../../state/GameModelContext";
import { ActiveGame } from "./ActiveGame";
import { BuildGameModel } from "../../state/BuildGameModel";
import { RoomIdHeader } from "../common/RoomIdHeader";
import { FakeRooms } from "./FakeRooms";

export function GameRoom() {
  const { locale = 'en', roomId } = useParams();
  if (roomId === undefined) {
    throw new Error("RoomId missing");
  }

  const [playerName, setPlayerName] = useStorageBackedState("", "name");
  const [playerId] = useStorageBackedState(
    RandomFourCharacterString(),
    "playerId"
  );

  const [gameState, setGameState] = useNetworkBackedGameState(
    roomId,
    playerId,
    playerName
  );

  if (roomId === "MULTIPLAYER_TEST") {
    return <FakeRooms locale={locale} />;
  }

  const gameModel = BuildGameModel(gameState, setGameState, playerId, locale);

  if (playerName.length === 0) {
    return (
      <InputName locale={locale}
        setName={(name) => {
          setPlayerName(name);
          gameState.players[playerId].name = name;
          setGameState(gameState);
        }}
      />
    );
  }

  if (!gameState?.players?.[playerId]) {
    return null;
  }

  return (
    <GameModelContext.Provider value={gameModel}>
      <RoomIdHeader locale={locale}/>
      <ActiveGame locale={locale}/>
    </GameModelContext.Provider>
  );
}
