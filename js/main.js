const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const TILE_SIZE = 16;
const COLS = Math.floor(canvas.width / TILE_SIZE);
const ROWS = Math.floor(canvas.height / TILE_SIZE);

const world = new World(COLS, ROWS, TILE_SIZE);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  world.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
