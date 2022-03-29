jeloltek = ["Hupilila Hedvig", "Nefritzöld Nándor", "Diplomatakék Dénes", "Kobaltviola Kálmán", "Dérfehér Daniella"]

alairasok = [503, 407, 666, 1005, 300]

// ==================== 1. feladat ====================

// Csúszott hiba az adatokba, vagy tényleg tartozik minden jelölthöz aláírásszám is (egyforma hosszúak a tömbök)?
console.log(`${jeloltek.length !== alairasok.length} az, hogy csúszott hiba az adatokba.`)

// Az öt induló jelölt volt olyan, aki nem adott le elég (500≤) aláírást?
console.log(`${alairasok.some(x => x >= 500)}, hogy volt sikertelen induló.`)

// Mennyi volt a legkevesebb leadott aláírás?
console.log(`${Math.min(...alairasok)} vot a legtöbb leadott aláírás.`)

// Mi a neve annak a jelöltnek, aki a legkevesebb aláírást adta le?
console.log(`${jeloltek[alairasok.findIndex(x => x === Math.max(...alairasok))]} adta le a legkevesebb aláírást.`)

// Hány jelölt adott le elég (500≤) aláírást?
console.log(`${alairasok.reduce((s, x) => (x >= 500 ? s + 1 : s), 0)} jelölt adott le elég aláírást.`)

// Írd ki a jelöltek neveit (tartalmazó tömböt) betűrendben!
console.log(jeloltek.sort())

// ==================== 2. feladat ====================

const dl = document.createElement("dl")
document.body.appendChild(dl)
for (let i = 0; i < jeloltek.length; i++) {
    const dt = document.createElement("dt")
    dt.innerText = jeloltek[i]
    if (alairasok[i] >= 500) {
        dt.classList.add("bejutott")
    }
    dl.appendChild(dt)
    const dd = document.createElement("dd")
    dd.innerText = alairasok[i]
    dl.appendChild(dd)
}

// ==================== 3. feladat ====================

const check = document.querySelectorAll("input[type=checkbox]")
const sorok = document.querySelectorAll("tr")
let szavazott = false
check.forEach(c =>
    c.addEventListener("input", x => {
        if (!szavazott) {
            c.parentElement.parentElement.classList.add("szavazott")
            szavazott = true;
            const nev = c.parentElement.nextElementSibling.nextElementSibling.innerText
            alert(`Sikeres szavzás! Választott jelölt: ${nev} (${nev.split(" ")[0]} Párt)`)
        }else{
            c.checked = false;
        }
    })
)
