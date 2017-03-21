var chai = require('chai');
var assert = chai.assert;

var Car = require('../lib/car.js');
var Bus = require('../lib/bus.js');
var Lane = require('../lib/lane.js');

describe ('Lane', function(){
	context('with default attributes', function (){
	const lane = new Lane(450);
	const bus = new Bus(250, lane);
	const car = new Car(350, lane);

	it('should be a function', function (){
		assert.isFunction(Lane);
	});

	it('should instatiate a new lane', function (){
		assert.isObject(Lane);
	});

	it('should take a value for y', function () {
		assert.equal(lane.y, 450);
	});

	it('should have a function called "draw()" ', function () {
		assert.isFunction(lane.draw);
	});


	it('should have a function called "createCars()"', function () {
		assert.isFunction(lane.createCars);
	});

	it('should create one or two cars ', function () {
		lane.createCars();
		assert.equal(lane.obstacles < 3);
	});

	it('should reset to -150 when it hits the canvas end moving right', function () {
		car.moveRight();
		assert.equal(car.x, -100);
	});

	it('should have a function called "moveLeft"', function () {
		assert.isFunction(car.moveLeft);
	});

	it('should move left equal to its speed', function () {
		car.moveLeft();
		assert.equal(car.x, 5);
	});

	it('should reset to 500 when it hits the canvas end moving left', function () {
		car.moveLeft();
		assert.equal(car.x, 600);
	});

	});
});
