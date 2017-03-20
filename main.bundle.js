/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var canvas = document.getElementById('frogger');
	var context = canvas.getContext('2d');
	var Frog = __webpack_require__(1);
	var Lane = __webpack_require__(2);
	var Lilypad = __webpack_require__(5);

	var froggy = new Frog();
	var lane = new Lane(350);
	var lane2 = new Lane(250);
	var lane3 = new Lane(150);
	var lane4 = new Lane(50);

	var lilypad = new Lilypad(0);
	var lilypad2 = new Lilypad(100);
	var lilypad3 = new Lilypad(200);
	var lilypad4 = new Lilypad(300);
	var lilypad5 = new Lilypad(400);

	lane.createCars(3, 200);
	lane2.createBus(2, 50);
	lane3.createCars(2, 150);
	lane4.createBus(3, 200);

	var originalTime = 0;
	var duration = 0;
	var framesPerSecond = 2;

	requestAnimationFrame(function gameLoop(currentTime) {

	  if (!originalTime) {
	    originalTime = currentTime;
	  }
	  duration = currentTime - originalTime;

	  if (duration > 2000 / framesPerSecond) {
	    originalTime = currentTime;
	  }

	  context.clearRect(0, 0, canvas.width, canvas.height);

	  froggy.draw(context);
	  lane.draw(context);
	  lane2.draw(context);
	  lane3.draw(context);
	  lane4.draw(context);
	  lilypad.draw(context);
	  lilypad2.draw(context);
	  lilypad3.draw(context);
	  lilypad4.draw(context);
	  lilypad5.draw(context);

	  console.log(froggy.deathCounter);

	  var drawMoveRight = function (lane) {
	    lane.obstacles.forEach(function (vehicle) {
	      vehicle.draw(context).moveRight();
	      if (froggy.collide(vehicle)) {
	        timeoutId = this.setTimeout(froggy.death);
	        froggy.death(timeoutId);
	        // console.log(timeoutId)

	      }
	    });
	  };

	  var drawMoveLeft = function (lane) {
	    lane.obstacles.forEach(function (vehicle) {
	      vehicle.draw(context).moveLeft();
	      if (froggy.collide(vehicle)) {
	        timeoutId = this.setTimeout(froggy.death);
	        froggy.death(timeoutId);
	        // console.log(timeoutId)

	      }
	    });
	  };

	  drawMoveRight(lane);
	  drawMoveRight(lane3);
	  drawMoveLeft(lane4);
	  drawMoveLeft(lane2);

	  var win = function (lilypad) {
	    if (froggy.winCollide(lilypad)) {
	      console.log('win!');
	    }
	  };

	  win(lilypad);
	  win(lilypad2);
	  win(lilypad3);
	  win(lilypad4);
	  win(lilypad5);

	  // if (isGameRunning) {
	  requestAnimationFrame(gameLoop);
	  // }  
	});

	document.addEventListener('keydown', function (e) {
	  switch (e.keyCode) {
	    case 37:
	      froggy.moveLeft();
	      break;

	    case 38:
	      froggy.moveUp();
	      break;

	    case 39:
	      froggy.moveRight();
	      break;

	    case 40:
	      froggy.moveDown();
	      break;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Frog() {
	  this.x = 250;
	  this.y = 475;
	  this.width = 25;
	  this.height = 25;
	  this.color = 'rgba(0, 255, 0, 1)';
	  this.lives = 3;
	}

	Frog.prototype.draw = function (ctx) {
	  ctx.fillStyle = this.color;
	  ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	Frog.prototype.moveUp = function () {
	  this.y -= 25;
	  if (this.y < 0) {
	    this.y += 25;
	  }
	};

	Frog.prototype.moveDown = function () {
	  this.y += 25;
	  if (this.y > 450) {
	    this.y -= 25;
	  }
	};

	Frog.prototype.moveLeft = function () {
	  this.x -= 25;
	  if (this.x < 0) {
	    this.x += 25;
	  }
	};

	Frog.prototype.moveRight = function () {
	  this.x += 25;
	  if (this.x > 450) {
	    this.x -= 25;
	  }
	};

	Frog.prototype.collide = function (car) {
	  const yCollision = this.y + this.height > car.y && this.y < car.y + car.height;
	  const xCollision = this.x + this.width > car.x && this.x < car.x + car.width;
	  return yCollision && xCollision;
	};

	Frog.prototype.winCollide = function (lilypad) {
	  const yCollision = this.y + this.height > lilypad.y && this.y < lilypad.y + lilypad.height;
	  const xCollision = this.x + this.width > lilypad.x && this.x < lilypad.x + lilypad.width;
	  return yCollision && xCollision;
	};

	Frog.prototype.death = function (timeoutId) {
	  this.color = 'rgba(250, 0, 0, 1)';
	  this.x = 250;
	  this.y = 475;
	  this.deathCounter = timeoutId;
	};

	module.exports = Frog;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Car = __webpack_require__(3);
	var Bus = __webpack_require__(4);

	function Lane(y, direction) {
		this.x = 0;
		this.y = y;
		this.width = 500;
		this.height = 50;
		this.obstacles = [];
		this.direction = direction;
		this.color = 'rbga(0,0,0,0)';
	}

	Lane.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	};

	Lane.prototype.createCars = function (num, spacing) {
		var start = 0;
		for (var i = 0; i < num; i++) {
			var car = new Car(start, this);
			this.obstacles.push(car);
			start += spacing;
		}
	};

	Lane.prototype.createBus = function (num, spacing) {
		var start = 0;
		for (var i = 0; i < num; i++) {
			var bus = new Bus(start, this);
			this.obstacles.push(bus);
			start += spacing;
		}
	};

	module.exports = Lane;

/***/ },
/* 3 */
/***/ function(module, exports) {

	function Car(x, lane) {
		this.x = x;
		this.y = lane.y;
		this.width = 100;
		this.height = 50;
		this.speed = 1;
		this.color = 'rgba(0,0,255,1)';
	}

	Car.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		return this;
	};

	Car.prototype.moveRight = function () {
		this.x += this.speed;
		if (this.x > 600) {
			this.x = -100;
		}
		return this;
	};

	Car.prototype.moveLeft = function () {
		this.x -= this.speed;
		if (this.x < -100) {
			this.x = 600;
		}
	};

	module.exports = Car;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function Bus(x, lane) {
		this.x = x;
		this.y = lane.y;
		this.width = 150;
		this.height = 50;
		this.speed = 0.5;
		this.color = 'rgba(255,255,0,1)';
	}

	Bus.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		return this;
	};

	Bus.prototype.moveRight = function () {
		this.x += this.speed;
		if (this.x > 500) {
			this.x = -150;
		}
		return this;
	};

	Bus.prototype.moveLeft = function () {
		this.x -= this.speed;
		if (this.x < -150) {
			this.x = 500;
		}
	};

	module.exports = Bus;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function Lilypad(x) {
		this.x = x;
		this.y = 0;
		this.width = 50;
		this.height = 50;
		this.color = 'rgba(0, 255, 0, 1)';
	}

	Lilypad.prototype.draw = function (ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	module.exports = Lilypad;

/***/ }
/******/ ]);