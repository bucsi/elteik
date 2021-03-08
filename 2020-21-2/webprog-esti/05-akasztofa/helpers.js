/**
 * Véletlen egész számot ad vissza egy intervallumból
 * @param {number} a az intervallum alsó értéke (zárt)
 * @param {number} b az intervallum felső értéke (nyitott)
 */
function randBtw(a, b) {
    return Math.floor(Math.random() * Math.abs(a - b) + a)
}

export {randBtw}
