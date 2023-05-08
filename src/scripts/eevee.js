import { generateItems, updateItems } from './items.js';

class Player {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 250;
    this.y = 350;
    this.speed = 4;
    this.dx = 0;
    this.dy = 0;
  }
}

let player = new Player();

const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 550;
canvas.height = 400;

let eevee = new Image();
eevee.src = "../assets/eevee_back.png";

const outerBackground = new Image();
outerBackground.src = "../assets/EvolutionForest.png";

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

export function keyDown(e) {
  if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowLeft') {
    moveLeft();
  }
}

export function keyUp(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    player.dx = 0;
    player.dy = 0;
  } 
}

// export {clear, drawOuterBackground, drawPlayer, generateItems, updateItems, newPos};
export { renderChar };