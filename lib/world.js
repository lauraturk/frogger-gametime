const Lilypad = require('./lilypad');
const Water = require('./water');
const Lane = require('./lane');
const Frog = require('./frog');

class World {
  constructor () {
    this.lilypads = [];
    this.puddles = [];
    this.lanes = [];
    this.frog = new Frog();
  }

  createEndLane() {
    let start = 0;
    let nextStart = 50;

    for (let i = 0; i <= 4; i++) {
      let lilypad = new Lilypad(start);
      let water = new Water(nextStart);

      this.lilypads.push(lilypad);
      this.puddles.push(water);

      start += 100;
      nextStart += 100;
    }
  }

  createLanes () {
    let start = 400;

    for (let i = 0; i <= 6; i++) {

      let lane = new Lane(start);

      this.lanes.push(lane);

      if (start > 50) {
        start -= 50;
      }
    }
  }

  createVehicles () {
    this.lanes.forEach((lane, i) => {
      return i % 2 === 0 ? lane.createObstacles('car', 0) : lane.createObstacles('bus', 400);
    });
  }
}

module.exports = World;
