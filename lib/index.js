var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');
var Frog = require('./frog.js');
var Lane = require('./lane.js');


var froggy = new Frog();
var lane = new Lane(350);
var lane2 = new Lane(250);
var lane3 = new Lane(150);
var lane4 = new Lane(50);

lane.createCars(3, 200);
lane2.createBus(2, 50);
lane3.createCars(2, 150);
lane4.createBus(3, 200);

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  froggy.draw(context);
  lane.draw(context);
  lane2.draw(context);
  lane3.draw(context);
  lane4.draw(context);

  lane.obstacles.forEach(function(car) {
    car.draw(context).moveRight();
    if (froggy.collide(car)) {
      console.log('POW!');
    }
  });

  lane2.obstacles.forEach(function(bus) {
    bus.draw(context).moveLeft();
    if (froggy.collide(bus)) {
      console.log('POW!');
    }
  });

  lane3.obstacles.forEach(function(car) {
    car.draw(context).moveLeft();
    if (froggy.collide(car)) {
      console.log('POW!');
    }
  });

  lane4.obstacles.forEach(function(bus) {
    bus.draw(context).moveRight();
    if (froggy.collide(bus)) {
      console.log('POW!');
    }
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
