class Bus {
  constructor (x, lane) {
		this.x = x;
		this.y = lane.y;
		this.width = 150;
		this.height = 50;
		this.speed = 3;
		this.image = new Image();
	}

	draw (ctx) {
		this.image.src = '../images/bus.svg';
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		return this;
	}

	moveLeft () {
		this.x -= this.speed;

		if (this.x < -150) {
			this.x = 500;
		}
	}
}

module.exports = Bus
