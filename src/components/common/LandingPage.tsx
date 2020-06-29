import React from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { RandomFourCharacterString } from "../../state/RandomFourCharacterString";
import { CenteredColumn } from "./LayoutElements";
import { Button } from "./Button";
import { MiniMarkdown } from "./MiniMarkdown";
import { LongwaveAppTitle } from "./Title";
import { GetLocaleData, localeList } from "../../locale/GetLocaleData";

export function LandingPage() {
  const history = useHistory();
  const { locale } = useParams();
  const localeObj = GetLocaleData(locale);

  let linkList = localeList.map((x, idx) => <Link key={idx} to={`/index-${x.prefix}`}>{x.name}</Link>);
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
        text={localeObj.string('createRoomButton')}
        onClick={() => {
          history.push("/" + (locale ? locale + '/' : '') + RandomFourCharacterString());
        }}
      />
      <p style={{ margin: 8 }}>
        <MiniMarkdown text={localeObj.string('welcome')} />
      </p>
      <p style={{ margin: 8, fontSize: "small" }}>
        {linkList}
      </p>
    </CenteredColumn>
  );
}
