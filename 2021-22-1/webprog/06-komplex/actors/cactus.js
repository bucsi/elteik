class Cactus {
    constructor() {
        this.height = veletlenKozott(100, 200)
        this.width = veletlenKozott(50, 100)
        this.x = canvas.width
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
            state.obstacles.pop()
            state.obstacles.push(new Cactus())
        }
    }

    render() {
        ctx.save()
        ctx.fillStyle = "green"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}
