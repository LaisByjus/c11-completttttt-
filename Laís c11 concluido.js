var homenzinhoRun
var pistaRun
var pisoInvisibleLeft
var pisoInvisible



function preload(){
  //imagens pré-carregadas
homenzinhoRun=loadAnimation("Runner-1.png","Runner-2.png");
pistaRun=loadImage("path.png");
}


function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,400);
  path.addImage(pistaRun);
  path.velocityY=-5;
  
  homenzinhoRun=createSprite(130,200,30,30);
  homenzinhoRun.addAnimation("Runner-1.png","Runner-2.png");
  homenzinhoRun.scale= 0.1;

  pisoInvisibleLeft=createSprite(20.400,200);
  pisoInvisibleLeft.visible=false;
  
  pisoInvisible=createSprite(400,200);
  pisoInvisible.visible=false;

 
  //crie sprite aqui
}

function draw() {

  if(keyDown("right")){
    homenzinhoRun.x=homenzinhoRun.x+4;
  }
   if(keyDown("left")){
    homenzinhoRun.x=homenzinhoRun.x-4;
  }
  homenzinhoRun.bounceOff(pisoInvisible);
  homenzinhoRun.bounceOff(pisoInvisibleLeft);
  background(0);
  if(path.y < 0){
    path.y = 0;
   path.y = path.width;
    //path.y = path.width/8;

  }

  drawSprites();
}
