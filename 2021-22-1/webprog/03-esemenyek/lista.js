const jeloltek = [
    "Vezér Viktor",
    "Szakács Szilárd",
    "Jogász Judit",
    "Nagycsaládos Katalin",
    "Európai Tamás"
]

const jeloltLista = document.querySelector("ul");

jeloltek.forEach(j => {
    const li = document.createElement("li");
    li.innerText = j;
    li.classList.add("jelolt");
    jeloltLista.appendChild(li);
})

/**
 *
 * @param {Node} szulo egy HTML elem querySelectorral kiválasztva (pl. `document.querySelector("ul")`)
 * @param {keyof HTMLElementTagNameMap} gyerek egy CSS szelektor, ami leírja azon elemeket, melyeken szeretnénk futtatni a fgv-t (pl. `"a"`)
 * @param {string} mikor egy esemény, stringként (pl. `"click"`)
 * @param {(ev: Event, target: Node) => null} mit A függvény, amit futtatunk
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

delegal(jeloltLista, ".jelolt", "click", handleClick)

function handleClick(esemeny, celpont){
    celpont.classList.toggle("bejutott")
}