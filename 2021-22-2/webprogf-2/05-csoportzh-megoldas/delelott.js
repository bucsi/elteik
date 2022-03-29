jeloltek = ["Hupilila Hedvig", "Nefritzöld Nándor", "Diplomatakék Dénes", "Kobaltviola Kálmán", "Dérfehér Daniella"]

alairasok = [503, 407, 666, 1005, 300]

// ==================== 1. feladat ====================

// Hány jelölt adott le aláírásokat összesen?
console.log(`${jeloltek.length} darab jelölt adott le aláírásokat.`)

// Az öt induló jelölt közül mindenki sikeres volt (500≤ aláírást adott le)?
console.log(`${alairasok.every(x => x >= 500)}, hogy mindenki sikeres volt.`)

// Mennyi volt a legtöbb leadott érvényes aláírás?
console.log(`${Math.max(...alairasok)} vot a legtöbb leadott aláírás.`)

// A jelenlegi listában hányadik jelölt az, aki a legtöbb aláírást adta le?
console.log(`a ${alairasok.findIndex(x => x === Math.max(...alairasok))}-ik jelölt adta le a legtöbb aláírást.`)

// Ha csak az 500≤ aláírást leadókat számolom, összesen hány aláírást adtak le?
console.log(`Csak az 500 feletti aláírásokat számolva, össszesen 
    ${alairasok.reduce((s, x) => (x > 500 ? s + x : s))} 
darab aláírást adtak le.`)

// Hupilila Hedvig adott le aláírásokat (szerepel a tömbben)?
console.log(
    `${jeloltek.find(x => x === "Hupilila Hedvig") !== undefined} az, hogy Hupilila Hedvig adott le aláírásokat.`
)
// vagy
console.log(`${jeloltek.includes("Hupilila Hedvig")} az, hogy Hupilila Hedvig adott le aláírásokat.`)

// ==================== 2. feladat ====================

const table = document.querySelector("table")

for (let i = 0; i < jeloltek.length; i++) {
    if (alairasok[i] >= 500) {
        const sor = document.createElement("tr")
        sor.innerHTML += `<td><input type="checkbox"/></td>` // lehetne createElement is
        const jeloltPart = document.createElement("td")
        jeloltPart.innerHTML = jeloltek[i].split(" ")[0] + " Párt"
        sor.appendChild(jeloltPart)
        const jeloltNev = document.createElement("td")
        jeloltNev.innerHTML = jeloltek[i]
        sor.appendChild(jeloltNev)
        table.appendChild(sor)
    }
}

// ==================== 3. feladat ====================

const check = document.querySelectorAll("input[type=checkbox]")
const sorok = document.querySelectorAll("tr")

check.forEach(c =>
    c.addEventListener("input", x => {
        sorok.forEach(s => s.classList.remove("szavazott"))
        check.forEach(c => (c.checked = false))
        c.parentElement.parentElement.classList.add("szavazott")
        c.checked = true
    })
)