function $(string) {
    return document.querySelector(string)
}

console.log("A címsor tartalma szerintem: " + $("h1").innerHTML)

const adatok = {
    Budapest: [10, 2, 4, 5],
    Miskolc: [0, 3, 10, 2],
    Pecs: [2, 3, 4, 5],
}

let tabla = document.createElement("table")
let fejlec = document.createElement("tr")
let balFelso = document.createElement("th")
balFelso.innerHTML = "Város/<br>Madárfaj"
fejlec.appendChild(balFelso)

for (let i = 0; i < adatok["Budapest"].length; i++) {
    let fejlecCella = document.createElement("th")
    fejlecCella.innerHTML = `${i + 1}. faj`
    fejlec.appendChild(fejlecCella)
}

tabla.appendChild(fejlec)

for (const varos in adatok) {
    let sor = document.createElement("tr")
    let varosCella = document.createElement("th")
    varosCella.innerHTML = varos
    sor.appendChild(varosCella)
    for (const szam of adatok[varos]) {
        let cella = document.createElement("td")
        cella.innerHTML = szam
        sor.appendChild(cella)
    }
    tabla.appendChild(sor)
}

document.body.appendChild(tabla)

function madarakSzama(varos) {
    console.log(adatok[varos].reduce((s, el) => s + el))
}
