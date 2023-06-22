import { generateItems, updateItems, items } from './items.js';

let points = 0;
let gameOver = false;
let gameStart = false;

let seconds = 120;
let minutes = 0;

let currentAudio = null;
let eeveeSound = new Audio("src/assets/eevee_cry.mp3");
let jolteonSound = new Audio("src/assets/jolteon_cry.mp3");
let flareonSound = new Audio("src/assets/flareon_cry.mp3");
let vaporeonSound = new Audio("src/assets/vaporeon_cry.mp3");

let eatingSound = new Audio("src/assets/eating_fruit.mp3");

let nintendoSound = new Audio("src/assets/gba_startup.mp3");
// nintendoSound.loop = true;

let bgSound = new Audio("src/assets/foreboding_forest.mp3");
bgSound.loop = true;

let dangerSound = new Audio("src/assets/red_health.mp3");
dangerSound.loop = true;

let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");

function startTimer() {
  if (seconds === 0 && minutes === 0) {
    gameOver = true; 
    return;
  }

  if (minutes === 0) {
    minutes = 59;
    seconds --;
  } else {
    minutes--;
  }

  appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  if (seconds === 110) {
    document.querySelector('.light').style.backgroundColor = 'rgba(164, 241, 49, 0.768)';
  } else if (seconds === 100) {
    document.querySelector('.light').style.backgroundColor = 'rgba(172, 248, 58, 0.768)';
  } else if (seconds === 90) {
    document.querySelector('.light').style.backgroundColor = 'rgba(186, 250, 90, 0.621)';
  } else if (seconds === 80) {
    document.querySelector('.light').style.backgroundColor = 'rgba(204, 244, 75, 0.644)';
  } else if (seconds === 70) {
    document.querySelector('.light').style.backgroundColor = 'rgba(205, 233, 45, 0.644)';
  } else if (seconds === 60) {
    appendSeconds.style.color = "yellow";
    appendMinutes.style.color = "yellow";
    document.querySelector('.light').style.backgroundColor = 'rgba(220, 220, 47, 0.484)';
  } else if (seconds === 50) {
    document.querySelector('.light').style.backgroundColor = 'rgba(251, 209, 41, 0.693)';
  } else if (seconds === 40) {
    document.querySelector('.light').style.backgroundColor = 'rgba(252, 83, 16, 0.868)';
  } else if (seconds === 30) {
    appendSeconds.style.color = "red";
    appendMinutes.style.color = "red";
    document.querySelector('.light').style.backgroundColor = 'rgba(252, 32, 16, 0.929)';
    bgSound.pause();
    dangerSound.play();
  } else if (seconds === 20) {
    document.querySelector('.light').style.backgroundColor = 'rgba(215, 20, 20, 0.548)';
  } else if (seconds === 10) {
    document.querySelector('.light').style.backgroundColor = 'rgba(215, 20, 20, 0.393)';
  }
}

// function startTimer() {
//   minutes++;

//   if (minutes < 9) {
//     appendMinutes.innerHTML = "0" + minutes;
//   }
//   if (minutes > 9) {
//     appendMinutes.innerHTML = minutes;
//   }
//   if (minutes > 99) {
//     seconds++;
//     appendSeconds.innerHTML = "0" + seconds;
//     minutes = 0;
//     appendMinutes.innerHTML = "0" + 0;
//   }
//   if (seconds > 9) {
//     appendSeconds.innerHTML = seconds;
//   }
// }

const endScreen = {
  spriteSheet: new Image(),
  frameWidth: 850,
  frameHeight: 400,
  currentFrameIndex: 0,
  totalFrames: 16,
  frameDuration: 100,
}
endScreen.spriteSheet.src = "src/assets/spritesheet.png";


export class Player {
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

// let demoPlayer = new Player();
// const demoCanvas = document.getElementById('demoCanvas');
// const demoCtx = demoCanvas.getContext('2d');

// demoCanvas.width = 550;
// demoCanvas.height = 400;

// let demoEevee = new Image();
// demoEevee.src = "src/assets/eevee_back.png";

// const background = new Image();
// background.src = "src/assets/EvolutionForest.png";

// function drawDemoBackground() {
//   demoCtx.drawImage(background, 0, 0, demoCanvas.width, demoCanvas.height);
// }

// function demoNewPos() {
//   demoPlayer.x += demoPlayer.dx;
//   demoPlayer.y += demoPlayer.dy;

//   detectWall();
// }

// function detectWall() {
//   if (demoPlayer.x < 0) {
//     demoPlayer.x = 0;
//   }

//   if (demoPlayer.x + demoPlayer.width > demoCanvas.width) {
//     demoPlayer.x = demoCanvas.width - demoPlayer.width;
//   }
// }

// function demoMoveRight() {
//   demoPlayer.dx = demoPlayer.speed;
// }

// function demoMoveLeft() {
//   demoPlayer.dx = -demoPlayer.speed;
// }

// export function demoKeyDown(e) {
//   if (e.key === 'ArrowRight') {
//     moveRight();
//   } else if (e.key === 'ArrowLeft') {
//     moveLeft();
//   }
// }

// export function demoKeyUp(e) {
//   if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
//     demoPlayer.dx = 0;
//     demoPlayer.dy = 0;
//   } 
// }

// function renderDemo(){
//   clear();
//   drawDemoBackground();
//   demoNewPos();
//   demoPlayer.draw();
// }

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
    // renderDemo();
    return;
  }

  clear();
  drawOuterBackground();
  startTimer();
  
  generateItems();
  checkCollision();
  updateItems();

  newPos();
  player.draw();

  if (points >= 200) {
    gameOver = true;
    console.log("You Win!")
    // renderChar();
  }

  

  if (!gameOver){
    animationId = requestAnimationFrame(renderChar);
  }
  else {
    console.log("game over")
    animateEndScreen();
    bgSound.pause();
    dangerSound.pause();
    nintendoSound.play();
  }
}

