import React, { useState, useContext } from "react";
import { GameType, Team } from "../../state/GameState";
import { CenteredRow, CenteredColumn } from "../common/LayoutElements";
import { GameModelContext } from "../../state/GameModelContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Animate } from "../common/Animate";
import { useRef } from "react";
import { useEffect } from "react";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function Scoreboard(props: {locale: string}) {
  const { gameState } = useContext(GameModelContext);
  const locale = GetLocaleData(props.locale);

  const style = {
    borderTop: "1px solid black",
    margin: 16,
    paddingTop: 16,
    alignItems: "center",
  };

  if (gameState.gameType === GameType.Freeplay) {
    return (
      <CenteredColumn style={style}>
        <em>{locale.string('freeModeTitle')}</em>
        <CenteredRow style={{ flexWrap: "wrap" }}>
          {Object.keys(gameState.players).map(toPlayerRow)}
        </CenteredRow>
      </CenteredColumn>
    );
  }

  return (
    <CenteredRow style={style}>
      <TeamColumn team={Team.Left} score={gameState.leftScore} locale={props.locale} />
      <TeamColumn team={Team.Right} score={gameState.rightScore} locale={props.locale} />
    </CenteredRow>
  );
}

function TeamColumn(props: { team: Team; score: number, locale: string }) {
  const { gameState } = useContext(GameModelContext);
  const locale = GetLocaleData(props.locale);

  const members = Object.keys(gameState.players).filter(
    (playerId) => gameState.players[playerId].team === props.team
  );

  return (
    <CenteredColumn style={{ alignItems: "flex-start" }}>
      <div>
        {insertAnimatableText(locale.string('pointCounter', {team: locale.teamName(props.team), value: props.score}), props.score)}
      </div>
      {members.map(toPlayerRow)}
    </CenteredColumn>
  );
}

function AnimatableScore(props: { score: number }) {
  const lastScore = useRef(props.score);

  useEffect(() => {
    lastScore.current = props.score;
  }, [props.score]);

  if (props.score - lastScore.current === 0) {
    return <span>{props.score}</span>;
  }

  return (
    <span style={{ position: "relative" }}>
      {props.score}
      <Animate
        animation="fade-disappear-up"
        style={{
          position: "absolute",
          fontSize: "small",
          top: -16,
          right: 0,
        }}
      >
        +{props.score - lastScore.current}
      </Animate>
    </span>
  );
}

function insertAnimatableText(text: string, number: number) {
  let numberAsText = number + '';
  let foundIndex = text.indexOf(numberAsText);

  if (foundIndex !== -1) {
    return <>{[
      text.slice(0, foundIndex),
      <AnimatableScore key="score-obj" score={number} />,
      text.slice(foundIndex + numberAsText.length)
    ]}</>
  } else {
    return text;
  }
}

function toPlayerRow(playerId: string) {
  return <PlayerRow key={playerId} playerId={playerId} />;
}

function PlayerRow(props: { playerId: string }) {
  const { gameState, setGameState } = useContext(GameModelContext);
  const player = gameState.players[props.playerId];
  const [hovered, setHovered] = useState(false);

  const iconContainerStyle = {
    marginLeft: 4,
    width: 20,
  };

  return (
    <div
      style={{ marginLeft: 16, display: "flex", flexFlow: "row" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {player.name}
      {hovered ? (
        <div
          style={{
            ...iconContainerStyle,
            cursor: "pointer",
          }}
          onClick={() => {
            delete gameState.players[props.playerId];
            setGameState(gameState);
          }}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      ) : (
        <div style={iconContainerStyle} />
      )}
    </div>
  );
}
