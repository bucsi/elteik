let szoveg = "szoveg"
let szam = 123
let tort = 123.4
let logikai = true

console.log("jajj ez egy string", szam)
console.log("logikai erteke: " + logikai)
console.log(`A változók típusai és értékei: szoveg ${typeof szoveg} ${szoveg}\na szam ${typeof szam} ${szam}\na tortnek ${typeof tort} ${tort}\na logikainak ${typeof logikai} ${logikai}`) //AltGr + 7

let tomb = ["a", 123, false, ['i', 'ii', 'iii',{}]]
let tomb2 = [szoveg, szam, tort, logikai]

console.log(tomb)

for(let i=0; i<tomb.length; i++){

    console.log(`A tömb ${i}-ik eleme: ${tomb[i]}`)
}
//c++ for(auto e: array){...}

for(const elem of tomb){
    console.log(`A tömb egyik eleme: ${elem}`)
}

/**
 * Kiírja a paraméterként kapott szöveget
 * @param {String} elem 
 */
function kiiras(elem){
    console.log(elem)
}

const kiir = elem => console.log(elem)
const add = (a,b) => a+b
const tobbsoros = (param1, param2) => {
    //utasitas1
    //utasitas2
    return
}

tomb.forEach((elem)=>console.log(elem))
tomb.forEach(function (elem){
    console.log(elem)
})

let obj = {
    Bucsi: {
        kor: 24,
        szak: "tanár",
        tanit: true
    },
    Viktor: {
        kor: 24,
        szak: "proginf msc",
        tanit: false
    },
    "Áron": {
        kor: 21,
        szak: "proginf bsc",
        tanit: true
    }
}

for(const key in obj){
    console.log(obj[key])
}

const tömb = [ 2, 4, 7, 5, 1, 4, 4, 8, 9, 11 ]
const van = tömb.some(szam => szam % 10 === 0)
console.log(`${van} az, hogy van 10-zel osztható szám a tömbben.`)
const melyik = tömb.find(szam => szam % 3 === 0)
console.log(`A tömb ${melyik} értékű eleme osztható 3-mal, melynek helye: ${tömb.indexOf(melyik)}`)
const parosak = tömb.filter(szam => szam%2 === 0)
console.log(parosak)

const osszegzes = (elozoReturn, jelenErtek) => elozoReturn + jelenErtek
const megszamolas = (elozoReturn, jelenErtek) => jelenErtek % 2 === 1 ? elozoReturn+1 : elozoReturn

const szum = tömb.reduce(osszegzes)
console.log(`A tömb értékeinek összege: ${szum}`)
const paratlanDb = tömb.reduce(megszamolas, 0)
console.log(paratlanDb)