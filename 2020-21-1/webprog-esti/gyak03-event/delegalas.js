function kezel(event, child){
    //csinálj, amit eseményre akarsz child-dal
}
/**
 * Egy függvény, hogy egy "nagy" eseménykezelőn szülőnek delegáljuk a gyerek elemek eseményinek kezelését
 * @param {Node} szulo Egy HTML elem (querySelectorral kiválasztva)
 * @param {string} gyerek Egy CSS selector (stringként), ami leírja azon gyerek elemeket, akiken figyelni akarjuk az eseményt (pl. `".gomb"`)
 * @param {string} mikor Egy esemény stringként, amikor futtatni szeretnénk a kezelő függvényt (pl. `"click"`)
 * @param {(ev: Event,target: Node) => void} mit A függvény, ami fut az eseményre (paraméterként megkapja az eseményt, és a `legkozelebbiKeresettELem`-et)
 */
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

delegal(child_container, "child css", "event", kezel)