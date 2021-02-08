const table = document.querySelector("table")
const startBtn = document.querySelector("#start");
const aside = document.querySelector("aside");
const jatek = document.querySelector("section");

let kijeloltElemek = []

/**
 * Return a random integer in the [a,b] interval
 * @param {number} a 
 * @param {number} b 
 */
function randBtw(a,b){
    return Math.floor(Math.random() * b) + a
}
/**
 * Ovis összeadás: a 2+2-ből "22"-t csinál
 * @param {number} a 
 * @param {number} b 
 */
function strcat(a,b){
    return ''+a+b
}



function generateTable(){
    for(let i=0; i<3; i++){
        const tr = document.createElement("tr");
        for(let j=0; j<4; j++){
            const td = document.createElement("td")
            const img = document.createElement("img")
            const szam = strcat(randBtw(1,9), randBtw(0,9))
            td.dataset["szam"] = szam
            img.src = `https://placekitten.com/${szam}0/${szam}0`
            td.appendChild(img)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}

function egyformakKijelol(){
    let zsak = new MultiHalmaz();
    for(row of table.rows){
        console.log(row)
        for(cell of row.cells){
            zsak.add(cell.dataset.szam)
        }
    }
    for(row of table.rows){
        console.log(row)
        for(cell of row.cells){
            if(zsak.multiple().includes(cell.dataset.szam)){
                cell.classList.add("tobbszor")
            }
        }
    }

}

startBtn.addEventListener("click", ()=>{
    aside.classList.add("rejtett");
    jatek.classList.remove("rejtett");
})

function kijelol(event, target){
    target.classList.toggle("kijelolve")

    kijeloltElemek = document.querySelectorAll(".kijelolve")

    if(kijeloltElemek.length === 4){
        kijeloltElemek.forEach(elem => {
            const szam = strcat(randBtw(1,9), randBtw(0,9))
            elem.dataset["szam"] = szam
            elem.querySelector("img").src = `https://placekitten.com/${szam}0/${szam}0`
            elem.classList.toggle("kijelolve")
            elem.classList.remove("tobbszor")
        })
    }
}
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

delegal(table, "td", "click", kijelol)

generateTable();


