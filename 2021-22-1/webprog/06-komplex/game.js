import { Dino } from "./actors/dino.js"
import { Cactus } from "./actors/cactus.js"
import { ctx, canvas } from "./canvas.js"
import { state } from "./state.js"
import { debug } from "./helpers.js"
import { handleJump } from "./events/jump.js"

function init() {
    state.score = 0
    state.time = 0
    state.timeTimer = setInterval(() => state.time++, 1000)
    state.player = new Dino()
    state.obstacles = []
    state.obstacles.push(new Cactus())
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
        c.render(ctx)
    }
    state.player.render(ctx)
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
        gameOver()
    }
}

function gameOver() {
    //időzítő leállítása
    clearInterval(state.timeTimer)

    //felirat kirajzolása
    ctx.save()
    ctx.transform(1, 0, 0, -1, 0, 0)
    ctx.font = "120px sans-serif"
    ctx.fillStyle = "red"
    ctx.fillText("Game Over", 500, -200)
    ctx.restore()

    //eredmény kiírása
    const form = document.querySelector("form")
    form.classList.toggle("hide")
    form.score.value = state.score
    form.time.value = state.time
}

function save(data) {
    const savedData = localStorage.getItem("dino-highscore")
    if (savedData === null) {
        //ha üres
        const toplist = [data]
        localStorage.setItem("dino-highscore", JSON.stringify(toplist))
    } else {
        //ha van már adat
        const toplist = JSON.parse(savedData)
        toplist.push(data)
        localStorage.setItem("dino-highscore", JSON.stringify(toplist))
    }
}

addEventListener("keydown", handleJump)
document.querySelector("#newGame").addEventListener("click", e => {
    e.target.blur()
    state.stage = "gameover"
    init()
    next()
})
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault()
    if (e.target.player.value.trim() !== "") {
        const data = {
            player: e.target.player.value,
            score: e.target.score.value,
            time: e.target.time.value,
        }
        save(data)
        e.target.classList.toggle("hide")
    }
})
init()
next()
