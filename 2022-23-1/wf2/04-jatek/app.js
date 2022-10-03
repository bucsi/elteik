const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2);
const state = {
  player: new Dino(),
  lastFrameTime: 0,
};

function update(dt) {}

function render() {
  state.player.render()
}

function next() {
  const currentTime = performance.now();
  const dt = (state.lastFrameTime - currentTime) / 2000;

  update(dt);
  render();

  state.lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

next();
