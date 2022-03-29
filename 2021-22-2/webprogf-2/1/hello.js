let x = 3
let y = 3.12
let s = "szöveg"
let logikai = true
logikai = "igaz"

const pi = 3.14
console.log("Hello")
//pi = 3
console.log("World")

let tomb = [1, 2, 3]
tomb.push(4)

/* tömb koncepció: 
1. listaként működik (bővíthető)
2. pop, push fgv: verem
3. shift, unshift: sor
*/

tomb.push(true)
tomb.push("szia")
tomb.push("tilos")
tomb.push(["i", "ii", "iii"])
console.log(tomb)

for (let i = 0; i < tomb.length; i++) {
    // dupla == hasonlóságot vizsgál, tripla === egyenlőséget!
    // sima != "Nem hasonló"ságot vizsgál, a dupla !== a jó!
    if (tomb[i] === "tilos") {
        // általában tömb n-edik elemét így értem el: tomb[n];
        console.log("Ez nem tudom, melyik elem")
    } else {
        console.log(`A tömb ${i + 1}-ik értéke: ${tomb[i]}`) //altGr + 7 backtick}
    }
}

// más nyelv ForEach ciklusa itt: for ... of
for(let elem of tomb){
    console.log(elem)
}

/*
más nyelvekben: map str->érték
dictionary
struct helyett
*/
let objektum = {
    kulcshoz: "értéket rendel",
    szam: 1,
    logikai: true,
    tomb: [1,2,3]
}

console.log(objektum)
console.log(objektum["kulcshoz"])
console.log(objektum.kulcshoz)

for(let kulcs in objektum){
    console.log(`${kulcs} => ${objektum[kulcs]}`)
}

/**
 * Egy szám dupláját adja vissza.
 * @param {Number} param a duplűzandó szám
 * @returns a szám kétszerese
 */
function megSzorozKettovel(param){
    return param*2
}

let duplazo2 = function (param){
    return param*2
}

// ES5
let duplazoArrowFn = (param) => {
    return param*2
}

let duplazo = param => param*2


console.log(megSzorozKettovel)

let duplazoFgv = megSzorozKettovel

console.log(duplazoFgv(8))

let szamok = [1,2,3,4]
//eredmény: [2,4,6,8]

szamok.forEach(elem => console.log(duplazo(elem)))

console.log(szamok.map(duplazo))