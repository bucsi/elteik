/**
 * @param {Node} szulo egy HTML elem querySelectorral kiválasztva (pl. `document.querySelector("ul")`)
 * @param {string} gyerek egy CSS szelektor, ami leírja azon elemeket, melyeken szeretnénk futtatni a fgv-t (pl. `"a"`)
 * @param {string} mikor egy esemény, stringként (pl. `"click"`)
 * @param {(ev: Event, target: Node) => void} mit A függvény, amit futtatunk
 */
function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezeles(ev) {
        const esemenyCelja = ev.target
        const esemenyKezeloje = this
        const legkozelebbiKeresettElem = esemenyCelja.closest(gyerek)

        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
            mit(ev, legkozelebbiKeresettElem)
        }
    }

    szulo.addEventListener(mikor, esemenyKezeles)
}

delegal(document.querySelector("table"), "td", "click", (ev, target) => {
    if (ev.altKey) {
        Array.from(target.parentElement.children).forEach(td => {
            td.style.backgroundColor = target.dataset.color
            td.dataset.szinezett = true
        })
    } else {
        if (target.dataset.szinezett === "true") {
            target.style.backgroundColor = "white"
            target.dataset.szinezett = false
        } else {
            target.style.backgroundColor = target.dataset.color
            target.dataset.szinezett = true
        }
    }
})
