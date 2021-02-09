
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box=[]
var ground
var engine,world,ball,slingshot

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(650,500,1300,20)

for(var i=0;i<6;i++){
box[i]=new Box(800,100,70,70)
}

for(var i=6;i<12;i++){
	box[i]=new Box(900,100,70,70)
	}

	for(var i=12;i<18;i++){
		box[i]=new Box(1000,100,70,70)
		}

		
	for(var i=18;i<24;i++){
		box[i]=new Box(700,100,70,70)
		}


		ball=new Stone(200,200,40)
		slingshot=new SlingShot(ball.body,{x:500,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ground.display()

  for(var i=0;i<6;i++){
	box[i].display();}


	for(var i=6;i<12;i++){
	
		box[i].display();}
	
		for(var i=12;i<18;i++){
			
			box[i].display();}
	
			
		for(var i=18;i<24;i++){
			
			box[i].display();}

			ball.display();
			slingshot.display();
	
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}



