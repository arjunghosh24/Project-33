class Particles 
{
    constructor(x, y)
    {
        var options = 
        {
            restitution: 0.001,
            densiy: 0.001,
            frictionAir: 1,
        }
        this.r = 7;
        this.image = loadImage("snow4.jpg");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display() 
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }

};