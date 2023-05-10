import { generateItems, updateItems, items } from './items.js';

let points = 0;
let gameOver = false;
let gameStart = false;

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
      eevee: 'src/assets/eevee_back.png',
      flareon: 'src/assets/flareon_back.png',
      jolteon: 'src/assets/jolteon_back.png',
      vaporeon: 'src/assets/vaporeon_back.png',
      eevee_stunned: 'src/assets/eevee_stunned.png',
      flareon_stunned: 'src/assets/flareon_stunned.png',
      jolteon_stunned: 'src/assets/jolteon_stunned.png',
      vaporeon_stunned: 'src/assets/vaporeon_stunned.png'
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

export let player = new Player();

const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 550;
canvas.height = 400;

let eevee = new Image();
eevee.src = "src/assets/eevee_back.png";

const outerBackground = new Image();
outerBackground.src = "src/assets/EvolutionForest.png";

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

let animationId;
function renderChar() {
  // if (gameOver) {
  //   cancelAnimationFrame(animationId);
    
  //   return;
  // }
  if(!gameStart) {
    drawStartScreen();
    return;
  }

  clear();
  drawOuterBackground();
  
  generateItems();
  checkCollision();
  updateItems();

  newPos();
  player.draw();
  if (!gameOver){
    animationId = requestAnimationFrame(renderChar);
  }
  else {
    console.log("game over")
  }
}

// animationId = requestAnimationFrame(renderChar);

function startGame() {
  gameStart = true;
  renderChar();
}

function drawStartScreen() {
  clear();

  ctx.fillStyle = "#8bac0f";
  ctx.fillRect(10, canvas.height/2 - 100, canvas.width - 12, 299);

  ctx.fillStyle = '#000000';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';

  let text = 'Reach the required amount of points by collecting items. HOWEVER, avoid the pokeballs that are trying to catch you. They will take away time or worse; lose if you get hit by the masterball(purple). If you evolve from getting the stones; pokeballs(red) will not take time away. Points will double when evolved. Press "spacebar" to start. Left and right arrows control your character.';

  const textLines = getWrappedTextLines(text, canvas.width - 40, 16);

  const textHeight = textLines.length * 20; 
  const startY = canvas.height / 2 - textHeight / 2;

  for (let i = 0; i < textLines.length; i++) {
    ctx.fillText(textLines[i], canvas.width / 2, startY + i * 20);
  }
}

function getWrappedTextLines(text, maxWidth, fontSize) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];

  ctx.font = fontSize + 'px Arial';

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + ' ' + word).width;

    if (width < maxWidth - 45) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  lines.push(currentLine);
  return lines;
}

//   let textWidth = ctx.measureText(text.width);
//   ctx.fillText(text, canvas.width/2, canvas.height/2, textWidth);
// }

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

        if (item.type === 'master' && player.currentEvolution === 'eevee') {
          gameOver = true;
        } else if (item.type === 'master' && player.currentEvolution === 'flareon') {
          gameOver = true;
        } else if (item.type === 'master' && player.currentEvolution === 'jolteon') {
          gameOver = true;
        } else if (item.type === 'master' && player.currentEvolution === 'vaporeon') {
          gameOver = true; 
        }  else if (item.type === 'fire') {
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
        }
        ;
  
        player.sprite.src = player.evolutionSprites[player.currentEvolution];

        // player.setTempSprite(item.type + '.png');
      }
  }
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    startGame();
  }
});

canvas.addEventListener('click', startGame);

// export {clear, drawOuterBackground, drawPlayer, generateItems, updateItems, newPos};
export { renderChar };