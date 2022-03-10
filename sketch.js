var rocket,rocketImg;
var space,spaceImg;
var star,starImg,starsGroup;
var obstacle,obstacleImg,obstaclesGroup;
var gameState = "play";


function preload(){
rocketImg = loadImage("rocket1.png");
spaceImg = loadImage("space.jpg");
starImg = loadImage("star.png");
obstacleImg = loadImage("obstacle.jpg");

}

function setup() {
  createCanvas(400,400);

rocket = createSprite(200,350,20,20);
rocket.addImage("rocket", rocketImg);
rocket.scale = 0.15;

space = createSprite(200,200);
space.addImage("space",spaceImg);
space.velocityY = 1;

starsGroup = new Group();
obstaclesGroup = new Group();

}

function draw() {
 background(0);

 if (gameState === "play") {
  if(keyDown("left_arrow")){
    rocket.x = rocket.x - 3;
  }
  
  if(keyDown("right_arrow")){
    rocket.x = rocket.x + 3;
  }
  
  if(keyDown("up_arrow")){
    rocket.y =rocket.y -3;
  }
 if(keyDown("down_arrow")){
   rocket.y =rocket.y +3;
 }
  
  if(space.y > 350){
    space.y = 300
  }
}




rocket.depth = space.depth;
rocket.depth +=1;


spawnstars();
spawnobstacles();

drawSprites();




  
  function spawnstars(){
    if(frameCount % 60 === 0 ){
    star = createSprite(200,-50);
    star.scale = 0.025;
    star.x = Math.round(random(10,400));
    star.addImage(starImg);
    star.velocityY = 2;
    star.lifetime = 405;
    starsGroup.add(star);
    
    }
      
    }
}
function spawnobstacles(){
  if(frameCount % 60 === 0 ){
  obstacle = createSprite(200,-50);
  obstacle.scale = 0.025;
  obstacle.x = Math.round(random(10,400));
  obstacle.addImage(obstacleImg);
  obstacle.velocityY = 2;
  obstacle.lifetime = 405;
  obstaclesGroup.add(obstacle);
  
  }
    
  }
