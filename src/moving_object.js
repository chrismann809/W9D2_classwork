function MovingObject(params) {
    this.pos = params.pos;
    this.vel = params.vel;
    this.radius = params.radius;
    this.color = params.color;
};

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

console.log(mo)

MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
};

MovingObject.prototype.move = function(ctx) {
    const that = this;
    setInterval (function() {
        const oldColor = that.color;
        that.color = 'black';
        that.radius += 10;
        that.draw(ctx);
        that.radius -= 10;
        that.color = oldColor;
        that.pos[0] += that.vel[0];
        that.pos[1] += that.vel[1];
        that.draw(ctx);
    }, 100);
};

module.exports = MovingObject;