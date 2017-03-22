var chai = require('chai');
var assert = chai.assert;

var Frog = require('../lib/frog.js');
var Bus = require('../lib/bus.js');
var Lane = require('../lib/lane.js');
var World = require('../lib/world.js');


describe ('Frog', function() {
  const frog = new Frog ();

  context('with default attributes', function () {

    it('should be a function', function () {
      assert.isFunction(Frog);
    });

    it ('should instatiate a new frog', function () {
      assert.isObject(frog);
    });

    it('should have a set height', function () {
      assert.equal(frog.height, 25);
    });

		it('should have a set width', function () {
			assert.equal(frog.width, 25);
		})

    it('should have a function called "draw()" ', function () {
      assert.isFunction(frog.draw);
    });

    it('should have a function called "move()"', function () {
      assert.isFunction(frog.move);
    })

    it('should instantiate at the bottom center of the canvas', function () {
			let frog4 = new Frog ();

      assert.equal(frog4.x, 250);
      assert.equal(frog4.y, 475);
    });

    it('should instantiate with three lives to lose', function () {
      assert.equal(frog.lives, 3);
    });

    it('should have a function called "collide()"', function () {
      assert.isFunction(frog.collide);
    });

    it('should detect a collision', function () {
      var world = new World();

      world.createLanes();
      world.createVehicles();
      var lane = new Lane (450);
      var bus = new Bus (275, lane);
      var frog = new Frog();

      bus.moveLeft();
      assert.isTrue(frog.collide(bus));

    });

    it('should have a function called "death()" ', function () {
      assert.isFunction(frog.death);
    });

    it('should return to the starting place upon dying', function () {
      frog.death();
      assert.equal(frog.x, 250);
      assert.equal(frog.y, 475);
    });

    it('should return to its starting place upon winning', function () {
      frog.win();
      assert.equal(frog.x, 250);
      assert.equal(frog.y, 475);
    })




  });
});
