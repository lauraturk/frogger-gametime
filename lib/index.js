const canvas = document.getElementById('frogger');
const context = canvas.getContext('2d');
const lives = document.querySelector('.lives');
const World = require('./world.js');
const world = new World();
const froggy = world.frog;
let originalTime = 0;
let duration = 0;
let framesPerSecond = 10;

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

    world.lilypads.forEach(lilypad => {
      lilypad.draw(context);

      if (froggy.collide(lilypad)) {
        froggy.win();
        world.createVehicles();
        framesPerSecond += 10;
      }
    });

    world.puddles.forEach(puddle => {
      puddle.draw(context);

      if (froggy.collide(puddle)) {
        froggy.death();
      }
    });

    world.lanes.forEach((lane, i) => {
      lane.draw(context);

      lane.obstacles.forEach(vehicle => {

        if (froggy.collide(vehicle)) {
          froggy.death();
        }
        return i % 2 === 0 ? vehicle.draw(context).moveRight()
          : vehicle.draw(context).moveLeft();
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

document.addEventListener('keydown', (e) => {
  froggy.move(e);
});
