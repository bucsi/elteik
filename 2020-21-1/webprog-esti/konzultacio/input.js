const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")
const form = document.querySelector("aside")

let szamlalo = 0;

addBtn.addEventListener("click", ()=>{
    szamlalo++
    const uj = document.createElement("input")
    uj.type = "text"
    uj.value = `placeholder${szamlalo}`
    form.appendChild(uj)
})

removeBtn.addEventListener("click", ()=>{
    let old = form.childNodes[form.childNodes.length - 1]
    if(old.type === "text"){
        szamlalo--
        form.removeChild(old)
    }
})