export function ReplaceParameters(text: string, parameterValues: {[key: string]: any}): string {
  return text.replace(/{(\w+)}/g, (_, group) => parameterValues[group]);
}
