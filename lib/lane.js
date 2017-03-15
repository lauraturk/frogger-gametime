var Car = require('./car.js');

function Lane(y) {
	this.x = 0;
	this.y = y;
	this.width = 500;
	this.height = 100;
	this.vehicles = []
	// this.speed = speed;
	this.color = 'rbga(0,0,0,0)'
}

Lane.prototype.getVehicles = function(vehicle, num, ctx) {
	for(var i = 0; i < num; i++) {
		var car = new Car(this.x, this.lane)
		this.vehicles.push(vehicle);
		return this.vehicles;
	}
	console.log(this.vehicles)
	};

Lane.prototype.drawVehicles = function(vehicles, ctx) {
	this.vehicles.forEach(function(vehicle){
		vehicle.draw(ctx);
	});
}

Lane.prototype.moveVehicles = function(){
		this.vehicles.forEach(function(Car){
		Car.moveRight();
	});
}

Lane.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.strokeRect(this.x, this.y, this.width, this.height);
}

module.exports = Lane;
