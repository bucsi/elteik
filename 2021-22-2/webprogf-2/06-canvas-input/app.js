/**
 *
 * @param {Node} szulo egy HTML elem querySelectorral kiválasztva (pl. `document.querySelector("ul")`)
 * @param {keyof HTMLElementTagNameMap} gyerek egy CSS szelektor, ami leírja azon elemeket, melyeken szeretnénk futtatni a fgv-t (pl. `"a"`)
 * @param {string} mikor egy esemény, stringként (pl. `"click"`)
 * @param {(ev: Event, target: Node) => null} mit A függvény, amit futtatunk
 */
function delegal(szulo, gyerek, mikor, mit) {
  function esemenyKezelo(ev) {
    const esemenyCelja = ev.target;
    const esemenyKezeloje = this;
    const legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

    if (esemenyKezeloje.contains(legkozelebbiKeresettElem)) {
      mit(ev, legkozelebbiKeresettElem);
    }
  }

  szulo.addEventListener(mikor, esemenyKezelo);
}

const OSSZ_MANDATUM = 199;

const partok = {
  hupilila: 0,
  nefritzold: 0,
  diplomatakek: 0,
  kobaltviola: 0,
  egyeb: 199,
};

/* mindkettő helyes:
partok.kobaltviola = 100
partok["kobaltviola"] = 100
*/

const inputContainer = document.querySelector("div");

delegal(inputContainer, "input.user-editable", "change", (ev, target) => {
  console.log(target.dataset.party + " " + target.value);

  const bemenet = parseInt(target.value);

  if (bemenet >= 0) {
    partok[target.dataset.party] = parseInt(target.value);
  }else{
      alert("Csak pozitív egész szám mandátumot nyerhet el egy párt!")
  }

  const maradek =
    OSSZ_MANDATUM -
    (partok.hupilila +
      partok.nefritzold +
      partok.diplomatakek +
      partok.kobaltviola);

  if (maradek >= 0) {
    partok.egyeb = maradek;
  } else {
    alert("Túl sok mandátum került kiosztásra, a legutóbbi adatokat töröltük!");
    partok[target.dataset.party] = 0;
  }

  updateView(partok);
});

function updateView(model) {
  const hupilila = document.querySelector("input[data-party=hupilila]");
  const nefritzold = document.querySelector("input[data-party=nefritzold]");
  const diplomatakek = document.querySelector("input[data-party=diplomatakek]");
  const kobaltviola = document.querySelector("input[data-party=kobaltviola]");
  const egyeb = document.querySelector("input[data-party=egyeb]");

  hupilila.value = model.hupilila;
  nefritzold.value = model.nefritzold;
  diplomatakek.value = model.diplomatakek;
  kobaltviola.value = model.kobaltviola;
  egyeb.value = model.egyeb;

  updateCanvas(model)
}

function updateCanvas(model){
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.transform(1,0,0,-1,canvas.width / 2, canvas.height-50);
    /*ctx.arc(0,0,10,0,Math.PI);
    ctx.fill();*/
    
    const hupililaColor = "hsl(330, 70%, 40%)";
    const nefritzoldColor = "hsl(130, 70%, 30%)";
    const diplomatakekColor = "hsl(230, 60%, 50%)";
    const kobaltviolaColor = "hsl(290, 70%, 40%)";
    const egyebColor = "hsl(0, 0%, 30%)";

    const hupilila = (model.hupilila / OSSZ_MANDATUM) * Math.PI;
    const nefritzold = (model.nefritzold / OSSZ_MANDATUM) * Math.PI;
    const diplomatakek = (model.diplomatakek / OSSZ_MANDATUM) * Math.PI;
    const kobaltviola = (model.kobaltviola / OSSZ_MANDATUM) * Math.PI;
    const egyeb = (model.egyeb / OSSZ_MANDATUM) * Math.PI;
    
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.fillStyle = hupililaColor
    ctx.arc(0,0,100,0,hupilila)
    ctx.lineTo(0,0)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.fillStyle = nefritzoldColor
    ctx.arc(0,0,100,hupilila, hupilila+nefritzold)
    ctx.lineTo(0,0)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.fillStyle = diplomatakekColor
    ctx.arc(0,0,100,hupilila+nefritzold, hupilila+nefritzold+diplomatakek)
    ctx.lineTo(0,0)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.fillStyle = kobaltviolaColor
    ctx.arc(0,0,100,hupilila+nefritzold+diplomatakek+diplomatakek, hupilila+nefritzold+diplomatakek+kobaltviola)
    ctx.lineTo(0,0)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.fillStyle = egyebColor
    ctx.arc(0,0,100,hupilila+nefritzold+diplomatakek+kobaltviola, hupilila+nefritzold+diplomatakek+egyeb)
    ctx.lineTo(0,0)
    ctx.fill()
    ctx.closePath()

}

updateView(partok);