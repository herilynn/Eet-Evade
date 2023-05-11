# In "Eet Eevade", users will be able to:

# Functionality:

- gain points by eatting berries
​
- move character around to eat berries/obtain items/avoid capture
​
- character can use PP to use special attacks to hit a wider range to help get more points
​
- character can evolve to get a multiplier as well as use better special attacks
​
<!-- ~~~~~~~~~~~~~~~~~~~~ -->
# Game Objective​

The user will be controlling a wild eevee that is trying to reach a sanctuary. However, the sanctuary is quite far so it needs to eat the berries along the way. However, if it doesn't eat enough berries at each stage; it will starve and the game is over. Maintaining a full belly isn't the only thing however. It also needs to avoid trainers trying to catch/battle it. This would be indicated by pokeballs (red/blue/yellow/purple). If your character gets hit by a purple (masterball); game would automatically end and you'll be at the mercy of whoever owns it. While red/blue/yellow (poke/great/ultra) balls won't capture you; it WILL take away time from your timer if they hit you as you waste time resisting capture; red < blue < yellow in terms of amount of time. HOWEVER; that's not the ONLY thing about the balls. If the balls are shaking; DON'T attack it as a pokemon can come out and will attack you and also waste your timer. In other words; AVOID the balls and just let them hit the floor. Not all items are hazards though. There are evolution stones that will occasionally fall down which will evolve your eevee into one of 3 possible eeveelutions (flareon; fire(red), vaporeon; water(blue), and jolteon; electric(yellow)). All have their own unique special moves which have a wider range than the normal special move eevee has access to. Using these special moves will use your PP; think of it as your energy which can be refueled by eating more berries. Along with getting better moves; you also get access to a multiplier on amount of points the berries give you as well as giving you invulerability to (non-shaking pokeballs (red); meaning they won't consume time from your timer). However, great(blue), ultra(yellow), and master(purple) will still affect you. Ultra balls actually would knock the evolution out of you; reverting you back to an eevee. Therefore; avoid balls in general still but definitely avoid yellow and purple. Along with these 3 evolution stones; there's 1 other stone; an everstone (gray). This will devolve you back to eevee; it won't take away from your timer. The point of this can be counted as a hazard or a way for you to devolve and choose a different evolution stone. There will be 3 lvls; the 1st lvl will just be 30 seconds. Level 2 will be 45 and level 3 will be 60. If you manage to meet the required amount of points for each level without capture; you will have successfully reached the end of the game. So good luck Eevading and Eeting as much berries along the way!
​
​
# wireframe: https://wireframe.cc/EHXfhU

# tech/libs/apis: canvas, JS, CSS, webpack, three.js

# Implentation timeline:
Friday-Weekend: get basic functionality of char control movements working and items to spawn from top of screen and drop
Monday/Tuesday: game noticing char making contact with item and responding properly
Wednesday: Setup lvl, timer, and score and maybe CSS touchups

<!-- ~~~~~~~~ -->

# Future Implementations:

Unfortunately I didn't add all the features I had planned. Most of the things from the implementation timeline was completed minus movement sprites and setting up different stages/levels. Therefore the following implementations are planned for the future:

-different levels/stages after a certain amount of time AND points has been reached assuming game hasn't ended before.

*along with different levels/stages; spawn rate of items/drops will be changed and speed may increase/decrease*

*background changing with the levels/stages*

-add movement animation to the character so it isn't always static 
*ability to move up slightly at higher levels*

-add animation effect to the balls dropping to indicate empty balls(just meant for catching) versus occupied/shaking balls (if contact is made; MORE time is removed as a pokemon will come out)

*need to create a pool of mons that can potentially come out as well as those who are not effective/neutral/super effective; each decreasing your time by a different amount*

**animate balls spinning in general as they fall**

-add special attacks the character can use to "take out" items and gain points without having to wait for the items to drop

*add animation effect for the attacks**

**add collision detection between the attack and items**

***add PP gauge that increases with berry consumption and decreases when a special attack is used***

****add animation effect for the character performing the attack****

-add a gradual change/dimming effect of the battery/light rather than just sudden change

-fix animation at the end

-include a "You Win" display when player completes all the level as well as a "Level X" completed at each level with descriptions of what to expect on the following level. Also, a "Game Over" if the player doesn't make it all the way to the end of the game.

-include some high score chart that holds scores of the player.

-include a demo on the right allowing player to test out controls/gameplay before starting the actual

<!-- ~~~~ -->

# Sources:

Anton James (helped point me in the right direction for setting up my "Game Over" condition using "AnimationID" separating my files; unfortunately I forgot to make a game.js file and instead of script.js file being cluttered; eevee.js got cluttered.)

David Tan (helped with debugging my "Game Over" condition which restarted my game one extra time and setting up GitHub live (though I sort of broke it again later))

Hong Chen (reminded me about npm run watch which SOLVED the 1st of the big problems in my "Game Over" bug)

Jiamin Zou (helped with debugging my "Game Over" condition which restarted my game one extra time and setting up Github live, as well as his original game idea being a template/providing ideas on what else I could implement; background, using spritesheet to animate)

Steven Notovitz (*previous cohort student* provided a canvas tutorial vid which helped get me going Monday after being stuck most of the weekend)

ChatGPT (very helpful when you need a skeleton or a push in the right direction/finding built in methods but was absolutely useless when you needed it most; a bit exaggerated but expect to be going around in circles so don't rely on it too much)

Youtube (useful at the start or non core elements that won't interfere; Problem with this and ChatGPT; you may end up using ES5 one moment then ES6 the next; also caused me to put all my files into the script.js file which lead to an abomination list of code because the creators would use just html, css and a single js file)

https://en1.onlinevideoconverter.pro/41/
(for downloading sounds)

audiotrimmer.com
(for cutting segments of clips downloaded for specific sounds)

https://www.codeandweb.com/free-sprite-sheet-packer
(helped make the spritesheet for me; though it ended up a bit wonky *make sure not to label it as just 1, 2, 3 cause if it goes to 10, 11, 12; they would come before 2 and etc so use _1, _2, etc*)

https://www.spriters-resource.com/fullview/5736/
(for sprites of player and positions and stones)

google images (forgot the links)
(for berry sprite/gbScreen background/evoluton forest background)

paint S
(editing images cause mac didn't have built in paint)

DragonShadow87
(pokeball/greatball/ultraball/masterball sprites)

drazorleaf
(foreboding_forest soundtrack)

nintendo/gamefreak & "arscanum" from youtube
(soundtrack for nintendupe and animation) 

Gowtham Tirri
(https://www.youtube.com/watch?v=oMwaMYwHkS8; tutorial for setting up a timer and placing it)

🌌Hoshi🌌
(https://www.youtube.com/watch?v=kBIvYHO0cv8; eeveelution cries)


Ioannis IGI
(https://www.youtube.com/watch?v=-hXMlrXdkrk; pacman eating berry sound effect)

Pascal Congès
(https://www.youtube.com/watch?v=ub8CD738fDs; tutorial for adding sound to JS)

Traversy Media
(https://www.youtube.com/watch?v=gm1QtePAYTM; tutorial for basic canvas thanks to Steve)


