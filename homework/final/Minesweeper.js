let boardSize = 10; // 遊戲板大小
const numMines = 10; // 地雷數量

let board = []; // 遊戲板
let revealed = []; // 已揭開的單元格
let gameOver = false; // 遊戲是否結束

function startGame() {
  const sizeInput = document.getElementById('boardSize');
  boardSize = parseInt(sizeInput.value);
  if (boardSize < 5 || boardSize > 20) {
    alert('請輸入有效的遊戲板大小（5到20之間的數字）！');
    return;
  }
  resetGame();
  createBoard();
  placeMines();
}

function resetGame() {
  const boardContainer = document.querySelector('.board');
  while (boardContainer.firstChild) {
    boardContainer.removeChild(boardContainer.firstChild);
  }
  board = [];
  revealed = [];
  gameOver = false;
}

function createBoard() {
  const boardContainer = document.querySelector('.board');
  boardContainer.style.gridTemplateColumns = `repeat(${boardSize}, 20px)`;
  boardContainer.style.gridTemplateRows = `repeat(${boardSize}, 20px)`;

  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-row', i);
      cell.setAttribute('data-col', j);
      cell.addEventListener('click', handleClick);
      boardContainer.appendChild(cell);
      row.push({
        element: cell,
        hasMine: false,
        revealed: false
      });
    }
    board.push(row);
    revealed.push(new Array(boardSize).fill(false));
  }
}

function placeMines() {
  let minesPlaced = 0;
  let numMines=boardSize;
  if(numMines>=14) numMines*=2;
  else if(numMines>=10) numMines*=1.5;

  while (minesPlaced < numMines) {
    const row = Math.floor(Math.random() * boardSize);
    const col = Math.floor(Math.random() * boardSize);
    if (!board[row][col].hasMine) {
      board[row][col].hasMine = true;
      minesPlaced++;
    }
  }
}

function checkWin() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (!board[i][j].hasMine && !revealed[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function showAdjacentMines(row, col) {
  const adjacentCells = [
    { row: row - 1, col: col - 1 },
    { row: row - 1, col },
    { row: row - 1, col: col + 1 },
    { row, col: col - 1 },
    { row, col: col + 1 },
    { row: row + 1, col: col - 1 },
    { row: row + 1, col },
    { row: row + 1, col: col + 1 }
  ];

  let mineCount = 0;
  adjacentCells.forEach(cell => {
    const { row, col } = cell;
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize && board[row][col].hasMine) {
      mineCount++;
    }
  });

  return mineCount;
}

function revealCell(row, col) {
  const cell = board[row][col];
  cell.revealed = true;
  revealed[row][col] = true;
  cell.element.classList.remove('cell');
  cell.element.classList.add('revealed');
  cell.element.removeEventListener('click', handleClick);

  if (cell.hasMine) {
    cell.element.textContent = 'X';
    gameOver = true;
    alert('你踩到地雷了！遊戲結束。');
  } else {
    const mineCount = showAdjacentMines(row, col);
    if (mineCount > 0) {
      cell.element.textContent = mineCount;
    } else {
      const adjacentCells = [
        { row: row - 1, col: col - 1 },
        { row: row - 1, col },
        { row: row - 1, col: col + 1 },
        { row, col: col - 1 },
        { row, col: col + 1 },
        { row: row + 1, col: col - 1 },
        { row: row + 1, col },
        { row: row + 1, col: col + 1 }
      ];
      adjacentCells.forEach(cell => {
        const { row, col } = cell;
        if (row >= 0 && row < boardSize && col >= 0 && col < boardSize && !revealed[row][col]) {
          revealCell(row, col);
        }
      });
    }

    if (checkWin()) {
      gameOver = true;
      alert('恭喜你贏得了遊戲！');
    }
  }
}

function handleClick() {
  if (!gameOver) {
    const row = parseInt(this.getAttribute('data-row'));
    const col = parseInt(this.getAttribute('data-col'));
    revealCell(row, col);
  }
}