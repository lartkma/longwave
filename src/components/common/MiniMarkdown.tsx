import React from "react";

const formatElements: RegExp = /(?:\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\[\]]+)\]\(([^()]+)\))/g;

export function MiniMarkdown(props: { text: string }) {
  let lastIndex = 0;
  let foundElement;
  let parsedText: any[] = [];
  let reactKey = 0;

  while ((foundElement = formatElements.exec(props.text)) != null) {
    if (foundElement.index !== lastIndex) {
      parsedText.push(props.text.slice(lastIndex, foundElement.index));
    }

    if (foundElement[1]) {  // An **expression** found
      parsedText.push(<strong key={reactKey++}>{foundElement[1]}</strong>);
    } else if (foundElement[2]) {   // An *expression* found
      parsedText.push(<em key={reactKey++}>{foundElement[2]}</em>);
    } else if (foundElement[3] && foundElement[4]) {  // An [expression](link) found
      parsedText.push(<a key={reactKey++} href={foundElement[4]} target="_blank" rel="noopener noreferrer">{foundElement[3]}</a>);
    }

    lastIndex = foundElement.index + foundElement[0].length;
  }

  if (props.text && lastIndex !== props.text.length) {
    parsedText.push(props.text.slice(lastIndex));
  }

  return <>{parsedText}</>;
}
