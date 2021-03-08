import {state} from "./state.js"
import {form, div, startBtn, idomero} from "./layout.js"
import {randBtw} from "./helpers.js"

const szavak = [
    "alma",
    "körte",
    "cseresznye",
    "banán",
    "ananász",
    "dió",
    "répa",
    "barack",
    "szilva",
]

// ==================================== Event listeners

form.addEventListener("submit", e => {
    e.preventDefault()
    tipp(form.tipp.value, state)
})

startBtn.addEventListener("click", () => {
    init(state)
})

// ====================================== Game logic
function tipp(betu, state) {
    let szo = state.gondoltam
    let eredm = ""
    for (let i = 0; i < szo.length; i++) {
        if (betu === szo[i]) {
            eredm += szo[i]
        } else {
            eredm += state.megoldas[i]
        }
    }
    state.megoldas = eredm
    form.megoldas.value = state.megoldas
    form.tipp.value = ""

    if (state.megoldas.indexOf("_") === -1) {
        ellenoriz(state)
    }
}

function ellenoriz(state) {
    if (state.megoldas === state.gondoltam) {
        let ido = (Date.now() - state.startIdo) / 1000
        alert("Nyertél!, A megoldást " + ido + " másodperc alatt találtad ki.")
        clearInterval(state.stopper)
    } else {
        console.log("Valami nem stimmel...")
    }
}

function tikktakk() {
    let ido = parseInt(idomero.innerHTML.split("s")[0])
    ido += 1
    idomero.innerHTML = ido + "s óta játszol."
}

function init(state) {
    div.hidden = true
    form.hidden = false
    state.startIdo = Date.now()
    console.log(state.startIdo)
    state.gondoltam = szavak[randBtw(0, szavak.length)]
    for (const b of state.gondoltam) {
        state.megoldas += "_"
    }
    form.megoldas.value = state.megoldas
    idomero.innerHTML = "0s óta játszol."
    state.stopper = setInterval(tikktakk, 1000)
}
