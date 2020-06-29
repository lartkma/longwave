import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { RandomFourCharacterString } from "../../state/RandomFourCharacterString";
import { CenteredColumn } from "./LayoutElements";
import { Button } from "./Button";
import { MiniMarkdown } from "./MiniMarkdown";
import { LongwaveAppTitle } from "./Title";
import { GetLocaleData, GetLocaleList } from "../../locale/GetLocaleData";

export function LandingPage() {
  const history = useHistory();
  const { locale } = useParams();
  const localeStrings = GetLocaleData(locale).strings;

  let linkList = GetLocaleList().map((x, idx) => <Link key={idx} to={`/index-${x.prefix}`}>{x.name}</Link>);
  linkList = linkList.reduce((acc: any[], x, idx) => {
    if (idx !== 0) {
      acc.push(' | ');
    }
    acc.push(x);

    return acc;
  }, []);

  return (
    <CenteredColumn>
      <LongwaveAppTitle />
      <Button
        text={localeStrings.createRoomButton}
        onClick={() => {
          history.push("/" + RandomFourCharacterString());
        }}
      />
      <p style={{ margin: 8 }}>
        <MiniMarkdown text={localeStrings.welcome} />
      </p>
      <p style={{ margin: 8, fontSize: "small" }}>
        {linkList}
      </p>
    </CenteredColumn>
  );
}
