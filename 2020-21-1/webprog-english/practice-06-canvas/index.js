const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,100);
ctx.lineTo(150,123);
ctx.lineTo(500,15);
ctx.closePath();
ctx.stroke();

ctx.moveTo(100,300)
ctx.beginPath();
ctx.arc(100, 300, 50, 0, 2*Math.PI)
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.font = "20px Comic Sans MS"
ctx.strokeText("Hello there", 130,270)
ctx.fillText("General Kenobi!", 130,320)

let image = new Image();
image.src = "./cat.png"

image.addEventListener('load', ()=>{
    //whole img
    //ctx.drawImage(image, 50,50, 200,200)

    //cutting parts out

    //ctx.drawImage(image, 120,250, 100,100, 300, 50, 100,100)

})

ctx.closePath();
ctx.beginPath();
ctx.clearRect(0,0,canvas.width,canvas.height)
ctx.closePath();

let firstClick = true;
let cx, cy;

/* canvas.addEventListener('click', (e) => {
    let offset = canvas.getBoundingClientRect();

    if(firstClick){
        cx = e.x - offset.x
        cy = e.y - offset.y
    
        ctx.moveTo(cx, cy)
        firstClick = false;
    }else{
        ctx.beginPath();

        ctx.moveTo(cx, cy)
        console.log(`previous click: ${[cx,cy]}`)

        cx = e.x - offset.x
        cy = e.y - offset.y
        ctx.lineTo(cx, cy)
        console.log(`this click: ${[cx, cy]}`)
        console.log(`stored "new" previous click: ${[cx,cy]}`)

        ctx.closePath();
        ctx.stroke();
    }

})*/

down = false;
canvas.addEventListener("mousedown", ()=>{
    down = true;
})

canvas.addEventListener("mouseup", ()=>{
    down = false
    firstClick = true
})

canvas.addEventListener("mouseleave", ()=>{
    down = false
    firstClick = true
})

canvas.addEventListener("mousemove", (e) =>{
    let offset = canvas.getBoundingClientRect();

    if(down){
        if(firstClick){
            cx = e.x - offset.x
            cy = e.y - offset.y
        
            ctx.moveTo(cx, cy)
            firstClick = false;
        }else{
            ctx.beginPath();

            ctx.moveTo(cx, cy)
            console.log(`previous ev: ${[cx,cy]}`)

            cx = e.x - offset.x
            cy = e.y - offset.y
            ctx.lineTo(cx, cy)
            console.log(`this ev: ${[cx, cy]}`)
            console.log(`stored "new" previous ev: ${[cx,cy]}`)

            ctx.closePath();
            ctx.stroke();
        }
    }
})

function printPrice(x, y, color, value){
    ctx.font = "10px sans-serif"
    ctx.fillStyle = color
    ctx.fillText(500-value, x,y)
}

function drawNextSegment(whichDiagram, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(whichDiagram.currentX, whichDiagram.currentY)

    whichDiagram.currentX += 10
    whichDiagram.currentY += whichDiagram.direction * 10
    ctx.lineTo(whichDiagram.currentX, whichDiagram.currentY)

    ctx.closePath();
    ctx.stroke();
    console.log(whichDiagram)
}

const step = 10

let bigmac = {
    currentY: 250,
    currentX: 0,
    direction: -1
}

let spotify = {
    currentY: 400,
    currentX: 0,
    direction: -1
}

document.querySelector("#bmp").addEventListener("click", () => {
    if(bigmac.direction !== -1){
        bigmac.direction = -1
        printPrice(bigmac.currentX, bigmac.currentY, "red", bigmac.currentY)
    }
    drawNextSegment(bigmac, "red")
})

document.querySelector("#bmm").addEventListener("click", () => {
    if(bigmac.direction !== 1){
        bigmac.direction = 1
        printPrice(bigmac.currentX, bigmac.currentY, "red", bigmac.currentY)
    }
    drawNextSegment(bigmac, "red")
})

document.querySelector("#sm").addEventListener("click", () => {
    if(spotify.direction !== 1){
        spotify.direction = 1
        printPrice(spotify.currentX, spotify.currentY, "green", spotify.currentY)
    }
    drawNextSegment(spotify, "green")
})


document.querySelector("#sp").addEventListener("click", () => {
    if(spotify.direction !== -1){
        spotify.direction = -1
        printPrice(spotify.currentX, spotify.currentY, "green", spotify.currentY)
    }
    drawNextSegment(spotify, "green")
})
