import { Dino } from "./actors/dino.js"
import { Cactus } from "./actors/cactus.js"

import { handleJump } from "./events/jump.js"

import { ctx, WIDTH, HEIGHT } from "./canvas.js"
import { state } from "./state.js"
import { onTimer } from "./scoreTimer.js"

export class Game {
    /*init*/
    constructor() {
        state.obstacles.push(new Cactus(1000))
        state.player = new Dino()
        state.stage = "playing"
        addEventListener("keydown", handleJump)
        this.lastFrameTime = undefined
    }

    update(dt) {
        state.player.update(dt)
        for (const c of state.obstacles) {
            c.update(dt, 10)
            if (state.player.collidesWith(c)) {
                state.stage = "gameover"
            }
        }
    }

    render() {
        //canvas törlése, az új állapot kirajzolásához
        ctx.clearRect(0, 0, WIDTH, HEIGHT)

        for (const c of state.obstacles) {
            c.render()
        }
        state.player.render()
    }

    start() {
        this.lastFrameTime = performance.now()
        this.next()
        this.scoreTimer = setInterval(onTimer, 1000)
        state.cactusTimer = setTimeout(doCactusSpawn.bind(null, 1000), 1000)
    }

    next() {
        let currentTime = performance.now()
        let dt = currentTime - this.lastFrameTime
        dt /= 10

        this.update(dt)
        this.render()

        this.lastFrameTime = currentTime
        if (state.stage !== "gameover") {
            requestAnimationFrame(this.next.bind(this))
        } else {
            clearInterval(this.scoreTimer)
            clearTimeout(state.cactusTimer)
            ctx.save()
            ctx.transform(1, 0, 0, -1, 0, 0)
            ctx.font = "120px sans-serif"
            ctx.fillStyle = "red"
            ctx.fillText("Game Over", 500, -200)
            ctx.restore()
        }
    }
}

function doCactusSpawn(time) {
    state.obstacles.push(new Cactus())
    console.log("új kaktusz!")
    if (time > 700) {
        time = time - 100
    }
    state.cactusTimer = setTimeout(doCactusSpawn.bind(null, time), time)
}
