const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
window.MovingObject = MovingObject;
document.addEventListener('DOMContentLoaded', function() {
    const canvasEl = document.getElementById('canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 500, 500);
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });
    mo.move(ctx);
    for (let count = 0; count < 15; count++) {
        const ass = new Asteroid({});
        ass.move(ctx);
    }
});