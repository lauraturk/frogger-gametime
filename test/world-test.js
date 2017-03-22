const chai = require('chai');
const assert = chai.assert;
const World = require('../lib/world.js');

describe ('World', () => {
  const world = new World();

  it('should be a function', () => {
    assert.isFunction(World);
  });

  it('should instantiate a new world', () => {
    assert.isObject(world);
  });

  it('should hold lilypads', () => {
    assert.deepEqual(world.lilypads, []);
  });

  it('should hold puddles', () => {
    assert.deepEqual(world.puddles, []);
  });

  it('should hold lanes', () => {
    assert.deepEqual(world.lanes, []);
  });

  it('should instantiate a frog', () => {
    assert.isObject(world.frog);
  });

  it('should instantiate 5 lilypads', () => {
    world.createLilypads();
    assert.equal(world.lilypads.length, 5);
  });

  it('should insantiate 5 puddles of water', () => {
    world.createPuddles();
    assert.equal(world.puddles.length, 5);
  });

  it('should insantiate 7 lanes', () => {
    world.createLanes();
    assert.equal(world.lanes.length, 7);
  });
});
