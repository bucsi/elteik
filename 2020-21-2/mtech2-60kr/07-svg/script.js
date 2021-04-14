const body = document.querySelector("body")
const svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg")
svgElem.setAttributeNS(null, "viewBox", "0 0 300 100")
body.appendChild(svgElem)

const karika = document.createElementNS("http://www.w3.org/2000/svg", "circle")
karika.setAttributeNS(null, "cx", 50)
karika.setAttributeNS(null, "cy", 50)
karika.setAttributeNS(null, "r", 40)
karika.setAttributeNS(null, "fill", "blue")
svgElem.appendChild(karika)

function karikaAnimal() {
    let kezdoIdo = 0
    let progressKezdoIdo = 0
    let ismetlesekSzama = 0
    const osszIdo = 3000 //ms = 1s

    function animacioLepes(ido) {
        if (kezdoIdo === 0) {
            kezdoIdo = ido
        }
        const arany = (ido - kezdoIdo) / osszIdo
        //console.log(arany)
        karika.setAttributeNS(null, "cx", 50 + 200 * arany)
        //document.querySelector("progress").value = 100 * arany
        if (arany < 1) {
            window.requestAnimationFrame(animacioLepes)
        }
    }

    function progressbar(ido) {
        if (progressKezdoIdo === 0) {
            progressKezdoIdo = ido
        }
        const arany = (ido - progressKezdoIdo) / osszIdo
        document.querySelector("progress").value = 100 * arany
        if (arany < 1) {
            window.requestAnimationFrame(progressbar)
        }
    }

    window.requestAnimationFrame(progressbar)
    setTimeout(() => {
        window.requestAnimationFrame(animacioLepes)
    }, 3000)
    let id = setInterval(() => {
        karika.setAttributeNS(null, "cx", 50)
        kezdoIdo = 0
        window.requestAnimationFrame(animacioLepes)
        ismetlesekSzama++
        console.log(ismetlesekSzama)
        if (ismetlesekSzama === 5) {
            clearInterval(id)
        }
    }, 6000)
}

document.querySelector("button").addEventListener("click", karikaAnimal)
