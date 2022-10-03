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
    if(this.vy < 0){
        this.vy = 0
    }
  }

  jump() {
    console.log("Jump!");
    this.vy = 0.5
  }
}
