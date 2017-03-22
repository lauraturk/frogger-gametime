const chai = require('chai');
const assert = chai.assert;
const Car = require('../lib/car.js');
const Bus = require('../lib/bus.js');
const Lane = require('../lib/lane.js');

describe ('Lane', () => {

	const lane = new Lane(450);
	
	it('should be a function', () => {
		assert.isFunction(Lane);
	});

	it('should instatiate a new lane', () => {
		assert.isObject(lane);
	});

	it('should take a value for y', () => {
		assert.equal(lane.y, 450);
	});

	it('should have a function called "draw()" ', () => {
		assert.isFunction(lane.draw);
	});

	it('should have a function called "createCars()"', () => {
		assert.isFunction(lane.createCars);
	});

	it('should create one or two cars ', () => {
		let carsLane = new Lane();

		carsLane.createCars();
		assert.isTrue(carsLane.obstacles.length < 2);
	});

	it('should create one or two busses', () => {
		var busLane = new Lane();

		busLane.createBus();
		assert.isTrue(busLane.obstacles.length < 2);
	});
});
