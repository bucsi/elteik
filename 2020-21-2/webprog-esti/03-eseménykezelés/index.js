const $ = string => document.querySelector(string)

const h1 = $("h1")

/**
 *
 * @param {Event} ev
 */
function esemenyKezelo(ev) {
    console.log("Ez az esemény többször nem fog futni.")
    //ev.target.removeEventListener("mouseenter", esemenyKezelo)
}

/**
 *
 * @param {Event} ev
 */
function linkKatt(ev) {
    if (ev.shiftKey) {
        return
    }
    ev.preventDefault()
    console.log(ev.target.href)
}

h1.addEventListener("mouseenter", esemenyKezelo, {once: true})

// document
//     .querySelectorAll("a")
//     .forEach(e => e.addEventListener("click", linkKatt))

// $("ul").addEventListener("click", function (ev) {
//     ev.preventDefault()
//     console.log(ev.target.href)
// })

/**
 *
 * @param {Node} szulo egy HTML elem querySelectorral kiválasztva (pl. `document.querySelector("ul")`)
 * @param {string} gyerek egy CSS szelektor, ami leírja azon elemeket, melyeken szeretnénk futtatni a fgv-t (pl. `"a"`)
 * @param {string} mikor egy esemény, stringként (pl. `"click"`)
 * @param {(ev: Event, target: Node) => void} mit A függvény, amit futtatunk
 */
function delegal(szulo, gyerek, mikor, mit) {
    function esemenyKezelo(ev) {
        const esemenyCelja = ev.target
        const esemenyKezeloje = this
        const legkozelebbiKeresettElem = esemenyCelja.closest(gyerek)

        if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
            mit(ev, legkozelebbiKeresettElem)
        }
    }

    szulo.addEventListener(mikor, esemenyKezelo)
}

delegal($("ul"), "a", "click", function (ev, cel) {
    ev.preventDefault()
    console.log(cel)
})
