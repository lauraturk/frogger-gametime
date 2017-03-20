function Water (x) {
	this.x = x;
	this.y = 0;
	this.width = 50;
	this.height = 50;
	this.color = 'rgba(0, 0, 255, 1)';
}

Water.prototype.draw = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = Water;