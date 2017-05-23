var p1;
var p2;

function Game() {
    var canvas = document.querySelector('#game');
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.keys = new KeyListener();

    p1 = new Paddle(5, 0);
    p1.y = this.height / 2 - p1.height / 2;
    this.display1 = new Display(this.width / 4, 25);
    p2 = new Paddle(this.width - 5 - 2, 0);
    p2.y = this.height / 2 - p2.height / 2;
    this.display2 = new Display(this.width * 3 / 4, 25);

    p2.x = 785;

    this.ball = new Ball();
    this.ball.x = this.width / 2;
    this.ball.y = this.height / 2;
    this.ball.vy = Math.floor(Math.random() * 12 - 6);
    this.ball.vx = 7 - Math.abs(this.ball.vy);
}

Game.prototype.draw = function () {
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width / 2, 0, 2, this.height);

    this.ball.draw(this.context);

    p1.draw(this.context);
    p2.draw(this.context);
    this.display1.draw(this.context);
    this.display2.draw(this.context);
};

Game.prototype.update = function () {
    if (this.paused)
        return;

    this.ball.update();
    this.display1.value = p1.score;
    this.display2.value = p2.score;

    // To which Y direction the paddle is moving
    if (this.keys.isPressed(83)) { // DOWN
        p1.y = Math.min(this.height - p1.height, p1.y + 4);
    } else if (this.keys.isPressed(87)) { // UP
        p1.y = Math.max(0, p1.y - 4);
    }

    if (this.keys.isPressed(40)) { // DOWN
        p2.y = Math.min(this.height - p2.height, p2.y + 4);
    } else if (this.keys.isPressed(38)) { // UP
        p2.y = Math.max(0, p2.y - 4);
    }

    if (this.ball.vx > 0) {
        if (p2.x <= this.ball.x + this.ball.width &&
            p2.x > this.ball.x - this.ball.vx + this.ball.width) {
            var collisionDiff = this.ball.x + this.ball.width - p2.x;
            var k = collisionDiff / this.ball.vx;
            var y = this.ball.vy * k + (this.ball.y - this.ball.vy);
            if (y >= p2.y && y + this.ball.height <= p2.y + p2.height) {
                // collides with right paddle
                this.ball.x = p2.x - this.ball.width;
                this.ball.y = Math.floor(this.ball.y - this.ball.vy + this.ball.vy * k);
                this.ball.vx = -this.ball.vx;
            }
        }
    } else {
        if (p1.x + p1.width >= this.ball.x) {
            var collisionDiff = p1.x + p1.width - this.ball.x;
            var k = collisionDiff / -this.ball.vx;
            var y = this.ball.vy * k + (this.ball.y - this.ball.vy);
            if (y >= p1.y && y + this.ball.height <= p1.y + p1.height) {
                // collides with the left paddle
                this.ball.x = p1.x + p1.width;
                this.ball.y = Math.floor(this.ball.y - this.ball.vy + this.ball.vy * k);
                this.ball.vx = -this.ball.vx;
            }
        }
    }

    // Top and bottom collision
    if ((this.ball.vy < 0 && this.ball.y < 0) ||
        (this.ball.vy > 0 && this.ball.y + this.ball.height > this.height)) {
        this.ball.vy = -this.ball.vy;
    }

    if (this.ball.x >= this.width) {
        this.score(p1);
        port.send(textEncoder.encode("L"));
        port.send(textEncoder.encode(" P1: " + p1.score + " P2: " + p2.score)).catch(error => {
            console.log('Send error: ' + error);
        });
    } else if (this.ball.x + this.ball.width <= 0) {
        this.score(p2);
        port.send(textEncoder.encode("L"));
        port.send(textEncoder.encode(" p1: " + p1.score + "-p2: " + p2.score)).catch(error => {
            console.log('Send error: ' + error);
        });
    }


};

Game.prototype.score = function (p) {
    // player scores
    p.score++;
    var player = p == p1 ? 0 : 1;

    // set ball position
    this.ball.x = this.width / 2;
    this.ball.y = p.y + p.height / 2;

    // set ball velocity
    this.ball.vy = Math.floor(Math.random() * 12 - 6);
    this.ball.vx = 7 - Math.abs(this.ball.vy);
    if (player == 1)
        this.ball.vx *= -1;
};


// PADDLE
function Paddle(x, y) {
    this.x = x;
    this.y = y;
    this.width = 7;
    this.height = 48;
    this.score = 0;
}

Paddle.prototype.draw = function (p) {
    p.fillRect(this.x, this.y, this.width, this.height);
};


// BALL
function Ball() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.width = 10;
    this.height = 10;
}

Ball.prototype.update = function () {
    this.x += this.vx;
    this.y += this.vy;
};

Ball.prototype.draw = function (p) {
    p.fillRect(this.x, this.y, this.width, this.height);
};


//DISPLAY
function Display(x, y) {
    this.x = x;
    this.y = y;
    this.value = 0;
}

Display.prototype.draw = function (p) {
    p.fillText(this.value, this.x, this.y);
};


// KEY LISTENER
function KeyListener() {
    this.pressedKeys = [];

    this.keydown = function (e) {
        this.pressedKeys[e.keyCode] = true;
    };

    this.keyup = function (e) {
        this.pressedKeys[e.keyCode] = false;
    };

    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
}

KeyListener.prototype.isPressed = function (key) {
    return this.pressedKeys[key] ? true : false;
};

KeyListener.prototype.addKeyPressListener = function (keyCode, callback) {
    document.addEventListener("keypress", function (e) {
        if (e.keyCode == keyCode)
            callback(e);
    });
};


// Initialize our game instance
var game = new Game();

function MainLoop() {
    game.update();
    game.draw();
    // Call the main loop again at a frame rate of 30fps
    setTimeout(MainLoop, 33.3333);
}


MainLoop();

setInterval(function () { port.send(textEncoder.encode("H")); }, 50);