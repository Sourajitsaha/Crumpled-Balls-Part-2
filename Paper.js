class Paper{
    constructor(x,y,radius){
      var Paper_options={
            restitution:0.3,
            friction:0.5,
            density:0.6
        }
        this.body=Bodies.circle(x,y,radius,Paper_options);
        this.radius=radius;
        this.image=loadImage("images/paper.png");
        World.add(world,this.body);  
    }
    display(){
        var pos =this.body.position;
        console.log(pos);
        console.log(this.image);
        //fill("purple");
   
        push();
        fill("purple");
        translate(pos.x,pos.y);
        imageMode(CENTER);
			  image(this.image, 0,0,50, 50)
        // imageMode(CENTER);
        // image(this.image,0,0,50, 50);
        pop();      
      }
};