const adatok = [
    {
        megnevezes: "Lábfertőtlenítő (1L)",
        mennyiseg: "200",
        egyseg: "db",
        egysegar: "3900Ft"
    },
    {
        megnevezes: "Iratmegsemmisítő",
        mennyiseg: "1",
        egyseg: "db",
        egysegar: "6990Ft"
    },
    {
        megnevezes: "Széf",
        mennyiseg: "1",
        egyseg: "db",
        egysegar: "198900Ft"
    },
    {
        megnevezes: "Opel Astra bal irányjelző (index)",
        mennyiseg: "1",
        egyseg: "db",
        egysegar: "4799Ft"
    },
    {
        megnevezes: "Opel Astra jobb irányjelző (index)",
        mennyiseg: "1",
        egyseg: "db",
        egysegar: "4799Ft"
    },
    {
        megnevezes: "Online újság (index)",
        mennyiseg: "1",
        egyseg: "szerkesztőség",
        egysegar: "ajánlatra vár"
    },
    {
        megnevezes: "Adriai nyaralás",
        mennyiseg: "3",
        egyseg: "család",
        egysegar: "N/A"
    }
]

const tabla = document.querySelector("table")

tabla.appendChild(document.createElement("thead"))

for(f of ["Megnevezés", "Mennyiség", "Egység", "Egységár"]){
    let elem = document.createElement("th")
    elem.innerText = f
    tabla.tHead.appendChild(elem);
}

for(sor of adatok){
    const newrow = document.createElement("tr")
    for(k in sor){
        const newdata = document.createElement("td")
        newdata.innerText = sor[k]
        if(k !== "megnevezes"){
            newdata.classList.add("kozepre")
        }
        newrow.appendChild(newdata)
    }
    tabla.appendChild(newrow)
}