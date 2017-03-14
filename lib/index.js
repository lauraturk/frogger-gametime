var Frog = require('./frog.js');
var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');


var froggy = new Frog();

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  froggy.draw(context);

  requestAnimationFrame(gameLoop);
});
