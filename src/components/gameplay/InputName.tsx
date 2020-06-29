import React from "react";
import { useRef } from "react";
import { CenteredColumn } from "../common/LayoutElements";
import { LongwaveAppTitle } from "../common/Title";
import { GetLocaleData } from "../../locale/GetLocaleData";

export function InputName(props: { locale: string, setName: (name: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const localeStrings = GetLocaleData(props.locale).strings;
  return (
    <CenteredColumn>
      <LongwaveAppTitle />
      <div>{localeStrings.playerNamePrompt}</div>
      <input
        type="text"
        ref={inputRef}
        onKeyDown={(event) => {
          if (!inputRef.current) {
            return false;
          }
          if (event.key !== "Enter") {
            return true;
          }
          props.setName(inputRef.current.value);
        }}
      />
    </CenteredColumn>
  );
}
