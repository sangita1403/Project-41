class Drop{
    constructor(x,y){
     var options = {
       'restitution' : 0.1,
       'friction' : 0.01
     }
     this.drop = Bodies.circle(x,y,4,options);
     this.radius = 4
     World.add(world,this.drop);
    }
    updateY(){
        if(this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,600)});
        }
    }
    display(){
        noStroke();
        ellipseMode(RADIUS);
        fill("Blue")
        ellipse(this.drop.position.x,this.drop.position.y,5,5);
    }
}