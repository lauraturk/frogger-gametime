const chai = require('chai');
const assert = chai.assert;
const Frog = require('../lib/frog.js');
const Bus = require('../lib/bus.js');
const Lane = require('../lib/lane.js');

describe ('Frog', () => {
  const frog = new Frog ();

  context('with default attributes', () => {

    it('should be a function', () => {
      assert.isFunction(Frog);
    });

    it ('should instatiate a new frog', () => {
      assert.isObject(frog);
    });

    it('should have a set height', () => {
      assert.equal(frog.height, 25);
    });

		it('should have a set width', () => {
			assert.equal(frog.width, 25);
		})

    it('should have a function called "draw()" ', () => {
      assert.isFunction(frog.draw);
    });

    it('should have a function called "move()"', () => {
      assert.isFunction(frog.move);
    });

    it('should instantiate at the bottom center of the canvas', () => {
			let frog4 = new Frog ();

      assert.equal(frog4.x, 250);
      assert.equal(frog4.y, 475);
    });

    it('should instantiate with three lives to lose', () => {
      assert.equal(frog.lives, 3);
    });

    it('should have a function called "collide()"', () => {
      assert.isFunction(frog.collide);
    });

    it('should detect a collision', () => {
      const lane = new Lane (450);
      const bus = new Bus (275, lane);
      const frog = new Frog();

      bus.moveLeft();
      assert.isTrue(frog.collide(bus));
    });

    it('should return to the starting place upon dying or winning', () => {
      frog.backToStart();
      assert.equal(frog.x, 250);
      assert.equal(frog.y, 475);
    });
  });
});
