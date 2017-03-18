var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');
var Frog = require('./frog.js');
var Lane = require('./lane.js');
var Lilypad = require('./lilypad.js');

var froggy = new Frog();
var lane = new Lane(350);
var lane2 = new Lane(250);
var lane3 = new Lane(150);
var lane4 = new Lane(50);

var lilypad = new Lilypad(0);
var lilypad2 = new Lilypad(100);
var lilypad3 = new Lilypad(200);
var lilypad4 = new Lilypad(300);
var lilypad5 = new Lilypad(400);

lane.createCars(3, 200);
lane2.createBus(2, 50);
lane3.createCars(2, 150);
lane4.createBus(3, 200);

var originalTime = 0;
var duration = 0;
var framesPerSecond = 2;

requestAnimationFrame(function gameLoop(currentTime) {
  if(!originalTime) {
    originalTime = currentTime;
  }
  duration = currentTime - originalTime;

  if(duration > 2000 / framesPerSecond) {
    originalTime = currentTime;
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  froggy.draw(context);
  lane.draw(context);
  lane2.draw(context);
  lane3.draw(context);
  lane4.draw(context);
  lilypad.draw(context);
  lilypad2.draw(context);
  lilypad3.draw(context);
  lilypad4.draw(context);
  lilypad5.draw(context);

console.log(froggy.deathCounter)


  var drawMoveRight = function(lane) {
    lane.obstacles.forEach(function(vehicle) {
        vehicle.draw(context).moveRight();
        if (froggy.collide(vehicle)) {
          timeoutId = this.setTimeout(froggy.death,);
          froggy.death(timeoutId)
          // console.log(timeoutId)




        }
      });
  }

  var drawMoveLeft = function(lane) {
    lane.obstacles.forEach(function(vehicle) {
        vehicle.draw(context).moveLeft();
        if (froggy.collide(vehicle)) {
          timeoutId = this.setTimeout(froggy.death,);
          froggy.death(timeoutId)
          // console.log(timeoutId)



        }
      });
  }

drawMoveRight(lane);
drawMoveRight(lane3);
drawMoveLeft(lane4);
drawMoveLeft(lane2);

var win = function(lilypad) {
  if (froggy.winCollide(lilypad)) {
    console.log('win!')
  }
}

win(lilypad);
win(lilypad2);
win(lilypad3);
win(lilypad4);
win(lilypad5);


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
