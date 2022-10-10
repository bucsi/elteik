import { ctx } from "../canvas.js";

export class Dino {
  constructor() {
    this.position = { x: 10, y: 20 };
    this.vy = 0;
  }

  render() {
    ctx.fillRect(this.position.x, this.position.y, 50, 100);
  }

  update(dt) {
    this.position.y += this.vy * dt;
    this.vy -= 0.1;
    if (this.position.y < 20) {
      this.position.y = 20;
    }
  }

  jump() {
    if (this.position.y !== 20) {
      return;
    }
    this.vy = 1;
  }

  crouch() {
    console.log("Going ⬇️");
    if (this.position.y !== 20) {
      return;
    }

    this.position.y = -10;
    setTimeout(this.standUp, 500);
  }

  standUp() {
    console.log(this);
    this.position.y = 20;
  }
}
