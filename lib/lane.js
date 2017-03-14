var Car = require('./car.js');


function Lane(y){
	this.x = 0;
	this.y = y;
	this.width = 500;
	this.height = 100;
	this.cars = [];
	this.color = 'rbga(0,0,0,0)';
}

Lane.prototype.createCars = function(num, spacing) {
	var start = 0;
	for (var i = 0; i < num; i++) {
		var car = new Car(start, this);
		this.cars.push(car);
		start += spacing;
	}
};

Lane.prototype.drawCars = function(ctx) {
	this.cars.forEach(function(car){
		car.draw(ctx);
	});
};

Lane.prototype.moveCars = function() {
	this.cars.map(function(car) {
		car.moveRight();
	});
};



Lane.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.strokeRect(this.x, this.y, this.width, this.height);
};

module.exports = Lane;
