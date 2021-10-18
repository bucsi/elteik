class Dino {
    constructor() {
        this.x = 500
        this.y = 50
        this.width = 50
        this.height = 100
        this.vy = 0
    }

    get isJumping() {
        return this.vy !== 0
    }

    collidesWith(actor) {
        const rightEdge = this.x + this.width
        const leftEdge = this.x
        const topEdge = this.y + this.height
        const bottomEdge = this.y

        /*
        dínó  kaktusz
       1. []  |    |

       2.     | [] |

       3.     |    |  []
    
    */

        const horizontalCollision = rightEdge > actor.leftEdge && leftEdge < actor.rightEdge
        const verticalCollision = bottomEdge < actor.topEdge

        return horizontalCollision && verticalCollision
    }

    update(dt) {
        if (this.vy !== 0) {
            this.y += dt * this.vy
            this.vy -= dt * 0.2
        }
        if (this.y < 50) {
            this.vy = 0
            this.y = 50
        }
    }

    render() {
        ctx.save()
        ctx.beginPath()
        ctx.strokeStyle = "blue"
        ctx.fillStyle = "gray"
        ctx.lineWidth = 5
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }
}
