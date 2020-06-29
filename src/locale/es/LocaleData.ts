import { LocaleData } from "../LocaleData";

const SpanishDefaultData = new LocaleData('es', 'Español', {
  welcome: '**Longwave** es una adaptación online y en tiempo real del juego de mesa *Wavelength*. ¡Mejor acompañado con un chat de voz!',
  credits: '[Wavelength](https://www.wavelength.zone/) diseñado por Wolfgang Warsch, Alex Hague, y Justin Vickers. Adaptado a la web por Evan Bailey y Margarethe Schoen.',
  createRoomButton: 'Crear sala',
  standardModeButton: 'Por equipos: 4+ jugadores',
  freeModeButton: 'Juego libre: 2+ jugadores',
  coopModeButton: 'Cooperativo',
  roomIdTitle: 'ID de sala: {roomId}',
  resetRoomButton: 'Reiniciar sala',
  playerNamePrompt: 'Escribe tu nombre:',
  joinTeamPrompt: 'Únete a un equipo:',
  joinGameButton: 'Unirse',
  startGameButton: 'Iniciar juego',
  teamLeftName: 'EQUIPO IZQUIERDO',
  teamRightName: 'EQUIPO DERECHO',
  teamUnsetName: 'Los jugadores',
  clueWaitingMessage: 'Esperando a que {name} dé su pista...',
  drawNewCardButton: 'Roba una carta distinta',
  cluePlaceholder: 'Pista...',
  clueHelpMessage: 'Tu pista debe ser algún concepto que se ubique en el espectro indicado, conceptualmente en algún punto entre los dos extremos. Por ejemplo, "café" puede ser una buena pista que se ubique en el espectro de "caliente" a "frio".',
  clueTip1Message: 'Expresa una sola idea',
  clueTip2Message: 'Usa ambos extremos en el mismo sentido',
  clueTip3Message: 'No se permiten números',
  clueTip4Message: '¡Sé creativo!',
  clueSubmitButton: 'Enviar pista',
  dialTargetLabel: 'Objetivo',
  dialGuessingLabel: 'Adivinando...',
  freeModeTitle: 'Juego libre',
  pointCounter: ({value}) => value === 1 ? '{team}: {value} PUNTO' : '{team}: {value} PUNTOS',
  clueGivenLabel: 'Pista de {name}: **{clue}**',
  clueGivenWaiting: 'Esperando a que {team} adivine...',
  guessSubmitButton: 'Enviar respuesta de {team}',
  inviteMessage: 'Invita a otros jugadores a unirse al juego.',
  inviteShareURL: 'Compárteles esta URL: {url}',
  counterGuessLeft: 'El objetivo está más a la izquierda',
  counterGuessRight: 'El objetivo está más a la derecha',
  counterGuessWaiting: 'Esperando a que {team} decida derecha/izquierda...',
  scoreGivenMessage: ({score}) => 'Puntuación: ¡{score} ' + (score === 1 ? 'punto!' : 'puntos!'),
  counterScoreMessageYes: '{team} gana 1 punto por acertar su predicción.',
  counterScoreMessageNo: '{team} gana 0 puntos por no acertar su predicción.',
  resetGameButton: 'Reiniciar juego',
  winTeamMessage: '¡{team} gana!',
  drawNextCardButton: 'Robar una nueva carta de espectro',
  catchupMessageTitle: 'Bonus: {team} tiene un turno extra! ',
  catchupMessageDescription: 'Luego que un equipo gane 4 puntos en una ronda, se les dá una ronda adicional si están aun por detrás del otro equipo.',
  previousTurnMessage: 'Turno anterior'
});

export default SpanishDefaultData;
