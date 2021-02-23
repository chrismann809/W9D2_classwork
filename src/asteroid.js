const MovingObject = require("./moving_object.js");
const Util = require("./utils.js")

// Return a randomly oriented vector with the given length.
// const Util = {
//   randomVec(length) {
//     const deg = 2 * Math.PI * Math.random();
//     return Util.scale([Math.sin(deg), Math.cos(deg)], length);
//   },
//   // Scale the length of a vector by the given amount.
//   scale(vec, m) {
//     return [vec[0] * m, vec[1] * m];
//   }
// };

function getRandomPos(max=500) {
  return [Math.floor(Math.random() * Math.floor(max)), Math.floor(Math.random() * Math.floor(max))];
}

function Asteroid(params) {
    params.color ||= 'grey';
    params.radius ||= 15;
    params.pos ||= getRandomPos();
    params.vel ||= Util.randomVec(5);
    MovingObject.call(this, params)
};

Util.inherits(Asteroid, MovingObject);


// Other properties are filled in for you.
const ass = new Asteroid({ pos: [30, 30] });
console.log(ass.color)


module.exports = Asteroid;