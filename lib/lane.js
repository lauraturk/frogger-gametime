function Lane(y, speed){
	this.x = 0;
	this.y = y;
	this.width = 500;
	this.height = 100;
	this.vehicles = []
	this.speed = speed;
	this.color = 'rbga(0,0,0,0)'
}

Lane.prototype.getVehicles = function(vehicle, ctx) {
	this.vehicles.push(vehicle);
	this.vehicles.forEach(function(vehicle){
		vehicle.draw(ctx);
	})
  vehicle.moveRight();
}

Lane.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.strokeRect(this.x, this.y, this.width, this.height);
}

module.exports = Lane;
