function Car (x, lane){
	this.x = x;
	this.y = lane.y;
	this.width = 100;
	this.height = 50;
	this.speed = 5;
	this.image = new Image();
}

Car.prototype.draw = function(ctx){
	this.image.src = '../images/car.svg';
	ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	return this;
};

Car.prototype.moveRight = function(){
	this.x += this.speed;
	if(this.x > 600) {
		this.x = -100;
	}
};

module.exports = Car;
