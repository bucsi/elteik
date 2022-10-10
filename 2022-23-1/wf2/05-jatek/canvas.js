const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.transform(1, 0, 0, -1, 0, canvas.height);

export { canvas, ctx };
