
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 550;
canvas.height = 400;

const items = [];
const maxItems = 20;
let timer = 0;

function Item(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
}

Item.prototype.update = function() {
  this.y += this.speed;
}

Item.prototype.draw = function() {
  ctx.fillRect(this.x, this.y, 20, 20);
}

function generateItems() {

  timer++;
  if (timer % 100 === 0 && items.length < maxItems) {
  // const row = Math.floor(Math.random() * canvas.height);
  // const numItems = Math.floor(Math.random() * 1) + 1;

  // for (let i = 0; i < numItems; i++) {
    const x = Math.random() * (canvas.width - 20);
    const speed = Math.random() * 0.5 + 1;

    const item = new Item(x, 0, speed);
    items.push(item);
  }
}

function updateItems() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.update();
    item.draw();
  }
}

const player = {
  width: 50,
  height: 50,
  x: 250,
  y: 350,
  speed: 4,
  dx: 0,
  dy: 0
};

let eevee = new Image();
eevee.src = "assets/eevee_back.png";
// eevee.onload = function() {
//   renderChar();
// }

const outerBackground = new Image();
outerBackground.src = "assets/EvolutionForest.png";
// outerBackground.onload = function() {
//   ctx.drawImage(outerBackground, 0, 0, canvas.width, canvas.height);
// }

function drawOuterBackground() {
  ctx.drawImage(outerBackground, 0, 0, canvas.width, canvas.height);
}

function drawPlayer() {
  ctx.drawImage(eevee, player.x, player.y, player.width, player.height);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y += player.dy;

  detectWalls();
}

function detectWalls() {
  if (player.x < 0) {
    player.x = 0;
  }

  if (player.x + player.width > canvas.width) {
    player.x = canvas.width - player.width;
  }
}

function renderChar() {
  clear();
  drawOuterBackground();
  drawPlayer();
  generateItems();
  updateItems();
  newPos();
  requestAnimationFrame(renderChar);
}

function moveRight() {
  player.dx = player.speed;
}

function moveLeft() {
  player.dx = -player.speed;
}

function keyDown(e) {
  if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowLeft') {
    moveLeft();
  }
}

function keyUp(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    player.dx = 0;
    player.dy = 0;
  }
}

// generateItems();
renderChar();
// generateItems();
// updateItems();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);