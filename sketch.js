var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var engine,world;
var redBottom,redRight,redLeft;
var redBottomSprite,redRightSprite,redLeftSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redBottomSprite=createSprite(360,650,200,20);
	redBottomSprite.shapeColor='red';

	redRightSprite=createSprite(460,610,20,100);
	redRightSprite.shapeColor='red';

	redLeftSprite=createSprite(260,610,20,100);
	redLeftSprite.shapeColor='red';

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	redBottom = Bodies.rectangle(360,630,200,20);
	World.add(world,redBottom);

	redRight = Bodies.rectangle(460,610,20,100);
	World.add(world,redRight);

	redLeft = Bodies.rectangle(260,610,20,100);
	World.add(world,redLeft);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  redBottomSprite.x=redBottom.position.x
  redBottomSprite.y=redBottom.position.y

  redRightSprite.x=redRight.position.x
  redRightSprite.y=redRight.position.y

  redLeftSprite.x=redLeft.position.x
  redLeftSprite.y=redLeft.position.y
  
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



