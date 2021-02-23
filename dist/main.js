/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\r\n\r\n// Return a randomly oriented vector with the given length.\r\n// const Util = {\r\n//   randomVec(length) {\r\n//     const deg = 2 * Math.PI * Math.random();\r\n//     return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n//   },\r\n//   // Scale the length of a vector by the given amount.\r\n//   scale(vec, m) {\r\n//     return [vec[0] * m, vec[1] * m];\r\n//   }\r\n// };\r\n\r\nfunction getRandomPos(max=500) {\r\n  return [Math.floor(Math.random() * Math.floor(max)), Math.floor(Math.random() * Math.floor(max))];\r\n}\r\n\r\nfunction Asteroid(params) {\r\n    params.color ||= 'grey';\r\n    params.radius ||= 15;\r\n    params.pos ||= getRandomPos();\r\n    params.vel ||= Util.randomVec(5);\r\n    MovingObject.call(this, params)\r\n};\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\n\r\n// Other properties are filled in for you.\r\nconst ass = new Asteroid({ pos: [30, 30] });\r\nconsole.log(ass.color)\r\n\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.MovingObject = MovingObject;\ndocument.addEventListener('DOMContentLoaded', function() {\n    const canvasEl = document.getElementById('canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500;\n    const ctx = canvasEl.getContext('2d');\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0, 0, 500, 500);\n    const mo = new MovingObject({\n        pos: [30, 30],\n        vel: [10, 10],\n        radius: 5,\n        color: \"#00FF00\"\n    });\n    mo.move(ctx);\n    for (let count = 0; count < 15; count++) {\n        const ass = new Asteroid({});\n        ass.move(ctx);\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(params) {\n    this.pos = params.pos;\n    this.vel = params.vel;\n    this.radius = params.radius;\n    this.color = params.color;\n};\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\n// console.log(mo)\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n    ctx.fill();\n};\n\nfunction getRandomPos(max=500) {\n  return [Math.floor(Math.random() * Math.floor(max)), Math.floor(Math.random() * Math.floor(max))];\n}\n\nMovingObject.prototype.move = function(ctx) {\n    const that = this;\n    setInterval (function() {\n        const oldColor = that.color;\n        that.color = 'black';\n        that.radius += 1;\n        that.draw(ctx);\n        that.radius -= 1;\n        that.color = oldColor;\n        that.pos[0] += that.vel[0];\n        that.pos[1] += that.vel[1];\n        that.draw(ctx);\n        // that.pos ||= getRandomPos();\n        // that.pos[0] === 500 ? that.pos[0] = 0 : pos[0] = pos[0];\n        // that.pos[1] === 500 ? that.pos[1] = 0 : pos[1] = pos[1];\n    }, 100);\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\r\n    inherits(childClass, parentClass) {\r\n        function Surrogate () {}\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n  // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n};\r\n  \r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;