import React from "react";
import { useParams } from "react-router-dom";
import { MiniMarkdown } from "./MiniMarkdown";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function CommonFooter() {
  const { locale } = useParams();

  return (
    <div
      style={{
        margin: 8,
        paddingTop: 8,
        borderTop: "1px solid black",
        color: "gray",
        fontSize: "small",
      }}
    >
      <MiniMarkdown text={GetLocaleData(locale).strings.credits}/>
    </div>
  );
}
