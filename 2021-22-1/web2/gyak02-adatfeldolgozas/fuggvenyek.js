let transactions = [ 2000000, -993, -46000 ];

/**
 * Összegzés callback függvény a `reduce` tömbfüggvényhez.
 * @param {Number} eddigiOsszeg
 * @param {Number} jelenlegiErtek
 * @returns {Number}
 */
function osszegzes(eddigiOsszeg, jelenlegiErtek){
    return eddigiOsszeg + jelenlegiErtek
}

const osszegzes2 = function (eddigiOsszeg, jelenlegiErtek){
    return eddigiOsszeg + jelenlegiErtek
}

const osszegzes3 = (eddigiOsszeg, jelenlegiErtek) => {
    return eddigiOsszeg + jelenlegiErtek
}
//csak akkor hagyható el a {} és a return, ha 1 darab utasítás a függvény!!!
const osszegzes4 = (eddigiOsszeg, jelenlegiErtek) => eddigiOsszeg + jelenlegiErtek

const osszegzes5 = (s, x) => s + x

transactions.reduce((s,x)=>s+x)
transactions.reduce(function (s,x){
    return s+x
})


function getBalance(transactions) {
    return transactions.reduce((s, x) => s + x);
}

// fgv paraméterei körül a () csak akkor hagyható el, ha PONTOSAN 1 paraméter van
const getBalance2 = transactions => transactions.reduce((s,x)=>s+x)