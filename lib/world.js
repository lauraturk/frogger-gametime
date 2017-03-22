const Lilypad = require('./lilypad.js');
const Water = require('./water.js');
const Lane = require('./lane.js');
const Frog = require('./frog.js');

class World {
  constructor () {
    this.lilypads = [];
    this.puddles = [];
    this.lanes = [];
    this.frog = new Frog();
  }

  createLilypads () {
    let start = 0;

    for (let i = 0; i <= 4; i++) {
      let lilypad = new Lilypad(start);

      this.lilypads.push(lilypad);
      start += 100;
    }
  }

  createPuddles () {
    let start = 50;

    for (let i = 0; i <= 4; i++) {
      let water = new Water(start);

      this.puddles.push(water);
      start += 100;
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
      return i % 2 === 0 ? lane.createCars() : lane.createBus();
    });
  }
}

module.exports = World;
