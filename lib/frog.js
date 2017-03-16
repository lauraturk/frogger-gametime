function Frog() {
  this.x = 250;
  this.y = 475;
  this.width = 25;
  this.height = 25;
  this.color = 'rgba(0, 255, 0, 1)';
}

Frog.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Frog.prototype.moveUp = function() {
  this.y -= 25;
  if (this.y < 0) {
    this.y += 25;
  }
};

Frog.prototype.moveDown = function() {
  this.y += 25;
  if (this.y > 450) {
    this.y -= 25;
  }
};

Frog.prototype.moveLeft = function() {
  this.x -= 25;
  if (this.x < 0) {
    this.x += 25;
  }
};

Frog.prototype.moveRight = function() {
  this.x += 25;
  if (this.x > 450) {
    this.x -= 25;
  }
};

Frog.prototype.collide = function(car) {
  const yCollision = this.y + this.height > car.y && this.y < car.y + car.height;
  const xCollision = this.x + this.width > car.x && this.x < car.x + car.width;
  return yCollision && xCollision;
}

Frog.prototype.win = function(lilypad) {
  const yCollision = this.y + this.height > lilypad.y && this.y < lilypad.y + lilypad.height;
  const xCollision = this.x + this.width > lilypad.x && this.x < lilypad.x + lilypad.width;
  return yCollision && xCollision;
}

module.exports = Frog;
