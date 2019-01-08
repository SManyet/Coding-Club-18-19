// board object file

class Board {
    constructor() {
        this.score = 0;
        this.fr = 15;
    }
    
    display() {
        push();
        fill(0, 255, 0);
        text('Score: ' + this.score, windowHeight/2, 30);
        text('Speed: ' + round(100 * this.fr/15) + '%', windowHeight/2, 50);
        pop();
    }
    
    incFR() {
        this.fr*=1.03;
    }
    incScore() {
        this.score++;
    }
    
    getFR() {
        return this.fr;
    }
}