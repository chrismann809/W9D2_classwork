const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;
document.addEventListener('DOMContentLoaded', function() {
    const canvasEl = document.getElementById('canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 500, 500);
    // ctx.fillStyle = this.color;
    // ctx.beginPath();

    // ctx.arc(
    //     15,
    //     15,
    //     15,
    //     0,
    //     2 * Math.PI,
    //     false
    // );
    // ctx.fill();
    // mo.draw(ctx);
});