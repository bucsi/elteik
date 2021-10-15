state = {
    obstacles: [],
    player: undefined,
    stage: undefined,
}

function init() {
    state.obstacles.push(new Cactus())
    state.player = new Dino()
    state.stage = "playing"
}

function update(dt) {
    state.player.update(dt)
    for (const c of state.obstacles) {
        c.update(dt, 10)
        if (state.player.collidesWith(c)) {
            state.stage = "gameover"
        }
    }
}

function render() {
    //canvas törlése, az új állapot kirajzolásához
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const c of state.obstacles) {
        c.render()
    }
    state.player.render()
}

let lastFrameTime = performance.now()
function next() {
    let currentTime = performance.now()
    let dt = (currentTime - lastFrameTime) / 10

    update(dt)
    render()

    lastFrameTime = currentTime
    if (state.stage !== "gameover") {
        requestAnimationFrame(next)
    } else {
        ctx.save()
        ctx.transform(1, 0, 0, -1, 0, 0)
        ctx.font = "120px sans-serif"
        ctx.fillStyle = "red"
        ctx.fillText("Game Over", 500, -200)
        ctx.restore()
    }
}

addEventListener("keydown", handleJump)
init()
next()
