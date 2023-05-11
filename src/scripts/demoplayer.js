import {Player} from './eevee.js'

let demoPlayer = new Player();
const demoCanvas = document.getElementById('demoCanvas');
const demoCtx = demoCanvas.getContext('2d');

demoCanvas.width = 550;
demoCanvas.height = 400;

let demoEevee = new Image();
demoEevee.src = "src/assets/eevee_back.png";

const background = new Image();
background.src = "src/assets/EvolutionForest.png";

function drawDemoBackground() {
  demoCtx.drawImage(background, 0, 0, demoCanvas.width, demoCanvas.height);
}

function demoNewPos() {
  demoPlayer.x += demoPlayer.dx;
  demoPlayer.y += demoPlayer.dy;

  detectWall();
}

function detectWall() {
  if (demoPlayer.x < 0) {
    demoPlayer.x = 0;
  }

  if (demoPlayer.x + demoPlayer.width > demoCanvas.width) {
    demoPlayer.x = demoCanvas.width - demoPlayer.width;
  }
}

function moveRight() {
  demoPlayer.dx = demoPlayer.speed;
}

function moveLeft() {
  demoPlayer.dx = -demoPlayer.speed;
}

export function demoKeyDown(e) {
  if (e.key === 'ArrowRight') {
    moveRight();
  } else if (e.key === 'ArrowLeft') {
    moveLeft();
  }
}

export function demoKeyUp(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    demoPlayer.dx = 0;
    demoPlayer.dy = 0;
  } 
}

// function clear() {
//   demoCtx.clearRect(0, 0, demoCanvas.width, demoCanvas.height);
// }



function renderDemo(){
  clear();
  drawDemoBackground();
  demoNewPos();
  demoPlayer.draw();
  renderDemo();
}

renderDemo();