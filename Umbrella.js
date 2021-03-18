class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        World.add(world,this.umbrella);
        this.image = loadImage("Bruce walking_1.png")
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.umbrella.position.x,this.umbrella.position.y+70,380,380);
    }
}