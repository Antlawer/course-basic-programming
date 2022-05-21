let players = ['x', 'o'];
let activePlayer = 0;

let gamingBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function startGame() {
  gamingBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  renderBoard(gamingBoard);
}

function click(number, column) { 
  if (activePlayer === 0) {
    gamingBoard[number][column] = players[0];
    activePlayer = 1;
  } else {
     gamingBoard[number][column] = players[1];
    activePlayer = 0;
  }
  renderBoard(gamingBoard);
  whoWinner(gamingBoard[number][column]);
}

function whoWinner(player) {
  if (gamingBoard[0][0] === player && gamingBoard[1][1] === player && gamingBoard[2][2] === player || 
     gamingBoard[2][0] === player && gamingBoard[1][1] === player && gamingBoard[0][2] === player) {
      showWinner(activePlayer);
     }
  for (let g = 0; g < 3; g++) {
  if (gamingBoard[g][0] === player && gamingBoard[g][1] === player && gamingBoard[g][2] === player ||
     gamingBoard[2][g] === player && gamingBoard[1][g] === player && gamingBoard[0][g] === player) {
       showWinner(activePlayer);
     }
  }
}
