// require('locus')
var chai = require('chai');
var assert = chai.assert;


var Car = require('../lib/car.js');
var Lane = require('../lib/lane.js');

describe ('Car', function(){
	context('with default attributes', function (){



	it('should be a function', function (){
		assert.isFunction(Car);
	});

	it('should instatiate a new car', function (){
		var car = new Car(10, 1);
		assert.isObject(car);
	});

	it('should take a value for x', function () {
		var lane = new Lane(250);
		var car = new Car(10, lane);
		assert.equal(car.x, 10);
	});

	it('should inherit its y from the lane', function () {
		var lane = new Lane(250);
		var car = new Car(10, lane);
		assert.equal(car.y, 250);
	});

	it('every car should have a set height, width, speed and color', function (){
		var lane = new Lane(250);
		var car = new Car (10, lane);
		var car2 = new Car (5, lane);
		assert.equal(car.height, 50);
		assert.equal(car2.height, 50);
		assert.equal(car.width, 100);
		assert.equal(car2.width, 100);
		assert.equal(car.speed, 5);
		assert.equal(car2.speed, 5);
		assert.equal(car.color, 'rgba(0,0,255,1)');
		assert.equal(car2.color, 'rgba(0,0,255,1)');
	});

	it('should have a function called "draw()" ', function () {
		var lane = new Lane(250);
		var car = new Car (10, lane);
		assert.isFunction(car.draw);
	});


	it('should have a function called "moveRight"', function () {
		var lane = new Lane(250);
		var car = new Car (10, lane);
		assert.isFunction(car.moveRight);
	});

	it('should move right equal to its speed', function () {
		var lane = new Lane(250);
		var car = new Car (10, lane);
		car.moveRight();
		assert.equal(car.x, 15);
	});

	it('should reset to -150 when it hits the canvas end moving right', function () {
		var lane = new Lane(250);
		var car = new Car (600, lane);
		car.moveRight();
		assert.equal(car.x, -100);
	});

	it('should have a function called "moveLeft"', function () {
		var lane = new Lane(250);
		var car = new Car (10, lane);
		assert.isFunction(car.moveLeft);
	});

	it('should move left equal to its speed', function () {
		var lane = new Lane(250);
		var car = new Car (10, lane);
		car.moveLeft();
		assert.equal(car.x, 5);
	});

	it('should reset to 500 when it hits the canvas end moving left', function () {
		var lane = new Lane(250);
		var car = new Car (-100, lane);
		car.moveLeft();
		assert.equal(car.x, 600);
	});

	});
});
