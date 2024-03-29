import { veletlenKozott } from "../helpers.js"
import { WIDTH } from "../canvas.js"
import { state } from "../state.js"

export class Cactus {
    constructor() {
        this.height = veletlenKozott(100, 200)
        this.width = veletlenKozott(50, 100)
        this.x = WIDTH
        this.y = 50
    }

    get rightEdge() {
        return this.x + this.width
    }
    get leftEdge() {
        return this.x
    }
    get topEdge() {
        return this.y + this.height
    }

    update(dt, speed) {
        this.x -= speed * dt
        if (this.x < 0) {
            state.obstacles.pop()
            state.obstacles.push(new Cactus())
            state.score++
        }
    }

    render(ctx) {
        ctx.save()
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}
