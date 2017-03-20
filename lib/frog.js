function Frog() {
  this.x = 250;
  this.y = 475;
  this.width = 25;
  this.height = 25;
  this.lives = 3;
  this.color = 'rgba(0, 255, 0, 1)';
  this.lives = 3;
}

Frog.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

Frog.prototype.moveUp = function() {
  this.y -= this.height;
  if (this.y < 0) {
    this.y += this.height;
  }
};

Frog.prototype.moveDown = function() {
  this.y += this.height;
  if (this.y > 475) {
    this.y -= this.height;
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
  if (this.x > 475) {
    this.x -= 25;
  }
};

Frog.prototype.move = function(e) {
  switch (e.keyCode) {
    case 37:
      this.moveLeft();
    break;
    case 38:
      this.moveUp();
    break;
    case 39:
      this.moveRight();
    break;
    case 40:
      this.moveDown();
    break;
  }
};

Frog.prototype.collide = function(car) {
  const yCollision = this.y + this.height > car.y && this.y < car.y + car.height;
  const xCollision = this.x + this.width > car.x && this.x < car.x + car.width;
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
