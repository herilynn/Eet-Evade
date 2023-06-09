// import {player} from './eevee.js'

const canvas = document.getElementById('backgroundCanvas');
// console.log(canvas)
const ctx = canvas.getContext('2d');

export const items = [];
const maxItems = 5;
let timer = 0;

export function Item(x, y, speed, type) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.type = type;
}



Item.prototype.update = function() {
  this.y += this.speed;
}

Item.prototype.draw = function() {
  let razzberry = new Image();
  razzberry.src = "src/assets/razzberry.png";

  let firestone = new Image();
  firestone.src = "src/assets/firestone.png";

  let waterstone = new Image();
  waterstone.src = "src/assets/waterstone.png";

  let thunderstone = new Image();
  thunderstone.src = "src/assets/thunderstone.png";

  let pokeball = new Image();
  pokeball.src = "src/assets/pokeball.png";

  let greatball = new Image();
  greatball.src = "src/assets/greatball.png";

  let ultraball = new Image();
  ultraball.src = "src/assets/ultraball.png";

  let masterball = new Image();
  masterball.src = "src/assets/masterball.png"

  if (this.type === 'berry') {
    ctx.drawImage(razzberry, this.x, this.y, 30, 30);
    // ctx.fillStyle = 'black';
    // ctx.fillRect(this.x, this.y, 20, 20);
  } else if (this.type === 'fire') {
    // ctx.fillStyle = 'orange';
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(firestone, this.x, this.y, 30, 30);
  } else if (this.type === 'thunder') {
    // ctx.fillStyle = 'green';
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(thunderstone, this.x, this.y, 25, 25);
  } else if (this.type === 'water') {
    // ctx.fillStyle = 'purple';
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(waterstone, this.x, this.y, 35, 35);
  } else if (this.type === 'poke') {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(pokeball, this.x, this.y, 20, 20);
  } else if (this.type === 'great') {
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(greatball, this.x, this.y, 30, 30);
  } else if (this.type === 'ultra') {
    // ctx.fillStyle = 'yellow' 
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(ultraball, this.x, this.y, 40, 40);
  } else if (this.type === 'master') {
    // ctx.fillStyle = 'pink';
    // ctx.fillRect(this.x, this.y, 20, 20);
    ctx.drawImage(masterball, this.x, this.y, 50, 50);
  }
}


export function generateItems() {
  timer++;
  if (timer % 100 === 0 || items.length < maxItems) {
  // const row = Math.floor(Math.random() * canvas.height);
  // const numItems = Math.floor(Math.random() * 1) + 1;

  // for (let i = 0; i < numItems; i++) {
    const x = Math.random() * (canvas.width - 20);
    const speed = Math.random() * 0.5 + 1;

    const types = [
      {type: 'berry', weight: 30}, 
      {type: 'poke', weight: 5}, 
      {type: 'great', weight: 3}, 
      {type: 'ultra', weight: 2}, 
      {type: 'master', weight: 1}, 
      {type: 'fire', weight: 4}, 
      {type: 'thunder', weight: 4}, 
      {type: 'water', weight: 4}
    ];

    const randomNum = Math.random() * 53;

    let selectedType;
    let weightSum = 0;
    for (let i = 0; i < types.length; i++) {
      weightSum += types[i].weight;
      if (randomNum <= weightSum) {
        selectedType = types[i].type;
        break;
      }
    }
    // const randomType = types[Math.floor(Math.random() * types.length)];

    const item = new Item(x, 0, speed, selectedType);
    items.push(item);
  }
  if (timer === 200) {
    timer = 0;
  }
  // checkCollision();
}

export function updateItems() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.update();
    item.draw();
  }
}

// function checkCollision() {
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (player.x < item.x + 25 &&
//       player.x + player.width > item.x &&
//       player.y < item.y + 25 &&
//       player.y + player.height > item.y) {
//         items.splice(i, 1);
//       }

      
//       // if (item.type === 'fire') {
//       //   player.spriteIndex = 1;
//       // } else if (item.type === 'thunder') {
//       //   player.spriteIndex = 2;
//       // } else if (item.type === 'water') {
//       //   player.spriteIndex = 3;
//       // }       
//   }
// }