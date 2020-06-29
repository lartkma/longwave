import React, { useContext } from "react";
import { GameType, RoundPhase } from "../../state/GameState";
import { Spectrum } from "../common/Spectrum";
import { CenteredColumn } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { MiniMarkdown } from "../common/MiniMarkdown";
import { GameModelContext } from "../../state/GameModelContext";
import { RecordEvent } from "../../TrackEvent";
import { GetLocaleData } from "../../locale/GetLocaleData";

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

  const locale = GetLocaleData(props.locale);
  const guessingTeamString = locale.teamName(clueGiver.team);

  if (notMyTurn) {
    return (
      <div>
        <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} locale={props.locale} />
        <CenteredColumn>
          <div>
            <MiniMarkdown text={locale.string('clueGivenLabel', {name: clueGiver.name, clue: gameState.clue})} />
          </div>
          <div>{locale.string('clueGivenWaiting', {team: guessingTeamString})}</div>
          {Object.keys(gameState.players).length < 2 && (
            <div
              style={{
                margin: 12,
                padding: "0 1em",
                border: "1px solid black",
              }}
            >
              <p>{locale.string('inviteMessage')}</p>
              <p>{locale.string('inviteShareURL', {url: window.location.href})}</p>
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
          <MiniMarkdown text={locale.string('clueGivenLabel', {name: clueGiver.name, clue: gameState.clue})} />
        </div>
        <div>
          <Button
            text={locale.string('guessSubmitButton', {team: locale.teamName(localPlayer.team)})}
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
