console.log("Script betöltve és lefuttatva!")

// Progtételek javaScriptben

let tomb = [2, 4, 6, 10, 8, 7, -1, 0]

// Kiválasztás
function paratlan(x) {
    return x % 2 === 1
}

let eredmeny = tomb.find(x => x % 2 === 1)
console.log(eredmeny)

// Összegezzük az egész tömböt
tomb.reduce((eddigiOsszeg, aktualisErtek) => eddigiOsszeg + aktualisErtek)
tomb.reduce((s, x) => s + x)

// Eldöntés
// Van-e páratlan szám a tömbben?
let vanE = tomb.some(x => x % 2 === 1)
console.log(`${vanE} az, hogy van páratlan szám.`)

// Keresés
// keressük meg az első 9-nél nagyobb elem indexét
let index = tomb.findIndex(x => x > 9)
console.log(`A keresett tulajdonságú száma ${index} indexen van, értéke ${tomb[index]}.`)

// MinMax
console.log(`A számok közül a legnagyobb: ${Math.max(...tomb)}`)
console.log(`A számok közül a legkiseobb: ${Math.min(...tomb)}`)
