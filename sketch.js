var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(200,300);
  monkey.addAnimation('moving',monkey_running)
  monkey.scale=0.1
  score = 0
  ground=createSprite(300,340,600,20)
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/10);
  obstacleGroup = new Group()
  FoodGroup= new Group()


}


function draw() {
 background('white')
 text("Score: "+ score, 200,100);
 text('mam rock is big in debug',250,50)
 if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
   obstacle()
   fruits()
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);
  
  
    if(obstacleGroup.isTouching(monkey)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    
    
    //set velcity of each game object to 0
     ground.velocityX = 0;
     monkey.velocityY = 0;
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0)
    
    
    
    
    
    
	 }   
    
    
 
 drawSprites() 
}
function obstacle(){
	if(frameCount % 60 === 0) {
    var rock=createSprite(400,300)
    rock.addImage( obstaceImage )
    rock.velocityX = -(6 + 3*score/100);
    rock.scale=0.2
     obstacleGroup.add(rock)
     rock.debug=true

    }
   
}
function fruits(){
  if(frameCount%60===0){
    var fruits=createSprite(400,250)
fruits.addImage(bananaImage)
fruits.velocityX=-(6+3*score/100)
fruits.scale=0.1
FoodGroup.add(fruits)
  }
}





