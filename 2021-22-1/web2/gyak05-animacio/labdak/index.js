const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let state = {
    balls: [],
}

function update(dt) {
    for (let b of state.balls) {
        b.update(dt)
    }
}

function render() {
    //háttér törlése
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let b of state.balls) {
        b.render(ctx)
    }
}

let lastFrameTime = performance.now()
function next() {
    let currentTime = performance.now()
    let dt = (currentTime - lastFrameTime) / 10

    update(dt)
    render()

    lastFrameTime = currentTime
    requestAnimationFrame(next)
}

function init() {
    state.balls = []
    state.balls.push(new Ball(250, 250, 2, 1))
    state.balls.push(new Ball(250, 250, -1, 2))
}

init()
next()
