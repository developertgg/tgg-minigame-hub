const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Simple player and obstacles
let player = { x: 50, y: canvas.height - 60, width: 30, height: 30, color: 'red' };
let obstacles = [
  { x: 150, y: canvas.height - 60, width: 100, height: 30 },
  { x: 300, y: canvas.height - 120, width: 100, height: 30 },
  { x: 450, y: canvas.height - 180, width: 100, height: 30 },
];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
  // Draw obstacles
  ctx.fillStyle = 'green';
  obstacles.forEach(obs => {
    ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
  });
}

function update() {
  // Simple gravity
  if (player.y + player.height < canvas.height) {
    player.y += 5;
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
