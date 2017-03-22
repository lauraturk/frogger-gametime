const chai = require('chai');
const assert = chai.assert;
const Car = require('../lib/car.js');
const Lane = require('../lib/lane.js');


describe ('Car', () => {

	let lane = new Lane(250);
	let car = new Car(10, lane);

	it('should be a function', () => {
		assert.isFunction(Car);
	});

	it('should instatiate a new car', () => {
		assert.isObject(car);
	});

	it('should take a value for x', () => {
		assert.equal(car.x, 10);
	});

	it('should inherit its y from the lane', () => {
		assert.equal(car.y, 250);
	});

	it('every car should have a set height', () => {
		assert.equal(car.height, 50);
	});

	it('should have a width', () => {
		assert.equal(car.width, 100);
	});

	it('should have a speed', () => {
		assert.equal(car.speed, 5);
	});

	it('should have a function called "draw()" ', () => {
		assert.isFunction(car.draw);
	});

	it('should have a function called "moveRight"', () => {
		assert.isFunction(car.moveRight);
	});

	it('should move right equal to its speed', () => {
		car.moveRight();
		assert.equal(car.x, 15);
	});

	it('should reset to -150 when it hits the canvas end moving right', () => {
		let car = new Car (600, lane);

		car.moveRight();
		assert.equal(car.x, -100);
	});
});
