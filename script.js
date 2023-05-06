const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 550; //300-250
canvas.height = 400; //300-250

// ctx.fillStyle = "brown";
// ctx.fillRect(250, 250, 50, 50);

// const eevee = new Image()
// eevee.src = "assets/eevee_back.png"

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
eevee.src = "assets/eevee_back.png"

const outerBackground = new Image();
outerBackground.src = "assets/EvolutionForest.png"

function drawOuterBackground() {
  ctx.drawImage(outerBackground, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(drawOuterBackground);
}

function drawPlayer() {
  ctx.drawImage
  ctx.drawImage(eevee, player.x, player.y, player.width, player.height);
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
  player.x += player.dx;
  player.y +=  player.dy;

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
  newPos();
  requestAnimationFrame(renderChar); //?
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
  // } else if (e.key === 'ArrowUp') {
  //   moveUp();
  // } else if (e.key === 'ArrowDown') {
  //   moveDown();
  }
}

function keyUp(e) {
  if (e.key === 'ArrowRight' || 
  e.key === 'ArrowLeft' ||
  e.key === 'Left' ||
  e.key === 'Right') 
  {
    player.dx = 0;
    player.dy = 0;
  }
}

// drawOuterBackground();
renderChar();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);