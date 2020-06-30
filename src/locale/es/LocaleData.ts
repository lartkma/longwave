import { LocaleData } from "../LocaleData";

const SpanishDefaultData = new LocaleData('es', 'Español', {
  strings: {
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
  },
  spectrumCards: [
    ["Mal actor", "Buen actor"],
    ["Básico", "Hipster"],
    ["Sin valor", "Invaluable"],
    ["Natural", "Cultivado"],
    ["Sucede lentamente", "Sucede con rapidez"],
    ["Oficio", "Carrera profesional"],
    ["Redondeado", "Puntiagudo"],
    ["Prueba de que Dios existe", "Prueba de que Dios no existe"],
    ["Lo amaron", "Lo odiaron"],
    ["El Lado Luminoso de la Fuerza", "El Lado Oscuro de la Fuerza"],
    ["Estúpido", "Brillante"],
    ["Artesanal", "Producido en serie"],
    ["Nadie lo hace", "Todos lo hacen"],
    ["De vida corta", "De vida larga"],
    ["Trabajo peligroso", "Trabajo seguro"],
    ["Fantasía", "Ciencia ficción"],
    ["Simple", "Extravagante"],  
    ["Tiene mala reputación", "Tiene buena reputación"],
    ["Cosa que es ético comer", "Cosa que no es ético comer"],
    ["Película", "Filme"],
    ["No está de moda", "Está de moda"],  
    ["Pelea por la libertad", "Terrorista"],
    ["Mal superpoder", "Buen superpoder"],
    ["Ineficaz", "Eficaz"],
    ["Es mejor caliente", "Es mejor frío"],
    ["Cuadrado", "Redondo"],
    ["Temporal", "Permanente"],
    ["Parece una persona", "No parece una persona"],
    ["No es cool", "Es cool"],
    ["Peor persona viva", "Mejor persona viva"],
    ["Infravalorado", "Sobrevalorado"],
    ["Comida que ensucia", "Comida que no ensucia"],
    ["Imperdonable", "Perdonable"],
    ["Fracaso", "Obra maestra"],
    ["Inocuo", "Perjudicial"],
    ["Gryffindor", "Slytherin"],
    ["Antihigiénico", "Higiénico"],
    ["Música mala", "Música buena"],
    ["Inútil", "Útil"],
    ["Película que arruinaría Godzilla", "Película que Godzilla haría mejor"],
    ["Sin importancia", "Importante"],
    ["Fácil de deletrear", "Dificil de deletrear"],
    ["Vicio", "Virtud"],
    ["Músico infravalorado", "Músico sobrevalorado"],
    ["Actividad impopular", "Actividad popular"],
    ["Dividido", "Entero"],
    ["Poco confiable", "Confiable"],
    ["Fácil de matar", "Dificil de matar"],
    ["Inestable", "Estable"],
    ["Animal redondo", "Animal puntiagudo"],
    ["Programa de TV malo", "Programa de TV bueno"],
    ["Tradicionalmente masculino", "Tradicionalmente femenino"],
    ["Parte del cuerpo inútil", "Parte del cuerpo útil"],
    ["Moda pasajera", "Clásico"],
    ["Débil", "Fuerte"],
    ["Cereal desagradable", "Cereal delicioso"],
    ["Malo", "Bueno"],
    ["Poco adictivo", "Muy adictivo"],
    ["Inútil en una emergencia", "Útil en una emergencia"],
    ["Para niños", "Para adultos"],
    ["Villano", "Héroe"],
    ["Cosa infravalorada que puedes hacer", "Cosa sobrevalorada que puedes hacer"],
    ["Aburrido", "Emocionante"],
    ["Oloroso de mala manera", "Oloroso de buena manera"],
    ["Impopular", "Popular"],
    ["Amigo", "Enemigo"],
    ["Invento inútil", "Invento útil"],
    ["Liberal", "Conservador"],
    ["Frío", "Caliente"],
    ["Normal", "Extraño"],
    ["Descolorido", "Colorido"],
    ["Bajo en calorías", "Alto en calorías"],
    ["Tema fácil", "Tema difícil"],
    ["Desconocido", "Famoso"],
    ["Raro", "Común"],
    ["Emoji no sexy", "Emoji sexy"],
    ["Barato", "Caro"],
    ["Arma infravalorada", "Arma sobrevalorada"],
    ["Su sensación es desagradable", "Su sensación es agradable"],
    ["Innecesario", "Esencial"],
    ["Sucio", "Limpio"],
    ["Requiere suerte", "Requiere habilidades"],
    ["Insípido", "Sabroso"],
    ["Tema aburrido", "Tema fascinante"],
    ["Casual", "Formal"],
    ["Mal pagado", "Demasiado bien pagado"],
    ["Seco", "Mojado"],
    ["Habilidad infravalorada", "Habilidad sobrevalorada"],
    ["Prohibido", "Promovido"],
    ["Canción triste", "Canción feliz"],
    ["Frágil", "Durable"],
    ["Cerebrito", "Bobo"],
    ["Bueno", "Malvado"],
    ["Peor día del año", "Mejor día del año"],
    ["Mal hábito", "Buen habito"],
    ["Amante de los gatos", "Amante de los perros"],
    ["Sabio", "Inteligente"],
    ["Dificil de hacer", "Fácil de hacer"],
    ["Actividad mental", "Actividad física"],
    ["Tema neutral", "Tema controvertido"],
    ["Placer culposo", "Lo amas sin tener que ocultarlo"],
    ["Sin talento", "Talentoso"],
    ["Dificil de encontrar", "Fácil de encontrar"],
    ["Hombre feo", "Hombre hermoso"],
    ["Dificil de recordar", "Fácil de recordar"],
    ["Vulgar", "Culto"],
    ["Malo para la salud", "Saludable"],
    ["Hombre malo", "Hombre bueno"],
    ["Históricamente importante", "Históricamente irrelevante"],
    ["Sin pelo", "Peludo"],
    ["Inflexible", "Flexible"],
    ["Mascota normal", "Mascota exótica"],
    ["Introvertido", "Extrovertido"],
    ["El libro fue mejor", "La película fue mejor"],
    ["Mala película", "Buena película"],
    ["Feo", "Hermoso"],
    ["Persona madura", "Persona inmadura"],
    ["Cosa infravalorada que puedes tener", "Cosa sobrevalorada que puedes tener"],
    ["Ordinario", "Extraordinario"],
    ["Difícil de pronunciar", "Fácil de pronunciar"],
    ["Mal hecho", "Bien hecho"],
    ["No es un sándwich", "Es un sándwich"],
    ["Peligroso", "Seguro"],
    ["De importancia cultural", "Sin importancia cultural"],
    ["Opcional", "Obligatorio"],
    ["Letra del abecedario infravalorada", "Letra del abecedario sobrevalorada"],
    ["De baja calidad", "De alta calidad"],
    ["Animal que no es sexy", "Animal que es sexy"],
    ["Lugar silencioso", "Lugar ruidoso"],
    ["Comedia", "Drama"],
    ["Necesidad", "Deseo"],
    ["Alimento seco", "Alimento húmedo"],
    ["Reemplazable", "Irreemplazable"],
    ["Peor atleta de todos los tiempos", "Mejor atleta de todos los tiempos"],
    ["No ético", "Ético"],
    ["Mal regalo", "Buen regalo"],
    ["Malo como ingrediente de una pizza", "Bueno como ingrediente de una pizza"],
    ["Distopia", "Utopía"],
    ["Áspero", "Liso"],
    ["Malo para ti", "Bueno para ti"],
    ["Pacífico", "Aguerrido"],
    ["Película infravalorada", "Película sobrevalorada"],
    ["Sabe feo", "Sabe rico"],
    ["Deporte", "Juego"],
    ["Película triste", "Película alegre"],
    ["Pérdida de tiempo", "Buen uso del tiempo"],
    ["Compañía menos malévola", "Compañía más malévola"],
    ["Botana", "Comida"],
    ["Increíble", "Creíble"],
    ["Baratija", "Refinado"],  
    ["Huele mal", "Huele bien"],
    ["Star Wars", "Star Trek"],
    ["Animal que asusta", "Animal agradable"],
    ["De uso generalizado", "De uso especializado"],  
    ["Oscuro", "Claro"],
    ["Actor infravalorado", "Actor sobrevalorado"],
    ["Difícil de usar", "Fácil de usar"],
    ["Cansado", "Energético"],
    ["Años 80", "Años 90"],
    ["Mala persona", "Buena persona"],
    ["Alimento para sobrevivir", "Alta cocina"],
    ["Suave", "Duro"],
    ["Cosa que es normal tener", "Cosa que no es normal tener"],
    ["Recto", "Con curvas"],
    ["Modelo a seguir", "Mala influencia"],
    ["Carrera inútil", "Carrera útil"],
    ["Persona que cae mal", "Persona que cae bien"],
    ["Película de acción", "Película de aventura"]
  ],
  advancedSpectrumCards: [
    ["Corto", "Largo"],
    ["Peor año de la historia", "Mejor año de la historia"],
    ["Famoso", "Infame"],
    ["Dios menos poderoso", "Dios más poderoso"],
    ["Color que no es sexy", "Color que es sexy"],
    ["Te hace bien a ti", "Les hace bien a todos"],
    ["Mal presidente", "Buen presidente"],
    ["Raro", "Extraño"],
    ["Derivado", "Original"],
    ["Etiqueta", "Modales"],
    ["El peor", "El mejor"],
    ["Número pequeño", "Número grande"],
    ["No es suficiente", "Es demasiado"],
    ["Cosa en la que no te puedes sentar fácilmente", "Cosa en la que te puedes sentar fácilmente"],
    ["Talento", "Habilidad"],
    ["Peor era para viajar en el tiempo", "Mejor era para viajar en el tiempo"],
    ["No abrazable", "Abrazable"],
    ["Heterogéneo", "Homogéneo"],
    ["Fuera de control", "Bajo control"],
    ["Popular", "Elitista"],
    ["Apartidista", "Partidista"],
    ["Nombre de perro", "Nombre de gato"],
    ["Hecho poco conocido", "Hecho muy conocido"],
    ["Socialista", "Capitalista"],
    ["Dulce malo", "Dulce bueno"],
    ["Tradicional", "Radical"],
    ["Se siente feo en la boca", "Se siente bien en la boca"],
    ["Ilegal", "Legal"],
    ["Nunca está a tiempo", "Siempre está a tiempo"],
    ["No llegará a 100 años", "Llegará a los 100 años"],
    ["Mal personaje de Disney", "Buen personaje de Disney"],
    ["Similar", "Idéntico"],
    ["Blando", "Firme"],
    ["Tema divertido", "Tema serio"],
    ["Sin aroma", "Con aroma"],
    ["Horizontal", "Vertical"],
    ["Chico", "Pequeño"],
    ["Palabra fea", "Palabra bonita"],
    ["Guapura", "Hermosura"],
    ["Mal consejo", "Buen consejo"],
    ["Ilegal", "Prohibido"],
    ["No es arte", "Es arte"],
    ["Chisme", "Noticia"],
    ["Placer culposo", "Simplemente malo"],
    ["Tradicional", "Vanguardista"],
    ["Cierto", "Falso"],
    ["Saludo normal", "Saludo extraño"],
    ["Dictadura", "Democracia"],
    ["Impotente", "Poderoso"],
    ["No vapea", "Vapea"],
    ["Persona aburrida", "Persona divertida"],
    ["Libro infravalorado", "Libro sobrevalorado"],
    ["Pensamiento profundo", "Pensamiento superficial"],
    ["Mala escuela", "Buena escuela"],
    ["Sabiduría convencional", "Creencia inusual"],
    ["Peor tarea doméstica", "Mejor tarea doméstica"],
    ["Especie amenazada", "Especie con sobrepoblación"],
    ["Azul", "Verde"],
    ["Fruta", "Verdura"],
    ["Ciencia", "Seudociencia"],
    ["Tema sin importancia", "Tema trascendental"],  
    ["Mala inversión", "Buena inversión"],
    ["Estacionario", "Móvil"],
    ["Tema local", "Tema global"],
    ["Emocionante", "Aterrorizante"],
    ["Nerd", "Deportista"],
    ["Esperado", "Inesperado"],
    ["Persona a quien puedes vencer en una pelea", "Persona que te vencería en una pelea"],
    ["Limitado", "Infinito"],
    ["Evento informal", "Evento formal"],
    ["Fobia irracional", "Fobia razonable"],
    ["Juego infravalorado", "Juego sobrevalorado"],
    ["Religioso", "Sacrílego"],
    ["Insípido", "Condimentado"],
    ["Persona auténtica", "Persona falsa"],
    ["Innatural", "Natural"],
    ["Secreto", "Del conocimiento público"],
    ["Demasiado pequeño", "Demasiado grande"],
    ["Es arte", "Es comercio"],
    ["Artista de un solo éxito", "Ícono del pop"],
    ["Pokémon no sexy", "Pokémon sexy"],
    ["Silencioso", "Ruidoso"],
    ["Inclusivo", "Exclusivo"],
    ["Raza de perros mala", "Raza de perros buena"]
  ]
});

export default SpanishDefaultData;