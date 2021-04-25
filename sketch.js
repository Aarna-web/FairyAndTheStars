var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png" , "image/fariyImage2.png");
	fairyVoice = loadSound("sound/joyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

    fairy = createSprite(300,400);
    fairy .addImage(fairyImg);	
    fairy . scale = 0.2;
    fairyVoice.play(); 

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

    if( star.y > 478 && starBody.position.y > 478){
       Matter.body.setStatic(starBody,true);
    }

	//writw code to move fairy left and right

}