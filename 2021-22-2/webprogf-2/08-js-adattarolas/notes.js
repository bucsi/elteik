let adatok = localStorage.getItem("jegyzetek")

if(adatok !== null){
    document.querySelector("textarea").value = adatok
}

document.querySelector("textarea").addEventListener("input", (e)=>{
    localStorage.setItem("jegyzetek", e.target.value)
})