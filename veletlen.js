/**
 * Véletlen egész számot ad vissza az [alja-teteje] zárt intervallumból.
 * @param {Number} alja Egész szám, az intervallum alja
 * @param {*} teteje Egész szám, az intervallum teteje
 */
export default function veletlenKozott(alja, teteje) {
    Math.floor(Math.random() * (teteje - alja + 1) + alja)
}
