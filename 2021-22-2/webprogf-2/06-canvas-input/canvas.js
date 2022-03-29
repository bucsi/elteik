const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
/*

ctx.beginPath()

ctx.moveTo(250,250)

ctx.lineTo(250,0)
ctx.moveTo(250,0)

ctx.lineTo(100,100)
ctx.moveTo(100,100)

ctx.lineTo(150,250)

ctx.closePath()
ctx.stroke()

*/



//eltolom a 0,0 origót középre
//ctx.translate(canvas.width/2,canvas.height/2)

//transzformálom a canvast közép origóra (eltolom a magasság és szélesség felével), valamint megtükrözöm, hogy jobbra-fel legyen a +/+ negyede
ctx.transform(1, 0, 0, -1, canvas.width/2, canvas.height/2)

ctx.beginPath();
ctx.strokeStyle = "red" // CSS színek
ctx.moveTo(100, 100);
ctx.lineTo(0, 200);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue"
ctx.moveTo(100, 100);
ctx.lineTo(200, 0);
ctx.closePath()
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle = "orange"
ctx.moveTo(100, 100);
ctx.lineTo(0, 0);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green"
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "black"
ctx.fillStyle = "black"
ctx.strokeRect(50,50,100,25)
ctx.fillRect(50,150,100,25)
ctx.closePath()


ctx.beginPath()
ctx.moveTo(100,100)
ctx.lineTo(0,100)
ctx.closePath()
ctx.stroke()


/*
let venus = {
    angle: 0,
    speed: 13,
    radius: 150
  }

  let earth = {
    angle: 0,
    speed: 8,
    radius: 200
  }

  function koordinataSzamol(szog, sugar){
    let x = sugar * Math.cos(szog)
    let y = sugar * Math.sin(szog)
    return { x, y }
  }
  

  ctx.fillStyle = "black"
  ctx.rect(0,0,500,500)
  ctx.fill()

  ctx.translate(250,250)
  ctx.fillStyle = "yellow"
  ctx.beginPath()
  ctx.arc(0,0, 10, 0, 2*Math.PI)
  ctx.fill()

  ctx.strokeStyle = "white"
  for(let i=0; i<500; i++){
    ctx.beginPath()
    //1. odamegyek, ahol a Vénusz van
    let venusKoord = koordinataSzamol(venus.angle, venus.radius)
    ctx.moveTo(venusKoord.x, venusKoord.y)

    //2. vonalhúzás a Földhöz
    let earthKoord = koordinataSzamol(earth.angle, earth.radius)
    ctx.lineTo(earthKoord.x, earthKoord.y)
    ctx.stroke()

    venus.angle += venus.speed
    earth.angle += earth.speed
  }*/