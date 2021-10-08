const form = document.querySelector("form")
const csuszkaElem = document.querySelector("input[type=range]")

// http://127.0.0.1:5500/form.html?csuszka=50&szamMezo=10&sz

form.addEventListener("submit", e => {
    e.preventDefault()
    console.log(parseInt(form.csuszka.value))
    let szam = parseFloat(form.szamMezo.value)
    console.log(isNaN(szam) ? "A beírt érték nem értelmezhető számként." : "")
    console.log(szam)
    console.log(form.szoveg.value)
})
