
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledpaper1,ground,box,box1,box2,dbImage;
function preload()
{
	 dbImage=loadImage('images/dustbin.png')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

crumpledpaper1=new Paper(75,300,30);

ground=new Ground(400,670,800,20);

box=new Box(600,650,200,20);
box2=new Box(690,600,20,120);
box3=new Box(490,600,20,120);
  
//	Engine.run(engine);
  
}


function draw() {
  // rectMode(CENTER);
  background(255);
  Engine.update(engine);
  box.display();
  box2.display();
  box3.display();
  ground.display();
  crumpledpaper1.display();

  image(dbImage, 455, 510, 270, 150);
 // drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce (crumpledpaper1.body,crumpledpaper1.body.position,{x:75,y:-75});
  }
}

