var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ground1,box1,box2,box3,paper1,paperObject;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper();
	ground1=new Ground()
	box1 = new Box(560,555,20,100);
	box2 = new Box(738,555,20,100);
	box3 = new Box(645,595,150,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  keyPressed();
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85});
	    Matter.Body.setStatic(paper1,false);

	}
}

