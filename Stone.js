class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        
        pop();
      }
}