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
      eevee_stunned: '../assets/eevee_stunned.png',
      flareon_stunned: '../assets/flareon_stunned.png',
      jolteon_stunned: '../assets/jolteon_stunned.png',
      vaporeon_stunned: '../assets/vaporeon_stunned.png'
    };

    this.sprite = new Image();
    this.sprite.src = this.evolutionSprites[this.currentEvolution];

    // this.tempSprite = null;
    // this.isTempSpriteActive = false;
    // this.tempSpriteDuration = 3000;
  }

  draw() {
    // if (this.isTempSpriteActive && this.tempSprite.tempSprite) {
    //   ctx.drawImage(this.tempSprite, this.x, this.y, this.width, this.height);
    // } else {
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  // }
}

  // setTempSprite(spriteSrc) {
  //   this.tempSprite = new Image();
  //   this.tempSprite.src = spriteSrc;
  //   this.isTempSpriteActive = true;

  //   setTimeout(() => {
  //     this.isTempSpriteActive = false;
  //     this.tempSprite = null;
  //   }, this.tempSpriteDuration);
  // }
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

// function drawPlayer() {
//   ctx.drawImage(eevee, player.x, player.y, player.width, player.height);
// }

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
        } else if (item.type === 'poke' && player.currentEvolution === 'eevee') {
          player.currentEvolution = 'eevee_stunned';
        } else if (item.type === 'great' && player.currentEvolution === 'eevee') {
          player.currentEvolution = 'eevee_stunned';
        } else if (item.type === 'great' && player.currentEvolution === 'flareon') {
          player.currentEvolution = 'flareon_stunned';
        } else if (item.type === 'great' && player.currentEvolution === 'jolteon') {
          player.currentEvolution = 'jolteon_stunned';
        } else if (item.type === 'great' && player.currentEvolution === 'vaporeon') {
          player.currentEvolution = 'vaporeon_stunned';
        } else if (item.type === 'ultra' && player.currentEvolution === 'eevee') {
          player.currentEvolution = 'eevee_stunned';
        } else if (item.type === 'ultra' && player.currentEvolution === 'flareon') {
          player.currentEvolution = 'flareon_stunned';
        } else if (item.type === 'ultra' && player.currentEvolution === 'jolteon') {
          player.currentEvolution = 'jolteon_stunned';
        } else if (item.type === 'ultra' && player.currentEvolution === 'vaporeon') {
          player.currentEvolution = 'vaporeon_stunned';
        };
  
        player.sprite.src = player.evolutionSprites[player.currentEvolution];

        // player.setTempSprite(item.type + '.png');
      }
  }
}


// export {clear, drawOuterBackground, drawPlayer, generateItems, updateItems, newPos};
export { renderChar };