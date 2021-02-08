/**
 * Előállít egy random számot az [a,b] intervallumban
 * @param {number} a alsó határ
 * @param {number} b felső határ
 */
const randBtwn = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)

let lista = []
for (let i = 0; i < 10; i++) {
    lista.push(randBtwn(-2, 10))
}

console.log(lista)

// Eldöntés.
// Van-e negatív szám a listában
console.log(
    lista.some(el => el < 0) ? "Van negatív szám a listában" : "Nincs negatív szám a listában"
)
console.log(lista.every(el => el >= 0) ? "Minden szám pozitív" : "Van legalább egy negatív.")

//Keresés: egy páros szám a listából
console.log(lista.find(el => el % 2 === 0))

//Map
//Minden számot szorozz meg 2-vel
console.log(lista.map(el => el * 2))

//Filter
//Gyűjtsd ki a 2-vel osztható számokat
console.log(lista.filter(el => el % 2 === 0))

//Reduce
//Összegzés
console.log(lista.reduce((s, el) => s + el, 0))
