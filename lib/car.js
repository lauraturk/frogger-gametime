function Car (x, lane){
	this.x = x;
	this.y = lane.y;
	this.width = 100;
	this.height = 50;
	this.speed = 2;
	this.color = 'rgba(0,0,255,1)'
}

Car.prototype.draw = function(ctx){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);

}

Car.prototype.moveRight = function(){
	this.x += this.speed;
	if(this.x > 500){
		this.x = -100;
	}
}


module.exports = Car
