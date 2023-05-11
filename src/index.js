
import {renderChar, keyDown, keyUp} from './scripts/eevee.js';
// import {renderDemo, demoKeyDown, demoKeyUp} from './scripts/demoplayer.js';
// import {items} from './scripts/items.js'
window.addEventListener("load", () => {
  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);
  
  // renderDemo();
  renderChar();

})
// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', keyUp);

// function checkCollision() {
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     if (player.x < item.x + item.width &&
//         player.x + player.width > item.x &&
//         player.y < item.y + item.height &&
//         player.y + player.height > item.y) {
//       items.splice(i, 1);
//     }
//   }
// }

// renderChar();
// function loop() {
//   clear();
//   drawOuterBackground();
//   drawPlayer();
//   generateItems();
//   checkCollision();
//   updateItems();
//   newPos();
//   requestAnimationFrame(loop);
// }

// loop(); 