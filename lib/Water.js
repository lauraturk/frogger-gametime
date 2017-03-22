class Water {
	constructor(x) {
		this.x = x;
		this.y = 0;
		this.width = 50;
		this.height = 50;
		this.color = 'rgba(8, 7, 143, 1)';
	}

	draw (ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

module.exports = Water;
