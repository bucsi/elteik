const unokak = [
  { nev: "Tomi", kor: 24, szin: "zöld" },
  { nev: "Máté", kor: 21, szin: "fekete" },
  { nev: "Bonifác", kor: 19, szin: "piros" },
  { nev: "Eszti", kor: 19, szin: "kék" },
  { nev: "Áron", kor: 16, szin: "sárga" },
  { nev: "Boróka", kor: 14, szin: "rózsaszín" },
  { nev: "Gréti", kor: 9, szin: "fehér" },
];


const div = document.querySelector("div")

div.innerHTML = `
<table>
<tr>
${Object.keys(unokak[0]).map(el=>`<th>${el}</th>`).join("")}
</tr>
</table>`

//már létezik táblázat, querySelectorral ki tudom keresni
const tablazat = document.querySelector("table")
unokak.forEach(u=>{
    const ujSor = document.createElement("tr")
    Object.keys(u).forEach(k=>{
        const ujCella = document.createElement("td")
        if(k !== "kor"){
            ujCella.innerText = u[k]
        }else{
            ujCella.innerText = u[k] >= 18 ? u[k] : "Kiskorú."
        }
        ujSor.appendChild(ujCella)
    })
    tablazat.appendChild(ujSor)
})