class Dino {
  constructor() {
    this.position = { x: 10, y: 20 };
    this.vy = 0;
  }

  render() {
    ctx.fillRect(this.position.x, this.position.y, 50, 100);
  }

  update(dt) {
    this.position.y += this.vy*dt
  }

  jump() {
    console.log("Jump!");
    this.vy = 2
  }
}
