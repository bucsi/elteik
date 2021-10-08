class Ball {
    constructor(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update(dt) {
        this.x += this.vx * dt
        if (this.x > 500 || this.x < 0) {
            this.vx = -this.vx
        }
        this.y += this.vy * dt
        if (this.y > 500 || this.y < 0) {
            this.vy = -this.vy
        }
        console.log(`x: ${this.x}, y: ${this.y}`)
    }

    render(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.beginPath()
        ctx.arc(0, 0, 10, 0, 2 * Math.PI)
        ctx.fill()
        ctx.restore()
    }
}
