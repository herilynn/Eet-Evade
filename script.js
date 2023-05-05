const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 300; //250
canvas.height = 300; //250

// ctx.fillStyle = "brown";
// ctx.fillRect(250, 250, 50, 50);

const eevee = new Image()
eevee.src = "assets/eevee_back.png"

const player = {
  width: 50,
  height: 50,
  x: 125,
  y: 250,
  speed: 7,
  dx: 0,
  dy: 0
};

function drawPlayer() {
  ctx.drawImage(eevee, player.x, player.y, player.width, player.height);
}

function renderChar() {
  drawPlayer();
  requestAnimationFrame(renderChar); //?
}

renderChar();