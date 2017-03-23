const chai = require('chai');
const assert = chai.assert;
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

	it('should have a function called "createObstacles()"', () => {
		assert.isFunction(lane.createObstacles);
	});

	it('should create one or two cars ', () => {
		let carsLane = new Lane();

		carsLane.createObstacles('car', 0);
		assert.isTrue(carsLane.obstacles.length < 2);
	});

	it('should create one or two busses', () => {
		let busLane = new Lane();

		busLane.createObstacles('bus', 0);
		assert.isTrue(busLane.obstacles.length < 2);
	});
});
