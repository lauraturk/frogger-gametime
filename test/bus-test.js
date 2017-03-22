const chai = require('chai');
const assert = chai.assert;
const Bus = require('../lib/bus');
const Lane = require('../lib/lane');
let lane = new Lane(250);
let bus = new Bus(10, lane);

describe ('Bus', () => {

	it('should be a function', () => {
		assert.isFunction(Bus);
	});

	it('should instatiate a new bus', () => {
		let bus = new Bus(10, 1);

		assert.isObject(bus);
	});

	it('should take a value for x', () => {
		assert.equal(bus.x, 10);
	});

	it('should inherit its y from the lane', () => {
		assert.equal(bus.y, 250);
	});

	it('every bus should have a set height', () => {
		assert.equal(bus.height, 50);
	});

  it('should have a width', () => {
		assert.equal(bus.width, 150);
  });

	it('should have a speed', () => {
		assert.equal(bus.speed, 3);
	});

	it('should have a function called "draw()" ', () => {
		assert.isFunction(bus.draw);
	});

	it('should have a function called "moveLeft"', () => {
		assert.isFunction(bus.moveLeft);
	});

	it('should move left', () => {
		let lane = new Lane(250);
		let bus = new Bus (200, lane);

		bus.moveLeft();
		bus.moveLeft();
		assert.isTrue(bus.x < 200);
	});

	it('should reset to 500 when it hits the canvas end moving left', () => {
		let lane = new Lane(250);
		let bus = new Bus (-150, lane);

		bus.moveLeft();
		assert.equal(bus.x, 500);
	});
});
