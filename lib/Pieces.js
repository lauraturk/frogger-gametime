class Pieces {
  constructor (x, lane) {
    this.x = x;
    this.y = lane.y;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.color = 'rgba(0, 0, 0, 0)';
    this.speed = 3;
    this.lives = 3;
  }
}

module.exports = Pieces;
