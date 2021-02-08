const mega = document.querySelector("input[type=checkbox]")
const btns = document.querySelectorAll("button")
const gombok_container = document.querySelector("div")


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


function handleAbilityClick(event, child){
    if(mega.checked){
        console.log(child.dataset["mega"])
    }else{
        console.log(child.dataset["mini"])
    }
}

function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

delegal(gombok_container, "button", "click", handleAbilityClick)


/*
bemegyAzOsztalyfonokhoz(esemeny, gyerek){
        hisztizzenNeki(esemeny.tanarAkiBeirta);
        puszitAd(gyerek);
    }
delegal(anyuka, '.altalanosIskolasGyerek', 'beirnakAzEllenorzobe', bemegyAzOsztalyfonokhoz);
*/