import { RoundPhase, GameState } from "./GameState";
import { RandomSpectrumTarget } from "./RandomSpectrumTarget";
import { BuildGameModel } from "./BuildGameModel";

export function NewRound(
  playerId: string,
  gameState: GameState,
  cardLocale: string
): Partial<GameState> {
  const gameModel = BuildGameModel(gameState, () => {}, playerId, cardLocale);

  const newState: Partial<GameState> = {
    clueGiver: playerId,
    roundPhase: RoundPhase.GiveClue,
    deckIndex: gameState.deckIndex + 1,
    spectrumTarget: RandomSpectrumTarget(),
  };

  if (gameModel.clueGiver !== null) {
    newState.previousTurn = {
      spectrumCard: gameModel.spectrumCard,
      spectrumTarget: gameState.spectrumTarget,
      clueGiverName: gameModel.clueGiver.name,
      clue: gameState.clue,
      guess: gameState.guess,
    };
  }

  return newState;
}
