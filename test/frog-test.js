// require('locus')
var chai = require('chai');
var assert = chai.assert;


var Frog = require('../lib/frog.js');
var Car = require('../lib/car.js');
var Lane = require('../lib/lane.js');

describe ('Frog', function(){
	context('with default attributes', function (){

	it('should be a function', function (){
		assert.isFunction(Frog);
	});

	it('should instatiate a new frog', function (){
		var frog = new Frog();
		assert.isObject(frog);
	});

	it('should have a set height, width, and color', function (){
		var frog = new Frog ();
		assert.equal(frog.height, 25);
		assert.equal(frog.width, 25);
		assert.equal(frog.color, 'rgba(0, 255, 0, 1)');
	});

	it('should have a function called "draw()" ', function () {
		var frog = new Frog ();
		assert.isFunction(frog.draw);
	});

	// it('should ')   not sure how to test for draw
	it('should have a function called "moveUp"', function () {
		var frog = new Frog ();
		assert.isFunction(frog.moveUp);
	});

	it('should move up equal to its height', function () {
		var frog = new Frog ();
		frog.moveUp();
		assert.equal(frog.y, 450);
	});

	it('should have a function called "moveDown"', function () {
		var frog = new Frog ();
		assert.isFunction(frog.moveDown);
	});

	it('should move down equal to its height', function () {
		var frog = new Frog ();
		frog.moveUp();
		frog.moveDown();
		assert.equal(frog.y, 475);
	});

	it('should have a function called "moveRight"', function () {
		var frog = new Frog ();
		assert.isFunction(frog.moveRight);
	});

	it('should move right equal to its width', function () {
		var frog = new Frog ();
		frog.moveRight();
		assert.equal(frog.x, 275);
	});

// function fastForward() {
//
// }

	it('should not move past the canvas end', function () {
		var frog = new Frog ();
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
		var frog = new Frog ();
		assert.isFunction(frog.moveLeft);
	});

	it('should move left equal to its width', function () {
		var frog = new Frog ();
		frog.moveLeft();
		assert.equal(frog.x, 225);
	});

	it('should not move past the canvas end moving left', function () {
		var frog = new Frog ();
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
		var frog = new Frog();
		assert.equal(frog.x, 250);
		assert.equal(frog.y, 475);
	});

	it('should instantiate with three lives to lose', function () {
		var frog = new Frog();
		assert.equal(frog.lives, 3);
	});

	it('should have a function called "collide()"', function () {
		var frog = new Frog();
		assert.isFunction(frog.collide)
	});

	// it('should detect a collision', function () {
	// 	var lane = new Lane(450);
	// 	var car = new Car(250, lane);
	// 	var frog = new Frog();
	// 	frog.moveUp();
	//
	// 	assert.equal(frog.yCollision && frog.xCollision, true)
	//
	// });

	it('should have a function called "winCollide()" ', function () {
		var frog = new Frog();
		assert.isFunction(frog.winCollide);
	});

	it('should have a function called "death()" ', function () {
		var frog = new Frog();
		assert.isFunction(frog.death);
	});

	it('should turn red upon dying', function () {
		var frog = new Frog();
		frog.death();
		assert.equal(frog.color, 'rgba(250, 0, 0, 1)');
	});

	it('should return to the starting place upond dying', function () {
		var frog = new Frog();
		frog.death();
		assert.equal(frog.x, 250);
		assert.equal(frog.y, 475);
	});

	


	});
});