// animationId = requestAnimationFrame(renderChar);

function startGame() {
  gameStart = true;
  renderChar();
  bgSound.play();
}


function drawEndScreen() {
    const frameX = endScreen.currentFrameIndex * endScreen.frameWidth;
    ctx.drawImage(
      endScreen.spriteSheet,
      frameX,
      0,
      endScreen.frameWidth,
      endScreen.frameHeight + 300,
      0,
      0,
      canvas.width,
      canvas.height
    );
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

function animateEndScreen() {
  endScreen.currentFrameIndex = (endScreen.currentFrameIndex + 1) % endScreen.totalFrames;
  drawEndScreen();
  setTimeout(animateEndScreen, endScreen.frameDuration);
}

// animateStartScreen();

function moveRight() {
  player.dx = player.speed;
  // demoPlayer.dx = demoPlayer.speed;
}

function moveLeft() {
  player.dx = -player.speed;
  // demoPlayer.dx = -demoPlayer.speed;
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
    // demoPlayer.dx = 0;
    // demoPlayer.dy = 0;
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
          flareonSound.play();
          points += 5;
        } else if (item.type === 'thunder') {
          player.currentEvolution = 'jolteon';
          jolteonSound.play();
          points += 5;
        } else if (item.type === 'water') {
          player.currentEvolution = 'vaporeon';
          vaporeonSound.play();
          points += 5;
        } else if (item.type === 'poke' && player.currentEvolution === 'eevee') {
          player.currentEvolution = 'eevee_stunned';
          eeveeSound.play();
          seconds -= 2;
        } else if (item.type === 'great' && player.currentEvolution === 'eevee') {
          player.currentEvolution = 'eevee_stunned';
          eeveeSound.play();
          seconds -= 4;
        } else if (item.type === 'great' && player.currentEvolution === 'flareon') {
          player.currentEvolution = 'flareon_stunned';
          flareonSound.play();
          seconds -= 3;
        } else if (item.type === 'great' && player.currentEvolution === 'jolteon') {
          player.currentEvolution = 'jolteon_stunned';
          jolteonSound.play();
          seconds -= 3;
        } else if (item.type === 'great' && player.currentEvolution === 'vaporeon') {
          player.currentEvolution = 'vaporeon_stunned';
          vaporeonSound.play();
          seconds -= 3;
        } else if (item.type === 'ultra' && player.currentEvolution === 'eevee') {
          player.currentEvolution = 'eevee_stunned';
          eeveeSound.play();
          seconds -= 8;
        } else if (item.type === 'ultra' && player.currentEvolution === 'flareon') {
          player.currentEvolution = 'flareon_stunned';
          flareonSound.play();
          seconds -= 5;
        } else if (item.type === 'ultra' && player.currentEvolution === 'jolteon') {
          player.currentEvolution = 'jolteon_stunned';
          jolteonSound.play();
          seconds -= 5;
        } else if (item.type === 'ultra' && player.currentEvolution === 'vaporeon') {
          player.currentEvolution = 'vaporeon_stunned'; 
          vaporeonSound.play();
          seconds -= 5;
        } else if (item.type === 'berry' && player.currentEvolution === 'eevee') {
          points += 2;
          eatingSound.play();
        } else if (item.type === 'berry' && player.currentEvolution === 'jolteon') {
          points += 4;
          eatingSound.play();
        } else if (item.type === "berry" && player.currentEvolution === 'flareon') {
          points += 4;
          eatingSound.play();
        } else if (item.type === "berry" && player.currentEvolution === "vaporeon") {
          points += 4;
          eatingSound.play();
        } else if (item.type === "poke" && player.currentEvolution === "jolteon") {
          points += 3;
        } else if (item.type === "poke" && player.currentEvolution === "flareon") {
          points += 3;
        } else if (item.type === "poke" && player.currentEvolution === "vaporeon") {
          points += 3;
        }
        ;
  
        player.sprite.src = player.evolutionSprites[player.currentEvolution];

        const pointsGauge = document.getElementById("pointsGauge");
        pointsGauge.value = points;

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