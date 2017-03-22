var Lilypad = require('./lilypad.js');
var Water = require('./water.js');
var Lane = require('./lane.js');
var Frog = require('./frog.js');

function World () {
  this.lilypads = [];
  this.puddles = [];
  this.lanes = [];
  this.frog = new Frog();
}

World.prototype.createLilypads = function() {
  var start = 0;

  for (var i = 0; i <= 4; i++) {
    var lilypad = new Lilypad(start);

    this.lilypads.push(lilypad);
    start += 100;
  }
};

World.prototype.createPuddles = function() {
  var start = 50;

  for (var i = 0; i <= 4; i++) {
    var water = new Water(start);

    this.puddles.push(water);
    start += 100;
  }
};

World.prototype.createLanes = function() {
  var start = 400;

  for (var i = 0; i <= 6; i++) {

    var lane = new Lane(start);

    this.lanes.push(lane);
    if (start > 50) {
      start -= 50;
    }
  }
};

World.prototype.createVehicles = function () {
  this.lanes.forEach(function(lane, i) {
    if ( i % 2 === 0 ) {
      lane.createCars();
    } else  {
      lane.createBus();
    }
  });
};

module.exports = World;
