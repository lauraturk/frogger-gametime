function Frog (x, y, width, height, color) {
  this.x = 250;
  this.y = 450;
  this.width = 50;
  this.height = 50;
  this.color = 'rgba(0, 255, 0, 1)';
}

Frog.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = Frog;
