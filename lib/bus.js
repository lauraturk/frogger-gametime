function Bus (x, lane){
	this.x = x;
	this.y = lane.y;
	this.width = 150;
	this.height = 50;
	this.speed = 3;
	this.image = new Image();
}

Bus.prototype.draw = function(ctx){
	this.image.src = '../images/bus.svg';
	ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	return this;
};

Bus.prototype.moveRight = function(){
	this.x += this.speed;
	if(this.x > 500) {
		this.x = -150;
	}
};

Bus.prototype.moveLeft = function() {
	this.x -= this.speed;
	if (this.x < -150) {
		this.x = 500;
	}
};

module.exports = Bus;
