// require('locus')
var chai = require('chai');
var assert = chai.assert;

var Car = require('../lib/car.js');
var Lane = require('../lib/lane.js');


describe ('Car', function(){

	var lane = new Lane(250);
	var car = new Car(10, lane);


	context('with default attributes', function (){



	it('should be a function', function (){
		assert.isFunction(Car);
	});

	it('should instatiate a new car', function (){
		assert.isObject(car);
	});

	it('should take a value for x', function () {
		assert.equal(car.x, 10);
	});

	it('should inherit its y from the lane', function () {
		assert.equal(car.y, 250);
	});

	it('every car should have a set height', function (){
		assert.equal(car.height, 50);
	});

	it('should have a width', function () {
		assert.equal(car.width, 100);
	});

	it('should have a speed', function () {
		assert.equal(car.speed, 5);
	});

	// it('should have an image', function (ctx) {
	// 	car.draw(ctx)
	// 	assert.equal(car.image.src, '../images/car.svg')
	// });

	it('should have a function called "draw()" ', function () {
		assert.isFunction(car.draw);
	});


	it('should have a function called "moveRight"', function () {
		assert.isFunction(car.moveRight);
	});

	it('should move right equal to its speed', function () {
		car.moveRight();
		assert.equal(car.x, 15);
	});

	it('should reset to -150 when it hits the canvas end moving right', function () {
		var car = new Car (600, lane);
		car.moveRight();
		assert.equal(car.x, -100);
	});

	it('should have a function called "moveLeft"', function () {
		assert.isFunction(car.moveLeft);
	});

	it('should move left equal to its speed', function () {
		car = new Car (20, lane);
		car.moveLeft();
		assert.isTrue(car.x < 20);
	});

	it('should reset to 500 when it hits the canvas end moving left', function () {
		var car = new Car (-100, lane);
		car.moveLeft();
		assert.equal(car.x, 600);
	});

	});
});
