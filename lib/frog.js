class Frog {
  constructor () {
    this.x = 250;
    this.y = 475;
    this.width = 25;
    this.height = 25;
    this.lives = 3;
    this.image = new Image();
  }

  draw (ctx) {
    this.image.src = '../images/frog.png';
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move (e) {
    switch (e.keyCode) {
      case 37:
        return this.x <= 0 ? this.x += this.width : this.x -= this.width;
      case 38:
        return this.y <= 0 ? this.y += this.height : this.y -= this.height;
      case 39:
        return this.x >= 475 ? this.x -= this.width : this.x += this.width;
      case 40:
        return this.y >= 475 ? this.y -= this.height : this.y += this.height;
    }
  }

  collide (object) {
    const yCollision = this.y + this.height > object.y && this.y < object.y + object.height;
    const xCollision = this.x + this.width > object.x && this.x < object.x + object.width;

    return yCollision && xCollision;
  }

  backToStart () {
    this.x = 250;
    this.y = 475;
  }
}

module.exports = Frog;
