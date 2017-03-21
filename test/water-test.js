var chai = require('chai');
var assert = chai.assert;
var Water = require('../lib/water.js');

describe('Water', () => {
  const water = new Water();

  it('should be a function', () => {
    assert.isFunction(Water);
  });

  it('should instatiate new water object', () => {
    assert.isObject(water);
  });

  it('should take an x value', () => {
    let water1 = new Water(50);

    assert.equal(water1.x, 50);
  });

  it('should have a y, height, width, and color', () => {
    assert.equal(water.y, 0);
    assert.equal(water.height, 50);
    assert.equal(water.width, 50);
    assert.equal(water.color, 'rgba(8, 7, 143, 1)');
  });

  it('should have a function called draw', () => {
    assert.isFunction(water.draw);
  });
});
