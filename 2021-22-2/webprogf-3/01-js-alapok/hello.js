let x = 3
let y = 3.12
let s = "szöveg"
let logikai = true
logikai = "igaz"

console.log("Hello")
const pi = 3.14
//pi = 2
console.log("World")

let tomb = [1,2,3]
console.log(tomb[5])
/*
1. inkább lista, mint C-szerű tömb
2. push() a végére, unshift() az elejére ad elemet
3. pop() a végéről, shift() az elejéről vesz el elemet
*/
tomb.push(4)

console.log(tomb)

tomb.push(true)
tomb.push("szia")
tomb.push("tilos")
tomb.push([10, 20, 30])

console.log(tomb)

for (let i=0; i<tomb.length; i++){
    // tripla = a jó, a dupla csak hasonlóságot vizsgál
    // !== a jó, a != csak "Nem hasonló"ságot vizsgál
    if(tomb[i]==="tilos"){
        console.log("Ezt tilos kiírni")
    }else{
        console.log(`A tömb ${i+1}-ik értéke: ${tomb[i]}`) //AltGr 7 backtick 
    }
}

//számlálóa ciklus helyett...
// c# forEach mintájára
for(let elem of tomb){
    console.log(elem)
}

/*
map, hashmap str->érték
dictionary
struct helyett
*/
let objektum = {
    kulcshoz: "érték",
    szam: 1,
    logikai: true,
    tomb: [1,2,3]
}

let ember = {
    nev: "bucsi",
    foglalkozas: "gyakvez",
    vanMacskaja: true
}

console.log(objektum)
console.log(objektum["logikai"])
console.log(ember.nev)

for(let kulcs in objektum){
    console.log(`${kulcs} -> ${objektum[kulcs]}`)
}

/**
 * Megszorozza a paraméterként kapott számot kettővel
 * @param {Number} param A duplázandó szám
 * @returns A szám megkétszerezve
 */
function megSzorozKettovel(param) {
    return param*2
}

let kettovelMegszorzoFgv = function (param){
    return param*2
}

//ES5 arrow function
let megduplazoFuggveny = (param) => {
    return param*2
}

let duplaz = param => param*2

//f(x) -> x*2

console.log(megSzorozKettovel)

let kettovelSzorzas = megSzorozKettovel

console.log(kettovelSzorzas(8))

let szamok = [10,20,30]
//[20,40,60]
console.log(szamok.map(elem => elem*2))

szamok.forEach(elem => console.log(elem))