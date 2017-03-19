function Bus (x, lane){
	this.x = x;
	this.y = lane.y;
	this.width = 150;
	this.height = 50;
	this.speed = 3;
	this.color = 'rgba(255,255,0,1)';
}

Bus.prototype.draw = function(ctx){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
	return this;
};

Bus.prototype.moveRight = function(){
	this.x += this.speed;
	if(this.x > 500) {
		this.x = -150;
	}
	return this;
};

Bus.prototype.moveLeft = function() {
	this.x -= this.speed;
	if (this.x < -150) {
		this.x = 500;
	}
};

module.exports = Bus;
