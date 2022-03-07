
var ufo, ufo_img;
var invisibleGround;
var ground;
var nextButton;
var alien, alien_img;
var run;

var roadImg;

var plant, plantImg;

var bgImg1;
var bgImg2;

var gameState = 0;
var ENTER = 0;
var PLAY = 1;
var EXIT = 2;


function preload()
{
  ufo_img    = loadImage("ufo.png");
  bgImg1     = loadImage("bg1_img.jpg");  
  alien_img  = loadImage("alien.png");
  bgImg2     = loadImage("cityImage.png");
  plantImg   = loadImage("plant.png");
  roadImg    = loadImage("road.jpg")
  //running animation
  run    = loadAnimation("run_1.png", "run_2.png", "run_3.png", "run_4.png", "run_5.png", "run_6.png");
}

function setup()
{
  createCanvas(windowWidth, windowHeight)
  
  //create a ufo sprite
 ufo = createSprite(width/2, 60);
 ufo.addImage(ufo_img);
 ufo.scale = 0.3;

 //create a ground sprite
 ground = createSprite(width/2,height - 300, width, 20);
 ground.shapeColor = 255;
 ground.visible = false;

 //create a invisible ground sprite
 invisibleGround = createSprite(width/2, height-299, 20, 20);
 invisibleGround.visible = false;

 //nextButton = createSprite(width, height);
 nextButton = createImg("ufo.png");
 nextButton.position(width - 50, height - 50);
 nextButton.size(50,50);

 //creating alien
 alien = createSprite(100,620);
 alien.addAnimation("running", run);
 alien.scale = 5; 
 alien.visible = false;

}

function draw()
{
if(gameState === 0)
{
  background(bgImg1)

  
  //ufo arrival
  if(keyDown("DOWN_ARROW"))
  {
    ufo.velocityY = 2;
  }

  //ufo landing
  if(ufo.isTouching(ground))
  {
    fill(255);
    stroke(255);
    textSize(50);
    text("UFO has landed", width/2 - 160, 200);
    nextButton.mouseClicked(stateChange);
  }
 
  ufo.collide(invisibleGround)
  
} 
 if (gameState == 1)
{
  background(bgImg2); 
  ufo.visible = false;
  alien.visible = true;
  
  invisibleGround.y = alien.y + 60;
  invisibleGround.visible = true;
  

  createPlant()
  


}



 drawSprites()
}
function stateChange()
{
  gameState = 1;
  
}


function createPlant()
{
  for (var i=300; i<width; i=i+400)
  { 
    plant = createSprite(i, 550);
    plant.addImage(plantImg);
    plant.scale = 0.7;
  }
}