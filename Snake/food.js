// food

class Food {
    constructor() {
        this.x = round(random(0, 31));
        this.y = round(random(0, 31));
        // this.taste = 'juicy squirt';
    }
    
    display() {
        push();
        
        fill(255,0,0);
        noStroke();
        rect(this.x * windowHeight/32, this.y * windowHeight/32, windowHeight/32, windowHeight/32);
        
        pop;
    }
    
    getPosition() {
        return [this.x, this.y];
    }
}