const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin, dustbinImg, paperObject, paperImg; 
var boxSide1, boxSide2, boxSide3;

function preload(){
	paperImg = loadImage("paper.png");
	dustbinImg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	paper = Bodies.circle(width/2,670,5,{restitution:0.3, isStatic:false, friction: 0.3, density:1.2});
	World.add(world,paper);
	
	var paper_options = {
		restitution: 0.3
	}

	paperObject = createSprite(width/2,670,10,10,paper_options);
	paperObject.addImage(paperImg);
	paperObject.scale = 0.2;
	


	ground = new Ground(1,690,400,20);

	dustbin = createSprite(565,660,20,20);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.2;

	// boxSide1 = createSprite(565,690,140,10);
	// boxSide1.shapeColor = "white";

	// boxSide2 = createSprite(500,660,10,50);
	// boxSide2.shapeColor = "white";

	// boxSide3 = createSprite(630,660,10,50);
	// boxSide3.shapeColor = "white";

	Engine.run(engine);
  
}
function draw() {
  	background(200);
	  Engine.update(engine);

	  paperObject.x = paper.position.x;
	  paperObject.y = paper.position.y;
  
  	ground.display();
	// paperObject.display();

  	drawSprites();
}
function keyPressed(){
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.x,paper.body.position,{x:1,y:-5});
	}
	
}
