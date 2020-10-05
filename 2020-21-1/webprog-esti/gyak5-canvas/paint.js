let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d");  //ecset
let vonal = true;
let ceruza = false;

document.querySelector("#line").addEventListener("click", (e) => {
    vonal = !vonal;
    e.target.classList.toggle("aktiv")
})
elozo = {
    x: 0,
    y: 0,
    elso: false
}
canvas.addEventListener("click", (e)=>{
    if(vonal){
        let eltolas = canvas.getBoundingClientRect()
        
        if(elozo.elso){
            ctx.beginPath();
            ctx.moveTo(elozo.x, elozo.y);
            ctx.lineTo(e.x - eltolas.x, e.y, eltolas.y)
            elozo.x = e.x - eltolas.x
            elozo.y = e.y, eltolas.y
            ctx.closePath()
            ctx.stroke()
        }else{
            elozo.x = e.x - eltolas.x
            elozo.y = e.y - eltolas.y
            elozo.elso = true;
        }
    }
})

document.querySelector("#pencil").addEventListener("click", (e) => {
    ceruza = !ceruza;
    e.target.classList.toggle("aktiv")
})
elozoM = {
    x: 0,
    y: 0,
    elso: false
}
lenyomva = false;
canvas.addEventListener("mousemove", (e)=>{
    if(ceruza && lenyomva){
        let eltolas = canvas.getBoundingClientRect()
        if(elozoM.elso){
            ctx.beginPath();
            ctx.moveTo(elozoM.x, elozoM.y);
            ctx.lineTo(e.x - eltolas.x, e.y, eltolas.y)
            elozoM.x = e.x - eltolas.x
            elozoM.y = e.y, eltolas.y
            ctx.closePath()
            ctx.stroke()
        }else{
            elozoM.x = e.x - eltolas.x
            elozoM.y = e.y - eltolas.y
            elozoM.elso = true;
        }
    }
})

canvas.addEventListener("mousedown", ()=>{
    lenyomva = true;
})
canvas.addEventListener("mouseup", ()=>{
    lenyomva = false;
    elozoM.elso = false;
})
canvas.addEventListener("mouseleave", ()=>{
    lenyomva = false;
    elozoM.elso = false;
    elozo.elso = false;
})




/**
 * Egy függvény, hogy egy "nagy" eseménykezelőn szülőnek delegáljuk a gyerek elemek eseményinek kezelését
 * @param {Node} szulo Egy HTML elem (querySelectorral kiválasztva)
 * @param {string} gyerek Egy CSS selector (stringként), ami leírja azon gyerek elemeket, akiken figyelni akarjuk az eseményt (pl. `".gomb"`)
 * @param {string} mikor Egy esemény stringként, amikor futtatni szeretnénk a kezelő függvényt (pl. `"click"`)
 * @param {(ev: Event,target: Node) => void} mit A függvény, ami fut az eseményre (paraméterként megkapja az eseményt, és a `legkozelebbiKeresettELem`-et)
 */
function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo);
}

delegal(document, ".color", "click", (e, target)=>{
    ctx.strokeStyle = target.dataset.color;
})
