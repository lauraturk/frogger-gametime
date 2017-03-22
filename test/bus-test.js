// require('locus')
var chai = require('chai');
var assert = chai.assert;


var Bus = require('../lib/bus.js');
var Lane = require('../lib/lane.js');
var World = require('../lib/world.js');
var lane = new Lane(250);
var bus = new Bus(10, lane);
var world = new World();

describe ('Bus', function() {

	context('with default attributes', function (){



	it('should be a function', function (){
		assert.isFunction(Bus);
	});

	it('should instatiate a new bus', function (){
		var bus = new Bus(10, 1);
		assert.isObject(bus);
	});

	it('should take a value for x', function () {

		assert.equal(bus.x, 10);
	});

	it('should inherit its y from the lane', function () {

		assert.equal(bus.y, 250);
	});

	it('every bus should have a set height', function (){

		assert.equal(bus.height, 50);
	});

      it('should have a width', function () {
				assert.equal(bus.width, 150);
      });

			it('should have a speed', function () {
				assert.equal(bus.speed, 3);
			});

	it('should have a function called "draw()" ', function () {

		assert.isFunction(bus.draw);
	});

	// it('should ')   not sure how to test for draw

	it('should have a function called "moveRight"', function () {

		assert.isFunction(bus.moveRight);
	});

	it('should move right equal to its speed', function () {
		bus.moveRight();
		assert.equal(bus.x, 13);
	});

	it('should reset to -150 when it hits the canvas end moving right', function () {
		var lane = new Lane(250);
		var bus = new Bus (500, lane);
		bus.moveRight();
		assert.equal(bus.x, -150);
	});

	it('should have a function called "moveLeft"', function () {
		assert.isFunction(bus.moveLeft);
	});

	it('should move left', function () {
		var lane = new Lane(250);
		var bus = new Bus (200, lane);
		bus.moveLeft();
		bus.moveLeft();
		assert.isTrue(bus.x < 200);
	});

	it('should reset to 500 when it hits the canvas end moving left', function () {
		var lane = new Lane(250);
		var bus = new Bus (-150, lane);
		bus.moveLeft();
		assert.equal(bus.x, 500);
	});

	});
});
