var canvas = document.getElementById('frogger');
var context = canvas.getContext('2d');
var lives = document.querySelector('.lives');
var World = require('./world.js');
var world = new World();
var froggy = world.frog;
var originalTime = 0;
var duration = 0;
var framesPerSecond = 10;

world.createLilypads();
world.createPuddles();
world.createLanes();
world.createVehicles();

requestAnimationFrame(function gameLoop(currentTime) {

  if (!originalTime) {
    originalTime = currentTime;
  }
  duration = currentTime - originalTime;

  if (duration > 1000 / framesPerSecond) {
    originalTime = currentTime;
    context.clearRect(0, 0, canvas.width, canvas.height);

    froggy.draw(context);

    var win = function(lilypad) {
      if (froggy.collide(lilypad)) {
        froggy.win();
        world.createVehicles();
        framesPerSecond += 10;
      }
    };

    world.lilypads.forEach(function(lily) {
      lily.draw(context);
      win(lily);
    });

    world.puddles.forEach(function(puddle) {
      puddle.draw(context);
      if (froggy.collide(puddle)) {
        froggy.death();
      }
    });

    world.lanes.forEach(function(lane, i) {
      lane.draw(context);
      lane.obstacles.forEach(function(vehicle) {
        if ( i % 2 === 0 ) {
          vehicle.draw(context).moveRight();
        } else {
          vehicle.draw(context).moveLeft();
        }
        if (froggy.collide(vehicle)) {
          froggy.death();
        }
      });
    });
  }

  if (froggy.lives > 0) {
    lives.innerText = froggy.lives;
    requestAnimationFrame(gameLoop);
  } else {
    alert('Game Over!');
    location.reload();
  }
});

document.addEventListener('keydown', function(e) {
  froggy.move(e);
});
