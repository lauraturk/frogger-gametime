class Pieces {
  constructor (x) {
    this.x = x;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.speed = 3;
    this.image = new Image();
    this.color = 'rgba(8, 7, 143, 1)';
    this.lives = 3;
  }
}

module.exports = Pieces;
