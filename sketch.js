var personagem,running;
var ground,groundImage,invisibleBoundaryl,invisibleBoundaryr;
var bomb,bomb_image;

function preload(){
  //imagens pré-carregadas
  running = loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png");
  groundImage = loadImage("path.png");
  bomb_image = loadImage("bomb.png");
}

   function setup(){
    createCanvas(400,400);
    //crie sprite aqui
   
    ground = createSprite(200,200,400,400);
    ground.addImage(groundImage);
    ground.velocityY = 4;
    
    personagem = createSprite(110,310,30,90);
    personagem.addAnimation("run",running);
    personagem.scale = 0.1;
     
   
   
    invisibleBoundaryl = createSprite(380,200,60,400);
    invisibleBoundaryl.visible = false;  
    invisibleBoundaryr = createSprite(25,200,60,400);
    invisibleBoundaryr.visible = false;
     
      
     
  }

function draw() {
 background(0);
 personagem.x = World.mouseX;
 
  if(ground.y > 400){
   ground.y = ground.width/2;
 }
  
    

 personagem.collide(invisibleBoundaryl);
 personagem.collide(invisibleBoundaryr);
  
    drawSprites();
}

 function gerarbombas(){
  if (frameCount % 30 == 0){
    var bomba = createSprite(200,200,30,30);
    bomba.addImage(bomb_image);
    bomb.velocityY = 4;
    bomba.y = Math.round(random(60,340));
    
    ground.depth = bomba.depth
    bomba.depth = bomba.depth + 1;
    
    }
  }
  
  
