import React, { useRef, useContext, useState } from "react";

import { RoundPhase } from "../../state/GameState";
import { Spectrum } from "../common/Spectrum";
import { CenteredColumn, CenteredRow } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { GameModelContext } from "../../state/GameModelContext";
import { RandomSpectrumTarget } from "../../state/RandomSpectrumTarget";
import { Info } from "../common/Info";
import { Animate } from "../common/Animate";
import { GetLocaleData } from "../../locale/GetLocaleData";
import { ReplaceParameters } from "../common/ReplaceParameters";

export function GiveClue(props: {locale: string}) {
  const {
    gameState,
    localPlayer,
    clueGiver,
    spectrumCard,
    setGameState,
  } = useContext(GameModelContext);
  const inputElement = useRef<HTMLInputElement>(null);
  const [disableSubmit, setDisableSubmit] = useState(
    !inputElement.current?.value?.length
  );
  const localeStrings = GetLocaleData(props.locale).strings;

  if (!clueGiver) {
    setGameState({
      clueGiver: localPlayer.id,
    });
    return null;
  }

  if (localPlayer.id !== clueGiver.id) {
    return (
      <div>
        <Animate animation="wipe-reveal-right">
          <Spectrum spectrumCard={spectrumCard} locale={props.locale}/>
        </Animate>
        <CenteredColumn>
          <div>{ReplaceParameters(localeStrings.clueWaitingMessage, {name: clueGiver.name})}</div>
        </CenteredColumn>
      </div>
    );
  }

  const submit = () => {
    if (!inputElement.current?.value?.length) {
      return false;
    }

    setGameState({
      clue: inputElement.current.value,
      guess: 10,
      roundPhase: RoundPhase.MakeGuess,
    });
  };

  const redrawCard = () =>
    setGameState({
      deckIndex: gameState.deckIndex + 1,
      spectrumTarget: RandomSpectrumTarget(),
    });

  return (
    <div>
      <CenteredColumn style={{ alignItems: "flex-end" }}>
        <Button text={localeStrings.drawNewCardButton} onClick={redrawCard} />
      </CenteredColumn>
      <Animate animation="wipe-reveal-right">
        <Spectrum
          targetValue={gameState.spectrumTarget}
          spectrumCard={spectrumCard}
          locale={props.locale}
        />
      </Animate>
      <CenteredColumn>
        <CenteredRow>
          <input
            type="text"
            placeholder={localeStrings.cluePlaceholder}
            ref={inputElement}
            onKeyDown={(event) => {
              if (event.key !== "Enter") {
                return true;
              }
              submit();
            }}
            onChange={() =>
              setDisableSubmit(!inputElement.current?.value?.length)
            }
          />
          <Info>
            <div>
              {localeStrings.clueHelpMessage}
              <ul>
                <li>{localeStrings.clueTip1Message}</li>
                <li>{localeStrings.clueTip2Message}</li>
                <li>{localeStrings.clueTip3Message}</li>
                <li>{localeStrings.clueTip4Message}</li>
              </ul>
            </div>
          </Info>
        </CenteredRow>
        <Button text={localeStrings.clueSubmitButton} onClick={submit} disabled={disableSubmit} />
      </CenteredColumn>
    </div>
  );
}
