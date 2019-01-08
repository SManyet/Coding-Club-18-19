// main runner file

var board;
var snake;
var food;

function setup() {
    createCanvas(windowHeight, windowHeight);
    board = new Board();
    snake = new Snake();
    food = new Food();
}

function keyTyped() {
    snake.steer(key);
}

function draw() {
    background(0);
    frameRate(board.getFR());
    board.display();
    food.display();
    snake.display();
    snake.update();
}