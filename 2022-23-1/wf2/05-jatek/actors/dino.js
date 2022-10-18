import { ctx } from "../canvas.js";
import { CACTUS_WIDTH, DINO_WIDTH } from "../config.js";
import { state } from "../state.js";
export class Dino {
  constructor() {
    this.position = { x: 10, y: 20 };
    this.vy = 0;
    this.crouching = false;
  }

  render() {
    ctx.fillRect(this.position.x, this.position.y, 50, 100);
  }

  update(dt) {
    this.position.y += this.vy * dt;
    this.vy -= 0.1;

    if (this.crouching) {
      this.position.y = -10;
    } else if (this.position.y < 20) {
      this.position.y = 20;
    }

    for (const enemy of state.enemies) {
      if (this.collide(enemy)) {
        console.log("Meghaltal!!!!");
        state.game = false;
      }
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
    this.crouching = true;
    this.position.y = -10;
    setTimeout(() => {
      this.standUp();
    }, 500);
  }

  standUp() {
    console.log(this.position.y);
    this.position.y = 20;
    this.crouching = false;
  }

  collide(cactus) {
    return (
      ((this.position.x > cactus.position.x &&
        this.position.x < cactus.position.x + CACTUS_WIDTH) ||
        (cactus.position.x > this.position.x &&
          cactus.position.x < this.position.x + DINO_WIDTH)) &&
      this.position.y < cactus.position.y + cactus.height
    );
  }
}
