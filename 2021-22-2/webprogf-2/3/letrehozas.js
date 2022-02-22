const lista = document.querySelector("ul")
for (let i = 0; i < 3; i++) {
    lista.innerHTML += "<li>Ez</li>"
}
lista.innerHTML += `<li>Meg mégegy elem
                        <ul>
                            <li>alpont</li>
                        </ul>
                    </li>`

const ujListaElem = document.createElement("li")
ujListaElem.innerHTML = "Ez egy új listaelem"
ujListaElem.style.fontFamily = "serif"
lista.appendChild(ujListaElem)

const bemenetiAdat = [
    {
        nev: "Márton Gergő",
        rendesCsoportok: 1,
        angolCsoportok: 1,
    },
    {
        nev: "Győztes Tamás",
        rendesCsoportok: 0,
        angolCsoportok: 2,
    },
    {
        nev: "Rendes Sándor",
        rendesCsoportok: 5,
        angolCsoportok: 0,
    },
    {
        nev: "Visno Vikthor",
        rendesCsoportok: 3,
        angolCsoportok: 0,
    },
    {
        nev: "Horgász Erik",
        rendesCsoportok: 2,
        angolCsoportok: 1,
    },
]

/*[
    { nev: "Bucsi", szak: "info tanári", orak: "FOSZK#2, FOSZK#3, IMPROG#1" },
    { nev: "Krumpli", szak: "proginf BSc", orak: "FOSZK#1, ESTI#1, NAPPALI#4, NAPPALI#5" },
    { nev: "Thor", szak: "proginf MSc", orak: "MTECH#1, MTECH#2" },
]*/

// Készítsünk egy táblázatot, amiben leolvashatóak a gyakorlatvezetők adatai!
// Legyen oszlopfejléc is!

const table = document.createElement("table")
let fejlecSor = document.createElement("tr")

for (let oszlopfejlec of bemenetiAdat[0]) {
    let fejlec = document.createElement("th")
    fejlec.innerHTML = oszlopfejlec
    fejlecSor.appendChild(fejlec)
}

table.appendChild(fejlecSor)

for (let sor of bemenetiAdat) {
    let ujSor = document.createElement("tr")
    for (let oszlopfejlec in sor) {
        let ujCella = document.createElement("td")
        /*if (oszlopfejlec === "orak") {
            ujCella.innerHTML = `${sor["orak"].split(",").length} db. órát tart`
        } else {*/
        ujCella.innerHTML = sor[oszlopfejlec]
        //}

        ujSor.appendChild(ujCella)
    }
    table.appendChild(ujSor)
}
const div = document.querySelector("div")
div.appendChild(table)
