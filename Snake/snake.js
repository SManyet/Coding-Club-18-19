// snake class

class Snake {
    constructor() {
        this.body = [[16, 16],
                     [15, 16],
                     [14, 16]]
        this.direction = 'd';
        this.directionMap = {'w': [0, -1, 's'], 'a': [-1, 0, 'd'], 's': [0, 1, 'w'], 'd': [1, 0, 'a']}
    }
    
    display() {
        push();
        
        fill(255);
        
        for(var c = 0; c < this.body.length; c++) {
            var x = this.body[c][0];
            var y = this.body[c][1];
            rect(x * windowHeight/32, y * windowHeight/32, windowHeight/32, windowHeight/32);
        }
        
        pop();
    }
    
    update() {
        var newHead = [0, 0];
        newHead[0] = this.body[0][0] + this.directionMap[this.direction][0];
        newHead[1] = this.body[0][1] + this.directionMap[this.direction][1];
        
                
        if((newHead[0] < 0) || (newHead[0] >= 32) || (newHead[1] < 0) || (newHead[1] >= 32) || (snake.intersect(newHead)))  {
            snake.die();
        } else {
            this.body.splice(0, 0, newHead)
        }
        
        var foodPos = food.getPosition();
        if(newHead[0] == foodPos[0] && newHead[1] == foodPos[1])   {
            snake.eat();
        } else {
            this.body.splice(this.body.length - 1, 1);
        }
    }
    
    die() {
        board = new Board();
        snake = new Snake();
        food = new Food();
    }
    
    intersect(newHead) {
        for(var i = 0; i < this.body.length; i++) {
            if(this.body[i][0] == newHead[0] && this.body[i][1] == newHead[1]) {
                return true;
            }
        }
        return false;
    }
    
    eat() {
        food = new Food();
        board.incFR();
        board.incScore();
    }
    
    steer(key) {
        if(this.directionMap[key] && key != this.directionMap[this.direction][2]) {
            this.direction = key;
        }
    }
    
    
}