class Pieces {
  constructor (x, lane) {
    this.x = x;
    this.y = lane.y;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.image = new Image();
    this.color = 'rgba(8, 7, 143, 1)';
  }
}

module.exports = Pieces;
