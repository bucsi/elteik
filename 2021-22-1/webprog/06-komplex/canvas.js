const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
// alapján eltolja a koordináta-rendszer origóját bal alulra,
// és az y tengely  "felfele" növekszik.
ctx.transform(1, 0, 0, -1, 0, canvas.height)
