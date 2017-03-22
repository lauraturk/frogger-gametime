import Car from './car';
import Bus from './bus';

export default class Lane {
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

	createCars () {
		let start = 0;
		let spacing = Math.floor(Math.random() * 300 - 100) + 100;
		let num = Math.floor(Math.random() * 2);

		for (let i = 0; i < num; i++) {
			let car = new Car(start, this);

			this.obstacles.push(car);
			start += spacing;
		}
	}

	createBus () {
		let start = 400;
		let spacing = Math.floor(Math.random() * 400 - 200) + 200;
		let num = Math.floor(Math.random() * 2);

		for (let i = 0; i < num; i++) {
			let bus = new Bus(start, this);
			console.log(this);

			this.obstacles.push(bus);
			start -= spacing;
		}
	}
}
