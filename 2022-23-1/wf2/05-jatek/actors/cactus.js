import { ctx } from "../canvas.js";
import { randomBetween } from "../util.js";

export class Cactus {
  constructor() {
    this.position = { x: 1000, y: 20 };
    this.height = randomBetween(50, 150);
    this.alive = true;
  }

  render() {
    ctx.save();
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, 30, this.height);
    ctx.restore();
  }

  update(dt) {
    this.position.x -= 0.5 * dt;
    if (this.position.x < 30) {
      this.alive = false;
    }
  }
}
