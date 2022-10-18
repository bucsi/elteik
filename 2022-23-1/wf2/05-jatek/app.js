import { state } from "./state.js";
import { canvas, ctx } from "./canvas.js";
import { Cactus } from "./actors/cactus.js";
import { Dino } from "./actors/dino.js";

const image = document.querySelector("img");

// game loop
function init() {
  state.player = new Dino();
  state.cactusTimer = setInterval(createEnemy, 1000);
  state.game = true;
}

function update(dt) {
  state.player.update(dt);
  for (const cactus of state.enemies) {
    cactus.update(dt);
  }

  state.enemies = state.enemies.filter((cactus) => cactus.alive);
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.transform(1, 0, 0, -1, 0, canvas.height);
  ctx.drawImage(image, 0, 0, 1000, 500);
  ctx.transform(1, 0, 0, -1, 0, canvas.height);

  state.player.render();
  for (const cactus of state.enemies) {
    cactus.render();
  }
}

function next() {
  if (!state.game) {
    return;
  }
  const currentTime = performance.now();
  const dt = currentTime - state.lastFrameTime;

  update(dt);
  render();

  state.lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

// state mutators
function createEnemy() {
  state.enemies.push(new Cactus());
}

// event handlers
addEventListener("keypress", (event) => {
  if (event.key === " ") {
    state.player.jump();
  } else if (event.key === "s") {
    state.player.crouch();
  }
});

// ====== START THE GAME ======
init();
next();
