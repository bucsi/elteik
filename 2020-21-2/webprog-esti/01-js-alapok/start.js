let szam = 123
let szoveg = "asd"
let logikai = true

const konstans = 123

szam = 456

szoveg = 132

logikai = !logikai

konstans = 1234

console.log(`szam erteke: ${szam}, szoveg erteke: ${szoveg}, konst erteke: ${konstans}`)

/**
 * Összead két számot
 * @param {number} a
 * @param {number} b
 *
 * @returns a+b
 */
function osszead(a, b) {
    return a + b
}

const osszead_ = function (a, b) {
    return a + b
}

const osszead__ = (a, b) => {
    a + b
}

console.log(szoveg.toUpperCase())

console.log(osszead(1, 2))

const N = 5

for (let i = 0; i < N; i++) {
    console.log(i)
}

let tomb = [1, 2, 3, "asd"]

for (let i = 0; i < tomb.length; i++) {
    console.log(tomb[i])
}

for (const elem of tomb) {
    console.log(elem)
}

tomb.forEach(el => console.log(el))

let obj = {kulcs: "érték", "több szó": 123}
console.log(obj.kulcs)
for (const kulcs in obj) {
    console.log(obj[kulcs])
}
