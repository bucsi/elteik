// ------------------------------------------------ HTML elemek
const newGameBtn = document.querySelector("button")
const table = document.querySelector("table")

// ------------------------------------------------ Változók
let isSecondSelection = false
let kartyak = ["A", "A", "B", "B", "C", "C", "D", "D", "F", "F"]

// ------------------------------------------------ Közös függvények
/**
 * Aszinkron módon várakoztatja a programot
 * @param {Number} ms Hány milliszekundumot várjon a program
 */
function sleep(ms) {
    return new Promise(r => setTimeout(r, ms))
}

/**
 * Egy tömb elemeinek random megkeverése
 * (Fisher-Yates (vagy Knuth) algoritmus)
 * @param {Array} arr
 */
function shuffle(arr) {
    let veletlen
    let aktualis = arr.length
    while (aktualis !== 0) {
        veletlen = Math.floor(Math.random() * aktualis)
        aktualis--
        ;[arr[aktualis], arr[veletlen]] = [arr[veletlen], arr[aktualis]]
    }
    return arr
}

// ------------------------------------------------ Event listenerek
newGameBtn.addEventListener("click", () => {
    table.innerHTML = ""
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr")
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td")
            cell.innerHTML = "X"
            cell.dataset.kartya = kartyak.pop()
            cell.dataset.sorszam = i * j
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    const row = document.createElement("tr")
    const cell = document.createElement("td")
    cell.innerHTML = "X"
    cell.dataset.kartya = kartyak.pop()
    cell.dataset.sorszam = 99
    row.appendChild(cell)
    table.appendChild(row)
})

table.addEventListener("click", e => {
    if (!e.target.matches("td")) {
        return
    }
    e.target.classList.add("selected")
    if (!isSecondSelection) {
        isSecondSelection = true
    } else {
        match()
    }
})

// ------------------------------------------------ Business Logic
// --------------------------------------------- Match
async function match() {
    const kivalasztva = document.querySelectorAll(".selected")
    kivalasztva.forEach(el => (el.innerHTML = el.dataset.kartya))
    await sleep(1000)
    isSecondSelection = false
    if (kivalasztva[0].dataset.kartya === kivalasztva[1].dataset.kartya) {
        kivalasztva.forEach(el => {
            el.classList.remove("selected")
            el.classList.add("matched")
        })
    } else {
        kivalasztva.forEach(el => {
            el.classList.remove("selected")
            el.innerHTML = "X"
        })
    }
}

// ------------------------------------------------ main
for (let i = 0; i < 100; i++) {
    kartyak = shuffle(kartyak)
}
