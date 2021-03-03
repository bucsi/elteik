const cimsor = document.querySelector("h1")

function $(selector) {
    return document.querySelector(selector)
}

/**
 *
 * @param {MouseEvent} event
 */
function valami(event) {
    event.target.innerHTML += "A"
}

cimsor.addEventListener("click", valami)

$("h1").addEventListener("mouseenter", ev => {
    ev.target.innerHTML += "B"
})

// $("table").addEventListener("click", ev => {
//     if (ev.target.matches("td")) {
//         ev.target.innerHTML = parseInt(ev.target.innerHTML) + 1
//     }
// })

// document.querySelectorAll("td").forEach(el =>
//     el.addEventListener("click", ev => {
//         ev.target.innerHTML = parseInt(ev.target.innerHTML) + 1
//     })
// )

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

delegal($("table"), "td", "click", (ev, ez) => {
    ez.innerHTML = parseInt(ez.innerHTML) + 1
})
