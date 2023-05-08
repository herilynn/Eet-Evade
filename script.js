
// const canvas = document.getElementById('backgroundCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = 550;
// canvas.height = 400;

// const items = [];
// const maxItems = 5;
// let timer = 0;

// function Item(x, y, speed, type) {
//   this.x = x;
//   this.y = y;
//   this.speed = speed;
//   this.type = type;
// }

// Item.prototype.update = function() {
//   this.y += this.speed;
// }

// Item.prototype.draw = function() {
//   let razzberry = new Image();
//   razzberry.src = "assets/razzberry.png";

//   let firestone = new Image();
//   firestone.src = "assets/firestone.png";

//   let waterstone = new Image();
//   waterstone.src = "assets/waterstone.png";

//   let thunderstone = new Image();
//   thunderstone.src = "assets/thunderstone.png";

//   let pokeball = new Image();
//   pokeball.src = "assets/pokeball.png";

//   let greatball = new Image();
//   greatball.src = "assets/greatball.png";

//   let ultraball = new Image();
//   ultraball.src = "assets/ultraball.png";

//   let masterball = new Image();
//   masterball.src = "assets/masterball.png"

//   if (this.type === 'berry') {
//     ctx.drawImage(razzberry, this.x, this.y, 30, 30);
//     // ctx.fillStyle = 'black';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//   } else if (this.type === 'fire') {
//     // ctx.fillStyle = 'orange';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(firestone, this.x, this.y, 30, 30);
//   } else if (this.type === 'thunder') {
//     // ctx.fillStyle = 'green';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(thunderstone, this.x, this.y, 25, 25);
//   } else if (this.type === 'water') {
//     // ctx.fillStyle = 'purple';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(waterstone, this.x, this.y, 35, 35);
//   } else if (this.type === 'poke') {
//     // ctx.fillStyle = 'red';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(pokeball, this.x, this.y, 20, 20);
//   } else if (this.type === 'great') {
//     // ctx.fillStyle = 'blue';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(greatball, this.x, this.y, 30, 30);
//   } else if (this.type === 'ultra') {
//     // ctx.fillStyle = 'yellow' 
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(ultraball, this.x, this.y, 40, 40);
//   } else if (this.type === 'master') {
//     // ctx.fillStyle = 'pink';
//     // ctx.fillRect(this.x, this.y, 20, 20);
//     ctx.drawImage(masterball, this.x, this.y, 50, 50);
//   }
// }

// function generateItems() {

//   timer++;
//   if (timer % 100 === 0 || items.length < maxItems) {
//   // const row = Math.floor(Math.random() * canvas.height);
//   // const numItems = Math.floor(Math.random() * 1) + 1;

//   // for (let i = 0; i < numItems; i++) {
//     const x = Math.random() * (canvas.width - 20);
//     const speed = Math.random() * 0.5 + 1;

//     const types = [
//       {type: 'berry', weight: 30}, 
//       {type: 'poke', weight: 5}, 
//       {type: 'great', weight: 3}, 
//       {type: 'ultra', weight: 2}, 
//       {type: 'master', weight: 1}, 
//       {type: 'fire', weight: 4}, 
//       {type: 'thunder', weight: 4}, 
//       {type: 'water', weight: 4}
//     ];

//     const randomNum = Math.random() * 53;

//     let selectedType;
//     let weightSum = 0;
//     for (let i = 0; i < types.length; i++) {
//       weightSum += types[i].weight;
//       if (randomNum <= weightSum) {
//         selectedType = types[i].type;
//         break;
//       }
//     }
//     // const randomType = types[Math.floor(Math.random() * types.length)];

//     const item = new Item(x, 0, speed, selectedType);
//     items.push(item);
//   }
//   if (timer === 200) {
//     timer = 0;
//   }
// }

// function updateItems() {
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     item.update();
//     item.draw();
//   }
// }

// const player = {
//   width: 50,
//   height: 50,
//   x: 250,
//   y: 350,
//   speed: 4,
//   dx: 0,
//   dy: 0
// };

// let eevee = new Image();
// eevee.src = "assets/eevee_back.png";
// // eevee.onload = function() {
// //   renderChar();
// // }

// const outerBackground = new Image();
// outerBackground.src = "assets/EvolutionForest.png";
// // outerBackground.onload = function() {
// //   ctx.drawImage(outerBackground, 0, 0, canvas.width, canvas.height);
// // }

// function drawOuterBackground() {
//   ctx.drawImage(outerBackground, 0, 0, canvas.width, canvas.height);
// }

// function drawPlayer() {
//   ctx.drawImage(eevee, player.x, player.y, player.width, player.height);
// }

// function clear() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function newPos() {
//   player.x += player.dx;
//   player.y += player.dy;

//   detectWalls();
// }

// function detectWalls() {
//   if (player.x < 0) {
//     player.x = 0;
//   }

//   if (player.x + player.width > canvas.width) {
//     player.x = canvas.width - player.width;
//   }
// }

// function renderChar() {
//   clear();
//   drawOuterBackground();
//   drawPlayer();
//   generateItems();
//   updateItems();
//   newPos();
//   requestAnimationFrame(renderChar);
// }

// function moveRight() {
//   player.dx = player.speed;
// }

// function moveLeft() {
//   player.dx = -player.speed;
// }

// function keyDown(e) {
//   if (e.key === 'ArrowRight') {
//     moveRight();
//   } else if (e.key === 'ArrowLeft') {
//     moveLeft();
//   }
// }

// function keyUp(e) {
//   if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
//     player.dx = 0;
//     player.dy = 0;
//   }
// }

// // generateItems();
// renderChar();
// // generateItems();
// // updateItems();

// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', keyUp);