let szam = 123
let szoveg = "asd"
let logikai = true

console.log(szam)
console.log(szoveg)
console.log(logikai)

szam = "100000"
szoveg = 3.14
console.log(`a szam valtozo erteke: ${szoveg}`)

if ("0" === 0) {
    console.log("Ez szokatlan...")
} else {
    console.log("minden rendben")
}

if (logikai) console.log("igaz volt")

console.log(0 > 1 ? "igaz volt" : "hamis volt")

let szamlalo = 0
while (szamlalo < 5) {
    console.log(`${szamlalo}-ik ismétlés`)

    szamlalo++
}

let lista = [10, 20, 30, 40, 50, "asd"]

for (let i = 0; i < lista.length; i++) {
    console.log(`${i}-ik elem értéke: ${lista[i]}`)
    lista[i] = lista[i] / 10
}

for (const elem of lista) {
    console.log(`következő elem értéke: ${elem}`)
}

lista.forEach(elem => console.log(elem))

const pi = 3.14
console.log(`A pi értéke: ${pi}`)

function osszead(a, b) {
    return a + b
}
console.log(`3 + 4 eredménye: ${osszead(3, 4)}`)

const szoroz = function (a, b) {
    return a * b
}
console.log(`3 * 4 eredménye: ${szoroz(3, 4)}`)

const oszt = (a, b) => {
    return a / b
}

console.log(`8 / 4 eredménye: ${oszt(8, 4)}`)

// Arrow function
const hatvanyoz = (alap, kitevő) => Math.pow(alap, kitevő)

console.log(`2 a 3-adikon eredménye: ${hatvanyoz(2, 3)}`)

homerseklet = [0, -2, 3, 5, 4]
volt = false
for (let i = 0; i < homerseklet.length; i++) {
    if (homerseklet[i] < 0) {
        volt = true
    }
}

console.log(volt ? "Volt fagypont alatti nap" : "Nem volt fagypont alatti nap")

console.log(
    homerseklet.some(szam => szam < 0) ? "Volt fagypont alatti nap" : "Nem volt fagypont alatti nap"
)

console.log(
    homerseklet.every(szam => szam % 2 === 0)
        ? "Minden hőmérséklet páros volt"
        : "Legalább egy hőmérséklet páratlan volt"
)

//map, filter, reduce

let szamok = [-100, -2, -1, 0, 1, 2, 3]

//map: Tömb -> Tömb
// minden értékből másikat képez
let szamok10 = szamok.map(szam => szam * 10)
console.log(szamok)
console.log(szamok10)

//filter: Tömb -> Tömb
//csak a feltételnek megfelelő számokat hagy benne
let nemnegativ = szamok.filter(szam => szam >= 0)
console.log(nemnegativ)

//reduce: Tömb -> egy érték
//összegzés
let osszeg = szamok.reduce((s, szam) => s + szam)
console.log(osszeg)

let obj = {kulcs: "érték", szam: 123, logikai: true, "több szavas kulcs": NaN}

console.log(obj.kulcs)

for (const k in obj) {
    console.log(`${k} kulcs értéke: ${obj[k]}`)
}
