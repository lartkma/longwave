import { Team } from '../state/GameState';

type LocaleExpression = string | ((params: {[key: string]: any}) => string);

type LocaleStrings = { 
  welcome: LocaleExpression,
  credits: LocaleExpression,
  createRoomButton: LocaleExpression,
  standardModeButton: LocaleExpression,
  freeModeButton: LocaleExpression,
  coopModeButton: LocaleExpression,
  roomIdTitle: LocaleExpression,
  resetRoomButton: LocaleExpression,
  playerNamePrompt: LocaleExpression,
  joinTeamPrompt: LocaleExpression,
  joinGameButton: LocaleExpression,
  startGameButton: LocaleExpression,
  teamLeftName: LocaleExpression,
  teamRightName: LocaleExpression,
  teamUnsetName: LocaleExpression,
  clueWaitingMessage: LocaleExpression,
  drawNewCardButton: LocaleExpression,
  cluePlaceholder: LocaleExpression,
  clueHelpMessage: LocaleExpression,
  clueTip1Message: LocaleExpression,
  clueTip2Message: LocaleExpression,
  clueTip3Message: LocaleExpression,
  clueTip4Message: LocaleExpression,
  clueSubmitButton: LocaleExpression,
  dialTargetLabel: LocaleExpression,
  dialGuessingLabel: LocaleExpression,
  freeModeTitle: LocaleExpression,
  pointCounter: LocaleExpression,
  clueGivenLabel: LocaleExpression,
  clueGivenWaiting: LocaleExpression,
  guessSubmitButton: LocaleExpression,
  inviteMessage: LocaleExpression,
  inviteShareURL: LocaleExpression,
  counterGuessLeft: LocaleExpression,
  counterGuessRight: LocaleExpression,
  counterGuessWaiting: LocaleExpression,
  scoreGivenMessage: LocaleExpression,
  counterScoreMessageYes: LocaleExpression,
  counterScoreMessageNo: LocaleExpression,
  resetGameButton: LocaleExpression,
  winTeamMessage: LocaleExpression,
  drawNextCardButton: LocaleExpression,
  catchupMessageTitle: LocaleExpression,
  catchupMessageDescription: LocaleExpression,
  previousTurnMessage: LocaleExpression
}

export class LocaleData {
  static parameterRegex = /{(\w+)}/g;

  readonly prefix: string;
  readonly name: string;
  private strings: LocaleStrings;

  constructor(prefix: string, name: string, strings: LocaleStrings) {
    this.prefix = prefix;
    this.name = name;
    this.strings = strings;
  }

  string(key: keyof LocaleStrings, parameters?: {[key: string]: any}): string {
    let result: string;
    if (this.strings[key] instanceof Function) {
      result = (this.strings[key] as Function)(parameters || {});
    } else {
      result = (this.strings[key] as string);
    }

    if (parameters) {
      return result.replace(LocaleData.parameterRegex,
        (match, group) => parameters[group] !== undefined ? parameters[group] : match);
    } else {
      return result;
    }
  }

  teamName(team: Team) {
    if (team === Team.Left) {
      return this.strings.teamLeftName;
    }
    if (team === Team.Right) {
      return this.strings.teamRightName;
    }
    return this.strings.teamUnsetName;
  }
}
