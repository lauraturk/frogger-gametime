function Car (x, lane){
	this.x = x;
	this.y = lane.y + 25;
	this.width = 100;
	this.height = 50;
	this.speed = 1;
	this.color = 'rgba(0,0,255,1)';
}

Car.prototype.draw = function(ctx){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	return this;
};

Car.prototype.moveRight = function(){
	this.x += this.speed;
	if(this.x > 600) {
		this.x = -100;
	}
	return this;
};

Car.prototype.moveLeft = function() {
	this.x -= this.speed;
	if (this.x < -100) {
		this.x = 600;
	}
};

module.exports = Car;
