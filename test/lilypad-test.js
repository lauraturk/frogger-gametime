const chai = require('chai');
const assert = chai.assert;
const Lilypad = require('../lib/lilypad.js');

describe('Lilypad', () => {
  const lilypad = new Lilypad();

  it('should be a function', () => {
    assert.isFunction(Lilypad);
  });

  it('should instatiate new lilypad object', () => {
    assert.isObject(lilypad);
  });

  it('should take an x value', () => {
    let lilypad1 = new Lilypad(50);

    assert.equal(lilypad1.x, 50);
  });

  it('should have a y, height, and width', () => {
    assert.equal(lilypad.y, 0);
    assert.equal(lilypad.height, 50);
    assert.equal(lilypad.width, 50);
  });

  it('should have a function called draw', () => {
    assert.isFunction(lilypad.draw);
  });
});
