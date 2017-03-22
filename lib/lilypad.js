class Lilypad {
	constructor(x) {
		this.x = x;
		this.y = 0;
		this.width = 50;
		this.height = 50;
		this.image = new Image();
	}
	
	draw (ctx) {
		this.image.src = '../images/lilypad.jpeg';
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}
}

module.exports = Lilypad;
