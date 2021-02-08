const mega = document.querySelector("input[type=checkbox]")
const btns = document.querySelectorAll("button")

function handleClick(e){
    if(mega.checked){
        console.log(e)
        console.log(this.dataset["mega"])
    }else{
        console.log(this.dataset["mini"])
    }
}

function handleMegaStyle(){
    if(mega.checked){
        for(let b of btns){
            b.classList.remove("mini")
            b.classList.add("mega")
        }
    }else{
        for(let b of btns){
            b.classList.add("mini")
            b.classList.remove("mega")
        }
    }
}

mega.addEventListener("change", handleMegaStyle)

for(let b of btns){
    b.addEventListener("click", handleClick);
}

handleMegaStyle()

