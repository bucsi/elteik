import { veletlenKozott } from "../helpers.js"
import { ctx, WIDTH } from "../canvas.js"
import { state } from "../state.js"

export class Cactus {
    constructor(time) {
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
    get bottomEdge() {
        return this.y
    }

    update(dt, speed) {
        this.x -= speed * dt
        if (this.x < 0) {
            console.log(`Akadályok törlés előtt: ${JSON.stringify(state.obstacles)}`)
            state.obstacles.shift()
            console.log(`Akadályok törlés után: ${JSON.stringify(state.obstacles)}`)
        }
    }

    render() {
        ctx.save()
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}
