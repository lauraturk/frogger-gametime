var Lilypad = require('./Lilypad.js');
var Lane = require('./Lane.js');
var Frog = require('./Frog.js');

function World () {
  this.x = 0;
  this.y = 0;
  this.width = 500;
  this.height = 500;
  this.frog = new Frog();
  this.lilypads = [];
  this.lanes = [];
  this.color = 'rgba(0,0,0,0)';
}

World.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.strokeRect(this.x, this.y, this.width, this.height);
};

World.prototype.createLilypads = function() {
  var start = 0;
  for (var i = 0; i <= 5; i++) {
    var lilypad = new Lilypad(start);
    this.lilypads.push(lilypad);
    start += 100;
  }
};

World.prototype.createLanes = function() {
  var start = 400;
  for (var i = 0; i <= 7; i++) {
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
      lane.createCars(200);
    } else  {
      lane.createBus(200);
    }
  });
};

module.exports = World;
