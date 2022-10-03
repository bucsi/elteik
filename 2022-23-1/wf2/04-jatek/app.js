const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.transform(1, 0, 0, -1, 0, canvas.height);

const state = {
  player: new Dino(),
  lastFrameTime: 0,
};

function update(dt) {}

function render() {
  state.player.render();
}

function next() {
  const currentTime = performance.now();
  const dt = (state.lastFrameTime - currentTime) / 2000;

  update(dt);
  render();

  state.lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

addEventListener("keypress", (event) => {
  if (event.key !== " ") {
    return;
  }

  state.player.jump()
});

next();
