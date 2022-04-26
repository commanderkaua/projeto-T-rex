var trex, trex_correndo;
var chao, chao_imagem;
var chao2;
var nuvem, nuvem_imagem;
var cactoImg1, cactoImg2, cactoImg2, cactoImg3, cactoImg4, cactoImg5, cactoImg6;
var aleatorio;
var cacto;
var pontos;

function preload(){
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
  chao_imagem = loadImage("ground2.png");
  nuvem_imagem = loadImage("cloud.png");
  cactoImg1 = loadImage("obstacle1.png");
  cactoImg2 = loadImage("obstacle2.png");
  cactoImg3 = loadImage("obstacle3.png");
  cactoImg4 = loadImage("obstacle4.png");
  cactoImg5 = loadImage("obstacle5.png");
  cactoImg6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("correndo", trex_correndo);
  trex.depth = 2;
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite chao (solo)
  chao = createSprite(200,180,400,20);
  chao.addImage("chao que mexe", chao_imagem);
  chao.x = chao.width/2;
  chao.velocityX = -3;

  chao2 = createSprite(200, 193, 400, 10);
  chao2.shapeColor = "white";

  //chão fica invisível
  chao2.visible = false;



  
}

function draw() {

  aleatorio = Math.round(random(10,70));

  background("white");
  corrige_chao();
  //pular quando a tecla espaço for pressionada
  pular();
  criar_cactos();
  criar_nuvens();

 //impedir que o trex caia
  trex.collide(chao2);
  drawSprites(); 
}

function pular(){
  if(keyDown("space") && trex.isTouching(chao)) {
    trex.velocityY = -13;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
}

function corrige_chao(){
    if(chao.x<0){
        chao.x = chao.width/2;
    }
}

function corrige_chao2(){
  if(chao2.x<0){
      chao2.x = chao2.width/2;
  }
}

function criar_nuvens(){
  if(frameCount%120===0){
    nuvem = createSprite(650,aleatorio,10,10);
    nuvem.velocityX = -2;
   nuvem.addImage("passando",nuvem_imagem); 
   nuvem.scale = 1;
   nuvem.depth = 1;
   nuvem.lifetime = 700;
  }
}
function criar_cactos(){
  if(frameCount%440===0){
    cacto = createSprite(650,170,10,10);
    cacto.velocityX = -3;
    cacto.scale = 0.5;
    cacto.depth = 1;
    cacto.lifetime = 700;

    switch(Math.round(random(1,6))){
case 1:
  cacto.addImage(cactoImg1);
  cacto.scale = 0.4 ;
  break;
case 2:
cacto.addImage(cactoImg2);
cacto.scale = 0.5;
  break;
case 3:
cacto.addImage(cactoImg3);
cacto.scale = 0.3;
  break;
case 4:
cacto.addImage(cactoImg4);
cacto.scale = 0.5;
  break;
case 5:
cacto.addImage(cactoImg5);
cacto.scale = 0.4;
  break;
case 6:
cacto.addImage(cactoImg6);
cacto.scale = 0.5;
  break;

default:
break;
    }
   
  }
}