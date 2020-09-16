/*
Task 1.
The company needs to create a table of their expenses.
Use the `data` below to generate a table!
*/

const data = [
    {
        name: "Hand sanitizer (1 litre)",
        quantity: "200",
        unit: "pcs.",
        "price per unit": "11 EUR"
    },
    {
        name: "Office supplies",
        quantity: "1",
        unit: "unit",
        "price per unit": "19.55 EUR"
    },
    {
        name: "Safe",
        quantity: "1",
        unit: "pcs.",
        "price per unit": " 556.85 EUR"
    },
    {
        name: "Online marketing campaign",
        quantity: "1",
        unit: "campaign",
        "price per unit": "waiting for response"
    },
    {
        name: "Vacation of the CEO",
        quantity: "1",
        unit: "family",
        "price per unit": "unkown"
    }
]


const table = document.querySelector("table")
/*
let heading = "<thead><tr>"

for(h of ["Name", "Quantity", "Unit", "Price/unit"]){
    heading += `<th>${h}</th>`
}

heading += "</tr></thead>"

table.innerHTML = heading
*/

const THEAD = document.createElement("thead")
const ROW = document.createElement("tr")

let arr = ["Name", "Quantity", "Unit", "Price/unit"]

arr.forEach( (h) => {
    const TH = document.createElement("th")
    TH.innerHTML = h
    ROW.appendChild(TH)
} )

THEAD.appendChild(ROW)
table.appendChild(THEAD)

data.forEach( r => {
    const dataROW = document.createElement("tr")
    for(let key in r){
        const TD = document.createElement("td")
        TD.innerHTML = r[key]
        if(key !== "name"){
            TD.classList.add("center")
        } 
        dataROW.appendChild(TD)
    }
    table.appendChild(dataROW)
})