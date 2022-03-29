let tomb = [2, 4, 5, 7, -9, 10, 0, -1]

function paratlan(x) {
    return x % 2 === 1
}

// kiválasztás
// válasszuk ki az első páratlan elemet!
for (let elem of tomb) {
    if (paratlan(elem)) {
        console.log(elem)
        break
    }
}

let eredmeny = tomb.find(x => x % 2 === 1)
console.log(eredmeny)

// keresés
// hol van az első páratlan elem?
let index = tomb.findIndex(x => x % 2 === 1)
console.log(`Az első páratalan a(z) ${index}-ik helyen van, értéke ${tomb[index]}.}`)

// eldöntés
// van-e 0-nál kisebb elem
let vanE = tomb.some(x => x < 0)
console.log(`${vanE} az, hogy van 0-nál kisebb elem.`)

// mindegyik nagyobb-e 10-nél
let mindegyikE = tomb.every(kiskutya => kiskutya > 10)
console.log(`${mindegyikE} az, hogy minden elem 10-nél nagyobb.`)

// kiválogatás
// vegyük ki csak a páros elemeket!
let csakParos = tomb.filter(szam => szam % 2 === 0)
console.log(csakParos)

// másolás
let tombMasolat = tomb.map(elem => elem)
console.log(tombMasolat)

// összegzés
tomb = [1, 4, 5, 7, -9, 10, 0, -1]

let osszeg = tomb.reduce((eddigiOsszeg, aktualisErtek) => eddigiOsszeg + aktualisErtek)
tomb.reduce((s, x) => s + x)
console.log(osszeg)


// ez csak extra
let fiuE = true
let gyerekNeve = ""
if (fiuE) {
    gyerekNeve = "Attila"
} else {
    gyerekNeve = "Csilla"
}

let gyerek_neve = fiuE ? "Attila" : "Csilla"

let parosokOsszege = tomb.reduce((s, x) => (x % 2 === 0 ? s + x : s),0)
console.log(parosokOsszege)
