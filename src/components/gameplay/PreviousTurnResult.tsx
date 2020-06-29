import React from "react";
import { TurnSummaryModel } from "../../state/GameState";
import { CenteredColumn } from "../common/LayoutElements";
import { Spectrum } from "../common/Spectrum";
import { MiniMarkdown } from "../common/MiniMarkdown";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function PreviousTurnResult(props: TurnSummaryModel & {locale: string}) {
  const style: React.CSSProperties = {
    borderTop: "1px solid black",
    margin: 16,
    paddingTop: 16,
  };

  const glassStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
  };
  const locale = GetLocaleData(props.locale);

  return (
    <div style={style}>
      <CenteredColumn>
        <em>{locale.string('previousTurnMessage')}</em>
      </CenteredColumn>
      <div
        style={{
          position: "relative",
        }}
      >
        <div style={glassStyle} />
        <Spectrum
          spectrumCard={props.spectrumCard}
          handleValue={props.guess}
          targetValue={props.spectrumTarget}
          locale={props.locale}
        />
        <CenteredColumn>
          <div>
            <MiniMarkdown text={locale.string('clueGivenLabel', {name: props.clueGiverName, clue: props.clue})} />
          </div>
        </CenteredColumn>
      </div>
    </div>
  );
}
