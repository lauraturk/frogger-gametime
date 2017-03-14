var Frog = require('./frog.js');
var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');


var froggy = new Frog();

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  froggy.draw(context);


  requestAnimationFrame(gameLoop);
});

document.addEventListener('keyup', function(e){
  if(e.keyCode === 38){
    froggy.moveUp();
  }
})

document.addEventListener('keyup', function(e){
  if(e.keyCode === 40){
    froggy.moveDown();
  }
})

document.addEventListener('keyup', function(e){
  if(e.keyCode === 37){
    froggy.moveLeft();
  }
})

document.addEventListener('keyup', function(e){
  if(e.keyCode === 39){
    froggy.moveRight();
  }
})
