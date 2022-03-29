const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// origo eltolása középre (a negyedek ugyanúgy furák maradnak, pl jobbra-le a +/+ negyed)
//ctx.translate(canvas.width / 2, canvas.height / 2)

// transzformáció,a -1-es vertikális skálázás miatt jobbra-le a +/- negyed lesz
ctx.transform(1, 0, 0, -1, canvas.width / 2, canvas.height / 2);


ctx.beginPath()
ctx.moveTo(0, 0)

ctx.lineTo(100, -100)
ctx.moveTo(100, -100)

ctx.lineTo(200, 200)
ctx.moveTo(200,200)

ctx.lineTo(200,-200)
ctx.moveTo(200,-200)

ctx.lineTo(-200,-200)
ctx.moveTo(-200,-200)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
//ctx.lineWidth = 15
ctx.strokeStyle="red"
ctx.fillStyle="green"
ctx.rect(-50,50,100,100)
ctx.fill()
ctx.stroke()
ctx.closePath()


ctx.beginPath()
ctx.strokeStyle="blue"
ctx.fillStyle="rebeccapurple"
ctx.fillRect(-200,100,100,100)
ctx.strokeRect(-100,100,100,100)
ctx.closePath()

ctx.beginPath()
ctx.arc(0,0,100,0,Math.PI, true)
ctx.lineTo(-100,-100)
ctx.stroke()
ctx.closePath()

