const lista = document.querySelector("ul")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let ujLi = document.createElement("li")
    ujLi.innerHTML = "Feladat"
    lista.appendChild(ujLi)
})

/*let listaelemek = document.querySelectorAll("li")
listaelemek.forEach(li => {
    li.addEventListener("click", handleLiClick)
})*/

const listaContainer =  document.querySelector("ul")

function handleLiClick(ev) {
    //this.classList.toggle("done")
}

listaContainer.addEventListener("click", ()=>{
    console.log(this)
    console.log(ev.target)
    if(ev.target.matches("li")){
        ev.target.classList.toggle("done")
    }
})

function handleLiClick2(esemeny, celpont) {
    console.log(esemeny)
    console.log(celpont)
    celpont.classList.toggle("done")
}

delegal(listaContainer, "li", "click", handleLiClick2)

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
