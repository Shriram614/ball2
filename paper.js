class Paper{
    constructor(){
       
        var options = {
            isStatic :true,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }

        this.body = Bodies.rectangle(600,590,800,10,options);
        this.width = 800;
        this.height = 10;
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position; 
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y,40, 40);
      pop();
    }
 
};
