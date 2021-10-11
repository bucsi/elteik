/**
 * Véletlen egész számot ad vissza az [alja-teteje] zárt intervallumból.
 * @param {Number} alja Egész szám, az intervallum alja
 * @param {*} teteje Egész szám, az intervallum teteje
 */
function veletlenKozott(alja, teteje) {
    return Math.floor(Math.random() * (teteje - alja + 1) + alja)
}
