var Car = require('./car.js');
var Bus = require('./bus.js');

function Lane(y){
	this.x = 0;
	this.y = y;
	this.width = 500;
	this.height = 50;
	this.obstacles = [];
	this.color = 'rbga(0,0,0,0)';
}

Lane.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.strokeRect(this.x, this.y, this.width, this.height);
};

Lane.prototype.createCars = function(spacing) {
	var start = 0;
	var num = Math.floor(Math.random() * 4);
	for (var i = 0; i < num; i++) {
		var car = new Car(start, this);
		this.obstacles.push(car);
		start += spacing;
	}
};

Lane.prototype.createBus = function(spacing) {
	var start = 0;
	var num = Math.floor(Math.random() * 3);
	for (var i = 0; i < num; i++) {
		var bus = new Bus(start, this);
		this.obstacles.push(bus);
		start += spacing;
	}
};

module.exports = Lane;
