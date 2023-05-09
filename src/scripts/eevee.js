import { generateItems, updateItems, items } from './items.js';

class Player {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = 250;
    this.y = 350;
    this.speed = 4;
    this.dx = 0;
    this.dy = 0;

    this.currentEvolution = 'eevee';
    this.evolutionSprites = {
      eevee: '../assets/eevee_back.png',
      flareon: '../assets/flareon_back.png',
      jolteon: '../assets/jolteon_back.png',
      vaporeon: '../assets/vaporeon_back.png',
    };

    this.sprite = new Image();
    this.sprite.src = this.evolutionSprites[this.currentEvolution];
  }

  draw() {
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }
}

// Player.prototype.draw = function() {
//   let flareon = new Image();
//       flareon.src = "..assets/flareon_back.png";

//       let jolteon = new Image();
//       jolteon.src = '..assets/jolteon_back.png';

//       let vaporeon = new Image();
//       vaporeon.src = '..assets/vaporeon_back.png';
// }

export let player = new Player();

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
  player.draw();
  generateItems();
  checkCollision();
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


function checkCollision() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (player.x < item.x + 25 &&
      player.x + player.width > item.x &&
      player.y < item.y + 25 &&
      player.y + player.height > item.y) {
        items.splice(i, 1);

        if (item.type === 'fire') {
          player.currentEvolution = 'flareon';
        } else if (item.type === 'thunder') {
          player.currentEvolution = 'jolteon';
        } else if (item.type === 'water') {
          player.currentEvolution = 'vaporeon';
        }
  
        player.sprite.src = player.evolutionSprites[player.currentEvolution];
      }
  }
}


// export {clear, drawOuterBackground, drawPlayer, generateItems, updateItems, newPos};
export { renderChar };