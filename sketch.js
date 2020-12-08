
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	box1=createSprite(20,200,20,200)
  box2=createSprite(10,200,100,20)
	box3=createSprite(50,200,100,20)

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
 

 
}
function keyPressed() {
     if(keycode === "UP_ARROW"){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  }
}

