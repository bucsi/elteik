const animButton = document.querySelector('#animation');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const pixelsPerYear = 5;
let origoYear = 1000;
let dt = 0.2;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 1000; i <= 1500; i+=50) {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = '3px';
    ctx.beginPath();
    ctx.moveTo((i - origoYear) * pixelsPerYear, 0);
    ctx.lineTo((i - origoYear) * pixelsPerYear, canvas.height);
    ctx.stroke();
    ctx.fillText(i, (i - origoYear) * pixelsPerYear, 10)
  }

  arpads.forEach(k => {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'lightgreen';
    ctx.strokeRect((k.from - origoYear) * pixelsPerYear, 100, (k.to - k.from) * pixelsPerYear, 50);
    ctx.fillRect((k.from - origoYear) * pixelsPerYear, 100, (k.to - k.from) * pixelsPerYear, 50);

    ctx.fillStyle = 'black';
    ctx.fillText(k.name, (k.from - origoYear) * pixelsPerYear, 110);
    ctx.fillText(`${k.from}-${k.to}`, (k.from - origoYear) * pixelsPerYear, 130);
  });
  
  plantanegets.forEach(k => {
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'pink';
    ctx.strokeRect((k.from - origoYear) * pixelsPerYear, 200, (k.to - k.from) * pixelsPerYear, 50);
    ctx.fillRect((k.from - origoYear) * pixelsPerYear, 200, (k.to - k.from) * pixelsPerYear, 50);

    ctx.fillStyle = 'black';
    ctx.fillText(k.name, (k.from - origoYear) * pixelsPerYear, 210);
    ctx.fillText(`${k.from}-${k.to}`, (k.from - origoYear) * pixelsPerYear, 230);
  });
}
draw()

leftButton.addEventListener('click', function (e) {
  origoYear -= 10;
  draw()
});
rightButton.addEventListener('click', function (e) {
  origoYear += 10;
  draw()
});
animButton.addEventListener('click', function (e) {
  origoYear = 1000;
  dt = 0.2;
  animationLoop();
})
function animationLoop() {
  requestAnimationFrame(animationLoop)
  if (origoYear > 1400) {
    dt = -0.2;
  }
  else if (origoYear < 1000) {
    dt = 0.2;
  }
  origoYear += dt;
  draw();
}