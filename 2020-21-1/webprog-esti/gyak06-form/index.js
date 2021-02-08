const form = document.querySelector("form")
const list = document.querySelector("ul")

const szolgaltatasok = ["parfotozas","video","tablo","foto+video"]


function sutiBeallit(valtozonev, ertek, lejaratNapban){
    let d = new Date();
    d.setTime(d.getTime() + (lejaratNapban*24*60*60*1000));
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
    // nev=Bucsi;expires=Wed, 14 Jun 2017 07:00:00 GMT;path=/
}

function sutiKiszed(valtozonev){
    let sutik = document.cookie;
    let sutikTomb = sutik.split(';');
    
    for(const suti of sutikTomb){
        let reszek = suti.split('=');
        if(reszek[0].trim() == valtozonev){
            return reszek[1].trim();
        }
    }

    return '';
}



document.addEventListener("submit", (e) => {
    e.preventDefault();
    let hiba = hibasE();

    if(hiba){
        list.innerHTML = ""
        for(const h of hiba){
            let ujElem = document.createElement("li");
            ujElem.innerHTML = h
            ujElem.onmouseenter = () => {
                setTimeout(()=>{
                    ujElem.style.display = "none";
                }, 1000)
            }
            list.appendChild(ujElem);
        }
        form.classList.remove("helyes")
        form.classList.remove("inputFolyamatban")
        form.classList.add("hibas")
    }else{
        console.log({
            nev: form.nev.value,
            kor: parseInt(form.kor.value),
            szolgaltatas: form.szolg.value,
            hirlevel: form.hirlevel.checked,
            helyszin: form.helyszin.value
        })

        sutiBeallit("nev", form.nev.value, 7);
        form.classList.remove("hibas")
        form.classList.remove("inputFolyamatban")
        form.classList.add("helyes")
    }
})
let idozito;


form.addEventListener("input", () => {
    clearTimeout(idozito)
    console.log("asd")
    form.classList.add("inputFolyamatban")
    idozito = setTimeout(()=>{
        form.classList.remove("inputFolyamatban")
    }, 2000)
})


/**
 * Eldönti, hogy a form elemei helyesen ki lettek-e töltve.
 * @returns hamis, ha helyes a form, különben stringlista a hibákról.
 */
function hibasE(){
    let hibak = [];

    if(form.nev.value === ''){
        hibak.push("A megrendelő neve nem lehet üres!")
    }

    if(form.kor.value === ''){
        hibak.push("A megrendelő életkora nem lehet üres!")
    }else if(isNaN(form.kor.value)){
        hibak.push("A megrendelő életkora csak szám lehet!")
    }else if(form.kor.value < 18){
        hibak.push("A megrendelő nem lehet kiskorú")
    }

    if(form.szolg.value === ''){
        hibak.push("Valamilyen szolgáltatást meg kell rendelni!")
    }else if(! szolgaltatasok.includes(form.szolg.value)){
        hibak.push("Nem létező szolgáltatást választottál ki, kérlek töltsd újra az oldalt!")
    }

    if(! form.adatvedelem.checked){
        hibak.push("Az adatvédelmi szabályokat muszáj elfogadni!")
    }

    if(hibak.length === 0){
        return false
    }else{
        return(hibak)
    }
}


let sutibolNev = sutiKiszed("nev")

if(sutibolNev){
    form.nev.value = sutibolNev;
}