const ctx = document.querySelector("canvas").getContext("2d");

function random(a,b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

console.log(random(-10,10))

let tomb = []
for(let i=0; i<20;i++){
    tomb.push(random(-5,5))
}
console.log(tomb)

function render(){
    ctx.clearRect(0,0,210,210)
    ctx.beginPath()
    let x = 0;
    let y = 105
    for(const val of tomb){
        ctx.moveTo(x, y);
        x+=10;
        y = 105+val
        ctx.lineTo(x,y)
    }
    ctx.moveTo(x, y);
    ctx.lineTo(210, 105);
    ctx.strokeStyle = "grey"
    ctx.lineWidth = 3;
    ctx.closePath()
    ctx.stroke();
}

function onChange(){
    tomb = tomb.map(el=>el+random(-1,1))
    render()
}

document.querySelector("#btn-change").addEventListener("click", onChange)

render()

function update(dt){
    tomb = tomb.map(el=>el+(random(-1,1)*dt))
}

let lastFrameTime = performance.now()
function next(){
    let dt = (performance.now() - lastFrameTime)/10
    update(dt)
    render()
    lastFrameTime = performance.now()
    requestAnimationFrame(next)
}

document.querySelector("#btn-animation").addEventListener("click", ()=>{
    lastFrameTime = performance.now()
    next()
})

