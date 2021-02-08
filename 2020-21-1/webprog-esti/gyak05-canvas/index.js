const vaszon = document.querySelector("canvas")
const ecset = vaszon.getContext("2d")
//let ctx  

ecset.moveTo(0,0);
ecset.lineTo(300,100);
ecset.lineTo(150,123);
ecset.lineTo(500, 15);
ecset.stroke();


ecset.moveTo(100,300);
ecset.beginPath();
ecset.arc(100,300,50,0,2*Math.PI)
ecset.closePath();
ecset.stroke();

ecset.font = "20px Comic Sans MS";
ecset.strokeText("Hello there", 130,270)

ecset.fillText("General Kenobi", 130,350)

let kep = new Image()
kep.src = "./ms-paint.jpg"

kep.addEventListener('load', ()=>{
    //                  kezdopoz, meret
    //ecset.drawImage(kep, 50,50, 300,200)
})


ecset.clearRect(0,0,500,500) // letöröljük

let fig = new Image();
fig.src = "./figura.png"

fig.addEventListener('load', ()=>{
    //                   kivagas,  kezdopoz, meret
    ecset.drawImage(fig, 0,0,50,50, 200,200, 50,50)
})

document.addEventListener("keydown", (esemeny) => {
    ecset.clearRect(0,0,500,500)
    if(esemeny.key == '1'){
        ecset.drawImage(fig, 0,0,50,50, 200,200, 50,50)
    }
    if(esemeny.key == '2'){
        ecset.drawImage(fig, 49,0,50,50, 200,200, 50,50)
    }
    if(esemeny.key == '3'){
        ecset.drawImage(fig, 98 ,0,52,50, 200,200, 50,50)
    }
})
