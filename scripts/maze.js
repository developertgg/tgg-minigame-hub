const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const rows = 10;
const cols = 10;
const cellSize = canvas.width / cols;

// Simple maze representation (0 = path, 1 = wall)
const maze = [
  [0,1,1,0,0,1,0,0,0,0],
  [0,1,0,1,0,1,0,1,1,0],
  [0,0,0,1,0,0,0,1,0,0],
  [0,1,1,1,1,1,0,1,0,1],
  [0,0,0,0,0,0,0,1,0,1],
  [1,1,1,1,1,0,0,1,0,1],
  [0,0,0,0,0,0,0,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0],
];

function drawMaze() {
  for(let row = 1; row < rows; row++) {
    for(let col = 0; col < cols; col++) {
      if(maze[row][col] === 1) {
        ctx.fillStyle = 'red';
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      } else {
        ctx.fillStyle = 'white';
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
      }
    }
  }
}

drawMaze();
