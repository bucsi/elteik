const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.transform(1, 0, 0, -1, 0, canvas.height);

const state = {
  player: new Dino(),
  lastFrameTime: 0,
};

function update(dt) {
  state.player.update(dt)
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  state.player.render();
}

function next() {
  const currentTime = performance.now();
  const dt = (currentTime - state.lastFrameTime) / 2000;

  update(dt);
  render();

  state.lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

addEventListener("keypress", (event) => {
  if (event.key !== " ") {
    return;
  }

  state.player.jump();
});

next();
