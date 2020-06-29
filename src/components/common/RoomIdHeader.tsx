import React from "react";
import { useParams } from "react-router-dom";
import { CenteredRow } from "./LayoutElements";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GameModelContext } from "../../state/GameModelContext";
import { InitialGameState } from "../../state/GameState";
import { GetLocaleData } from "../../locale/GetLocaleData";
import { ReplaceParameters } from "./ReplaceParameters";

export function RoomIdHeader(props: {locale: string}) {
  const { roomId } = useParams();
  const localeStrings = GetLocaleData(props.locale).strings;

  return (
    <CenteredRow
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        color: "gray",
      }}
    >
      <div style={{ margin: 4, padding: 4 }}>{ReplaceParameters(localeStrings.roomIdTitle, {roomId})}</div>
      <Tippy content={<RoomMenu locale={props.locale} />} interactive placement="bottom-end">
        <div tabIndex={0} style={{ padding: 8 }}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      </Tippy>
    </CenteredRow>
  );
}

function RoomMenu(props: {locale: string}) {
  const { setGameState } = useContext(GameModelContext);
  const localeStrings = GetLocaleData(props.locale).strings;

  return (
    <div
      tabIndex={0}
      style={{ cursor: "pointer" }}
      onClick={() => setGameState(InitialGameState())}
    >
      {localeStrings.resetRoomButton}
    </div>
  );
}
