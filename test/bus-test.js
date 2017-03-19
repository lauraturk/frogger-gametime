var chai = require('chai');
var assert = chai.assert;

var Bus = require('../lib/bus.js');

describe ('Bus', function(){
	context('with default attributes', function (){



	it('should be a function', function (){
		assert.isFunction(Bus);
	});

	it('should instatiate a new bus', function (){
		var bus = new Bus(10, 1);
		assert.isObject(bus);
	});

	it('should take a value for x', function () {
		var bus = new Bus(10, 1);
		assert.equal(bus.x, 10);
	});

	it('should instatiate in a designated lane', function () {
		var bus = new Bus(10, lane);
		assert.equal(bus.lane, lane);
	});

	});
});
