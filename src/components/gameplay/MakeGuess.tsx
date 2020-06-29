import React, { useContext } from "react";
import { GameType, RoundPhase, TeamName } from "../../state/GameState";
import { Spectrum } from "../common/Spectrum";
import { CenteredColumn } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { MiniMarkdown } from "../common/MiniMarkdown";
import { GameModelContext } from "../../state/GameModelContext";
import { RecordEvent } from "../../TrackEvent";
import { GetLocaleData } from "../../locale/GetLocaleData";
import { ReplaceParameters } from "../common/ReplaceParameters";

export function MakeGuess(props: {locale: string}) {
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

  const notMyTurn =
    localPlayer.id === clueGiver.id ||
    (gameState.gameType === GameType.Teams &&
      localPlayer.team !== clueGiver.team);

  const localeStrings = GetLocaleData(props.locale).strings;
  const guessingTeamString = localeStrings[TeamName(clueGiver.team)];

  if (notMyTurn) {
    return (
      <div>
        <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} locale={props.locale} />
        <CenteredColumn>
          <div>
            <MiniMarkdown text={ReplaceParameters(localeStrings.clueGivenLabel, {name: clueGiver.name, clue: gameState.clue})} />
          </div>
          <div>{ReplaceParameters(localeStrings.clueGivenWaiting, {team: guessingTeamString})}</div>
          {Object.keys(gameState.players).length < 2 && (
            <div
              style={{
                margin: 12,
                padding: "0 1em",
                border: "1px solid black",
              }}
            >
              <p>{localeStrings.inviteMessage}</p>
              <p>{ReplaceParameters(localeStrings.inviteShareURL, {url: window.location.href})}</p>
            </div>
          )}
        </CenteredColumn>
      </div>
    );
  }

  return (
    <div>
      <Spectrum
        spectrumCard={spectrumCard}
        handleValue={gameState.guess}
        locale={props.locale}
        onChange={(guess: number) => {
          setGameState({
            guess,
          });
        }}
      />
      <CenteredColumn>
        <div>
          <MiniMarkdown text={ReplaceParameters(localeStrings.clueGivenLabel, {name: clueGiver.name, clue: gameState.clue})} />
        </div>
        <div>
          <Button
            text={ReplaceParameters(localeStrings.guessSubmitButton, {team: localeStrings[TeamName(localPlayer.team)]})}
            onClick={() => {
              RecordEvent("guess_submitted", {
                spectrum_card: spectrumCard.join("|"),
                clue: gameState.clue,
                target: gameState.spectrumTarget.toString(),
                guess: gameState.guess.toString(),
              });

              if (gameState.gameType === GameType.Teams) {
                setGameState({
                  roundPhase: RoundPhase.CounterGuess,
                });
              } else {
                setGameState({
                  roundPhase: RoundPhase.ViewScore,
                });
              }
            }}
          />
        </div>
      </CenteredColumn>
    </div>
  );
}
