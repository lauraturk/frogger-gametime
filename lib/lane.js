const Car = require('./car');
const Bus = require('./bus');

class Lane {
	constructor(y) {
		this.x = 0;
		this.y = y;
		this.width = 500;
		this.height = 50;
		this.obstacles = [];
		this.color = 'rgba(0,0,0,0)';
	}

	draw (ctx) {
		ctx.fillStyle = this.color;
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}

	createObstacles (vehicleType, startX) {
		let spacing = Math.floor(Math.random() * 350 - 150) + 150;
		let num = Math.floor(Math.random() * 2);

		for (let i = 0; i < num; i++) {
			if (vehicleType === 'car') {
				let car = new Car(startX, this);

				this.obstacles.push(car);
			} else {
				let bus = new Bus(startX, this);

				this.obstacles.push(bus);
			}

			startX += spacing;
		}
	}
}

module.exports = Lane;
