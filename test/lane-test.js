var chai = require('chai');
var assert = chai.assert;

var Car = require('../lib/car.js');
var Bus = require('../lib/bus.js');
var Lane = require('../lib/lane.js');

describe ('Lane', function(){

	const lane = new Lane(450);
	const bus = new Bus(250, lane);
	const car = new Car(350, lane);

	context('with default attributes', function (){

	it('should be a function', function (){
		assert.isFunction(Lane);
	});

	it('should instatiate a new lane', function (){
		assert.isObject(lane);
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
		var carsLane = new Lane ();
		carsLane.createCars();
		assert.isTrue(carsLane.obstacles.length < 2);
	});

	it('should create one or two busses', function () {
		var busLane = new Lane ();
		busLane.createBus();
		assert.isTrue(busLane.obstacles.length < 2);
	});


	});
});
