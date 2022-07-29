const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

/*
// Read the game data and create a list and append it to body
// This is kind of raw. Another version is in below. 

const scoreResList = document.createElement("ul");

for (let game of warriorsGames) {
  // destructure
  const { homeTeam, awayTeam } = game;

  // destructure to get teamNames and scores
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scores = "";

  if (aPoints > hPoints) {
    scores = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scores = `${aPoints} - <b>${hPoints}</b>`;
  }

  //construct list items with team name
  const gameLi = document.createElement("li");
  gameLi.innerHTML = `${teamNames}     ${scores}`;

  // get the goldState Object
  const goldenState = hTeam === "Golden State" ? homeTeam : awayTeam;

  if (goldenState.isWinner) {
    gameLi.classList.add("win");
  } else {
    gameLi.classList.add("loss");
  }

  //append it to ul tag
  scoreResList.appendChild(gameLi);
}

// append scoreResList to body
document.body.prepend(scoreResList);

*/

// Refactor - little better
const makeChart = (data, targetTeam) => {
  const resDiv = document.createElement("div");

  const header = document.createElement("h2");

  header.innerHTML = `Scorecard of Team : ${targetTeam}`;
  resDiv.appendChild(header);

  const scoreResList = document.createElement("ul");

  for (let game of data) {
    //construct list items with team name
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreLine(game);

    const isTargetWinner = isWinner(game, targetTeam);

    if (isTargetWinner) {
      gameLi.classList.add("win");
    } else {
      gameLi.classList.add("loss");
    }

    //append it to ul tag
    scoreResList.appendChild(gameLi);
  }

  resDiv.appendChild(scoreResList);

  return resDiv;
};

// get score line
const getScoreLine = (game) => {
  // destructure
  const { homeTeam, awayTeam } = game;

  // destructure to get teamNames and scores
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;

  const teamNames = `${aTeam} @ ${hTeam}`;
  let scores = "";

  if (aPoints > hPoints) {
    scores = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scores = `${aPoints} - <b>${hPoints}</b>`;
  }

  return `${teamNames}     ${scores}`;
};

// to find whether targetTeam is a winner or not
const isWinner = (game, targetTeam) => {
  // destructure
  const { homeTeam, awayTeam } = game;

  // get the goldState Object
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;

  return target.isWinner;
};

const chart1 = makeChart(warriorsGames, "Golden State");

const chart2 = makeChart(warriorsGames, "Houston");

// append scoreResList to body
document.body.prepend(chart1);

// append scoreResList to body
document.body.prepend(chart2);
