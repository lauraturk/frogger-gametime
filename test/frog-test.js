var chai = require('chai');
var assert = chai.assert;

var Frog = require('../lib/frog.js');


describe ('Frog', function(){
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	const frog = new Frog ();

	context('with default attributes', function (){

	it('should be a function', function (){
		assert.isFunction(Frog);
	});

	it('should instatiate a new frog', function (){
		assert.isObject(frog);
	});

	it('should have a set height, width, and color', function (){
		assert.equal(frog.height, 25);
		assert.equal(frog.width, 25);
		assert.equal(frog.color, 'rgba(0, 255, 0, 1)');
	});

	it('should have a function called "draw()" ', function () {
		assert.isFunction(frog.draw);
	});

	it('should have a function called "moveUp"', function () {
		assert.isFunction(frog.moveUp);
	});

	it('should move up equal to its height', function () {
		frog.moveUp();
		assert.equal(frog.y, 450);
	});

	it('should have a function called "moveDown"', function () {
		assert.isFunction(frog.moveDown);
	});

	it('should move down equal to its height', function () {
		frog.moveUp();
		frog.moveDown();
		assert.equal(frog.y, 450);
	});

	it('should have a function called "moveRight"', function () {
		assert.isFunction(frog.moveRight);
	});

	it('should move right equal to its width', function () {
		frog.moveRight();
		assert.equal(frog.x, 275);
	});


	it('should not move past the canvas end', function () {
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		frog.moveRight();
		assert.equal(frog.x, 475);
	});

	it('should have a function called "moveLeft"', function () {
		assert.isFunction(frog.moveLeft);
	});

	it('should move left equal to its width', function () {
		frog.moveLeft();
		assert.equal(frog.x, 225);
	});

	it('should not move past the canvas end moving left', function () {
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		frog.moveLeft();
		assert.equal(frog.x, 0);
	});

	it('should instantiate at the bottom center of the canvas', function () {
		assert.equal(frog.x, 250);
		assert.equal(frog.y, 475);
	});

	it('should instantiate with three lives to lose', function () {
		assert.equal(frog.lives, 3);
	});

	it('should have a function called "collide()"', function () {
		assert.isFunction(frog.collide)
	});

	// it('should detect a collision', function () {
	// 	var lane = new Lane(450);
	// 	var car = new Car(250, lane);
	// 	var frog = new Frog();
	// 	frog.moveUp();
	// 	frog.collide(car);
	//
	// 	assert.equal(frog.collide, true)
	//
	// });

	it('should have a function called "winCollide()" ', function () {
		assert.isFunction(frog.winCollide);
	});

	it('should have a function called "death()" ', function () {
		assert.isFunction(frog.death);
	});

	it('should turn red upon dying', function () {
		frog.death();
		assert.equal(frog.color, 'rgba(250, 0, 0, 1)');
	});

	it('should return to the starting place upon dying', function () {
		frog.death();
		assert.equal(frog.x, 250);
		assert.equal(frog.y, 475);
	});

	it('should return to its starting place upon winning', function () {
		frog.win();
		assert.equal(frog.x, 250);
		assert.equal(frog.y, 475);
	})




	});
});
