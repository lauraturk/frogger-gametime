var chai = require('chai');
var assert = chai.assert;

var Frog = require('../lib/frog.js');
var Bus = require('../lib/bus.js');
var Lane = require('../lib/lane.js');
var World = require('../lib/world.js');


describe ('Frog', function() {
  // const canvas = document.createElement('canvas');
  // const ctx = canvas.getContext('2d');
  const frog = new Frog ();

  context('with default attributes', function () {

    it('should be a function', function () {
      assert.isFunction(Frog);
    });

    it ('should instatiate a new frog', function () {
      assert.isObject(frog);
    });

    it('should have a set height', function () {
      assert.equal(frog.height, 25);
    });

		it('should have a set width', function () {
			assert.equal(frog.width, 25);
		})

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
      for (let i = 0; i < 10; i++) {
        frog.moveRight()
      }
      assert.equal(frog.x, 475);
    });

    it('should have a function called "moveLeft"', function () {
      assert.isFunction(frog.moveLeft);
    });

    it('should move left equal to its width', function () {
			let frog2 = new Frog ();
      frog2.moveLeft();
      assert.equal(frog2.x, 225);
    });

    it('should not move past the canvas end moving left', function () {
			let frog3 = new Frog ();
			for (let i = 0; i < 10; i++) {
        frog3.moveLeft();
      }
      assert.equal(frog3.x, 0);
    });

    it('should instantiate at the bottom center of the canvas', function () {
			let frog4 = new Frog ();
      assert.equal(frog4.x, 250);
      assert.equal(frog4.y, 475);
    });

    it('should instantiate with three lives to lose', function () {
      assert.equal(frog.lives, 3);
    });

    it('should have a function called "collide()"', function () {
      assert.isFunction(frog.collide)
    });

    // it('should detect a collision', function () {
    //   var world = new World();
    //   var bus = new Bus ();
		//
    //   world.createLanes();
    //   world.createVehicles();
		//
    //   for (let i = 0; i < 10; i++) {
    //     frog.moveUp();
		// 		frog.moveRight();
    //   }
		//
		// 	frog.moveRight();
		// // frog.collide(bus);
		//
    //   assert.isTrue(frog.death)
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
