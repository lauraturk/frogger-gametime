// require('locus')
var chai = require('chai');
var assert = chai.assert;


var Bus = require('../lib/bus.js');
var Lane = require('../lib/lane.js');

describe ('Bus', function(){
	context('with default attributes', function (){



	it('should be a function', function (){
		assert.isFunction(Bus);
	});

	it('should instatiate a new bus', function (){
		var bus = new Bus(10, 1);
		assert.isObject(bus);
	});

	it('should take a value for x', function () {
		var lane = new Lane(250);
		var bus = new Bus(10, lane);
		assert.equal(bus.x, 10);
	});

	it('should inherit its y from the lane', function () {
		var lane = new Lane(250);
		var bus = new Bus(10, lane);
		assert.equal(bus.y, 250);
	});

	it('every bus should have a set height, width, speed and color', function (){
		var lane = new Lane(250);
		var bus = new Bus (10, lane);
		var bus2 = new Bus (5, lane);
		assert.equal(bus.height, 50);
		assert.equal(bus2.height, 50);
		assert.equal(bus.width, 150);
		assert.equal(bus2.width, 150);
		assert.equal(bus.speed, 0.5);
		assert.equal(bus2.speed, 0.5);
		assert.equal(bus.color, 'rgba(255,255,0,1)');
		assert.equal(bus2.color, 'rgba(255,255,0,1)');
	});

	it('should have a function called "draw()" ', function () {
		var lane = new Lane(250);
		var bus = new Bus (10, lane);
		assert.isFunction(bus.draw);
	});

	// it('should ')   not sure how to test for draw

	it('should have a function called "moveRight"', function () {
		var lane = new Lane(250);
		var bus = new Bus (10, lane);
		assert.isFunction(bus.moveRight);
	});

	it('should move right equal to its speed', function () {
		var lane = new Lane(250);
		var bus = new Bus (10, lane);
		bus.moveRight();
		assert.equal(bus.x, 10.5);
	});

	it('should reset to -150 when it hits the canvas end moving right', function () {
		var lane = new Lane(250);
		var bus = new Bus (500, lane);
		bus.moveRight();
		assert.equal(bus.x, -150);
	});

	it('should have a function called "moveLeft"', function () {
		var lane = new Lane(250);
		var bus = new Bus (10, lane);
		assert.isFunction(bus.moveLeft);
	});

	it('should move left equal to its speed', function () {
		var lane = new Lane(250);
		var bus = new Bus (10, lane);
		bus.moveLeft();
		assert.equal(bus.x, 9.5);
	});

	it('should reset to 500 when it hits the canvas end moving left', function () {
		var lane = new Lane(250);
		var bus = new Bus (-150, lane);
		bus.moveLeft();
		assert.equal(bus.x, 500);
	});



	});
});
