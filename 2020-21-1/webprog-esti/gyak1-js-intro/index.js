/**======================================= *
 * Webprogramozás - esti #3-mas csoport    *
 * First practice (2020. september 08.)    *
 *======================================= */

/** Javascript alapok
    * a nyelv tulajdonságai:
        * interpretált
            * a böngészőben fut, így cross-platform (ami a Javának a VM, az nekünk a böngésző)
    * gyengén típusos
    * dinamikusan típusos
    * multiparadigma
    * hivatalos név: ECMAScript
 */ 


//* Alap típúsok, változók


let egySzam = 123
let egyTort = 0.69
expectedReturn("typeof(egySzam)", "number") //assert()-szerű függvény az ellenőrzéshez, az első paramétert futtatja
expectedReturn("typeof(egyTort)", "number")

let egySzoveg = "Hello there" 
expectedReturn("typeof(egySzoveg)", "string")

let logikaiErtek = true
expectedReturn("typeof(logikaiErtek)", "boolean")

//* NOTE: nem kell pontosbessző ; a sorok végére

let ures; //itt kitettem a pontosvesszőt emlékeztetőül, hogy valóban befejeztem a kódsort
expectedReturn("typeof(ures)","undefined")



const fenysebesseg = 299792458 // m/s
// konstans érték, nem változtatható meg



//! NE HASZNÁLD
var regiValtozo = "ezt ne csináld"
//! RÉGI TUTORIALOKBAN TALÁLKOZHATSZ VELE. NEM KÖTI SCOPE-HOZ A VÁLTOZÓT, ÍGY RENGETEG PROBLÉMÁT OKOZHAT, FŐLEG LOOPOK KÖRNYÉKÉN


//* Tömbök
let a = [1,2,3,4,5,6,7,8,9,10]
expectedReturn("typeof(a)", "array")
//! A komplex adatszerkezetek típusa futás közben object
expectedReturn("typeof(a)", "object")

// a változók elérése hagyományos tömbös-listás jelöléssel történik
expectedReturn("a[0]", 1)


// bármilyen típusú értékekkel feltölthető

let b = [0, "asd", true, [1,2,[3,3]]]

expectedReturn("typeof(b[1])", "string")
expectedReturn("typeof(b[2])", "boolean")
expectedReturn("typeof(b[3])", "object")


//* Tömbös feladatok

// Feladat: van 2-nél kisebb szám a tömbben? (ELDÖNTÉS tétel)
// hagyományos megoldás
for(let i=0; i<a.length; i++){
    if(a[i] < 2){
        console.log("2-nél kisebb ezen az indexen: " + i)
        break; // ne tartson a találtatnál tovább a ciklus
    }
}

// A javascript-mód
// segédfüggvény deklarálása (figyeld meg a függvények szintaxisát)

function isLessThanTwo(num){
    if(num < 2){
        return true;
    }else{
        return false;
    }
}

// TÖMBFÜGGVÉNY meghívása a segédfügvénnyel, mint paraméter
console.log("array has numbers less than 2: " + a.some(isLessThanTwo))
console.log("every num in array is less than 2: " + a.every(isLessThanTwo))



// Mégegy TÖMBFÜGGVÉNY: map - minden elemre végrehajt valamit
// Feladat: minden szám kétszeresét kiírni az a tömbből

// figyeld meg a függvénydeklarálást funkcionális stílusban
let doubler = (n) => n*2
console.log(a.map(doubler))

// Filter TÖMBFÜGGVÉNY
// Feladat: gyűjtsd ki a páros számokat a tömbből

// figyeld meg, hogy a funkcionális stílusú függvény közvetlenül paraméter is lehet
// így ún. anonymus függvényt készítünk
console.log(a.filter(   (x) => x % 2 === 0   ))

// reduce: egy változóba összesítés
// Feladat: adjuk össze az értékeket

console.log(a.reduce(   (osszesito, x) => osszesito + x   ))


//* Egyéni objektum / rekord típus
// kulcs - érték párok, mint egy C struct vagy python dict
// a kulcsok stringek alapból, nem kell "" jelölés
// mint a tömb, bármilyen értékeket tárolhat

teacher = {
    name: "Bucsi",
    age: 23,
    fav_subjects: ["web-dev1", "webprog"],
    pet: {
        species: "cat",
        name: "Amy",
        color: ["gray", "white", "red"],
        numOfLegs: 4  
    }
}


students = [
    {
        name: "John",
        favorite: "hamburgers"
    },
    {
        name: "Ashley",
        favorite: "beer"
    },
    {
        name: "Travis",
        favorite: "banana smoothie"
    },
    {
        name: "Laura",
        favorite: "ice cream"
    }
]

// Feladat: Ciklus a tanulókon át, és mindegyikre kiírni: `|student.name|'s favorite to |eat/drink| is |student.favorite|`


for(s of students){
    console.log(`${s.name}'s favorite to ${edibleOrNot(s.favorite)} is ${s.favorite}`)
}

function edibleOrNot(p){
    if(["beer", "banana smoothie"].includes(p)){
        return "drink"
    }else{
        return "eat"
    }
}