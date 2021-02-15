/*
Madárfaj/    1   2   3   4   5
Település
Budapest    adott településen az adott fajból hányat figyeltek meg?
Érd
Pécs
*/

function $(string) {
    return document.querySelector(string)
}

let adatok = {
    Budapest: [0, 1, 3, 2, 1],
    Erd: [0, 10, 3, 4, 5],
    Pecs: [0, 2, 3, 5, 0],
}

// Generáljunk ebből egy táblázatot!

let tablazat = document.createElement("table")

let elsosor = document.createElement("tr")
let balfelso = document.createElement("th")
balfelso.innerHTML = "Madárfaj/<br>Település"
elsosor.appendChild(balfelso)

for (let i = 0; i < adatok.Budapest.length; i++) {
    let fejlec = document.createElement("th")
    fejlec.innerHTML = i + 1 + ". faj"

    elsosor.appendChild(fejlec)
}

tablazat.appendChild(elsosor)

for (const varos in adatok) {
    let ujsor = document.createElement("tr")
    let fejlec = document.createElement("th")
    fejlec.innerHTML = varos
    ujsor.append(fejlec)
    for (const ertek of adatok[varos]) {
        let cella = document.createElement("td")
        cella.innerHTML = ertek
        ujsor.appendChild(cella)
    }
    tablazat.append(ujsor)
}

document.body.appendChild(tablazat)

for (let i = 1; i < $("table").rows.length; i++) {
    let sor = $("table").rows[i]
    console.log(
        Array.from(sor.querySelectorAll("td")).reduce(
            (s, el) => (s += parseInt(el.innerHTML)),
            0
        )
    )
}
