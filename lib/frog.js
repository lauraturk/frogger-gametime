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
        return this.x < 0 ? this.x += this.width : this.x -= this.width;
      case 38:
        return this.y < 0 ? this.y += this.height : this.y -= this.height;
      case 39:
        return this.x > 475 ? this.x -= this.width : this.x += this.width;
      case 40:
        return this.y > 475 ? this.y -= this.height : this.y += this.height;
    }
  }

}

Frog.prototype.collide = function(vehicle) {
  const yCollision = this.y + this.height > vehicle.y && this.y < vehicle.y + vehicle.height;
  const xCollision = this.x + this.width > vehicle.x && this.x < vehicle.x + vehicle.width;
  return yCollision && xCollision;
};

Frog.prototype.winCollide = function(lilypad) {
  const yCollision = this.y + this.height > lilypad.y && this.y < lilypad.y + lilypad.height;
  const xCollision = this.x + this.width > lilypad.x && this.x < lilypad.x + lilypad.width;
  return yCollision && xCollision;
};

Frog.prototype.death = function() {
  this.color = 'rgba(250, 0, 0, 1)';
  this.x = 250;
  this.y = 475;
  this.lives--;
};

Frog.prototype.win = function() {
  this.x = 250;
  this.y = 475;
};

module.exports = Frog;
