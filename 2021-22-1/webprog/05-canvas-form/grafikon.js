const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const form = document.querySelector("form")
const kekCsuszka = form.kek
const lilaCsuszka = form.lila
const animBtn = document.querySelector("button")
canvas.width = 70
canvas.height = 120
ctx.translate(0, 120)

kekCsuszka.addEventListener("input", e => {
    const kek = parseInt(kekCsuszka.value)
    const lila = 100 - kek
    lilaCsuszka.value = lila
    grafikon(kek, lila)
})

lilaCsuszka.addEventListener("input", e => {
    const lila = parseInt(lilaCsuszka.value)
    const kek = 100 - lila
    kekCsuszka.value = kek
    grafikon(kek, lila)
})

/**
 * @param {Number} kek Egy 0-100 közötti szám, a kék politikus %-os eredménye
 * @param {Number} lila Egy 0-100 közötti szám, a lila politikus %-os eredménye
 */
function grafikon(kek, lila) {
    console.log(kek, lila)

    ctx.clearRect(0, 0, canvas.width, -canvas.height)

    ctx.fillStyle = "blue"
    ctx.fillRect(10, 0, 20, -kek)

    ctx.fillStyle = "purple"
    ctx.fillRect(40, 0, 20, -lila)
}

animBtn.addEventListener("click", e => {
    kekCsuszka.disabled = true
    lilaCsuszka.disabled = true

    animalas()
})

const veletlenKozott = (alja, teteje) => Math.floor(Math.random() * (teteje - alja + 1) + alja)

function animalas() {
    const valtozas = veletlenKozott(-1, 1)
    const kek = parseInt(kekCsuszka.value) + valtozas
    const lila = 100 - kek
    kekCsuszka.value = kek
    lilaCsuszka.value = lila

    grafikon(kek, lila)
    requestAnimationFrame(animalas)
}
