var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');
var Frog = require('./frog.js');
var Lane = require('./lane.js');


var froggy = new Frog();
var lane = new Lane(350);

lane.createCars(3, 150);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  froggy.draw(context);
  lane.draw(context);

  lane.cars.forEach(function(car) {
    car.draw(context).moveRight();
  });

  requestAnimationFrame(gameLoop);
});

document.addEventListener('keydown', function(e){
  switch (e.keyCode) {
    case 37:
      froggy.moveLeft();
    break;

    case 38:
      froggy.moveUp();
    break;

    case 39:
      froggy.moveRight();
    break;

    case 40:
      froggy.moveDown();
    break;
  }
});
