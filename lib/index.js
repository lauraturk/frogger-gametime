var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');
var Frog = require('./frog.js');
var Car = require('./car.js');
var Lane = require('./lane.js');


var froggy = new Frog();
var lane = new Lane(350);
// var lane2 = new Lane();
// var lane3 = new Lane();
// var lane4 = new Lane();


requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  froggy.draw(context);
  lane.draw(context);
  lane.createCars(3, 150);
  lane.drawCars(context);
  lane.moveCars();


  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(e){
  if(e.keyCode === 38){
    froggy.moveUp();
  }
});

document.addEventListener('keydown', function(e){
  if(e.keyCode === 40){
    froggy.moveDown();
  }
});

document.addEventListener('keydown', function(e){
  if(e.keyCode === 37){
    froggy.moveLeft();
  }
});

document.addEventListener('keydown', function(e){
  if(e.keyCode === 39){
    froggy.moveRight();
  }
});
