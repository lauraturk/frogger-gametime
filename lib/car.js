var Bus = require('./bus')

class Car extends Bus {
	constructor (x, y, width, height, speed, image) {
		super(x, y, height, image);
		this.width = 100;
		this.speed = 5;
	}
	draw (ctx) {
		this.image.src = '../images/car.svg';
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		return this;
	}
	moveRight () {
		this.x += this.speed;
		if (this.x > 600) {
			this.x = -this.width
		}
	}
}


module.exports = Car;
