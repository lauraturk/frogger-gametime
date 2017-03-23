const Pieces = require('./Pieces');

class Bus extends Pieces {
  constructor (x, y, width, height, speed, image) {
		super(x, y, height, speed, image);
		this.width = 150;
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

module.exports = Bus;
