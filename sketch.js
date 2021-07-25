var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg;
var leafImg;
var redLeafImg;
var orangeLeafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.x= mouseX
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
  
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  createApple();
  createLeaf();
  createOrgLeaf();
  createRedLeaf();

  drawSprites();
}
function createApples(){
  if(frameCount % 80 === 0){
    apple= createSprite(200,10,20,20);
    apple.addImage(appleimg);
    apple.scale=0.05;
    apple.y=Math.round(random(10,60))
    apple.velocityY=4;
    rabbit.depth = apple.depth;
    rabbit.depth = rabbit.depth+1
  }
}
function createLeaf(){
  if(frameCount % 85 === 0){
    var leaf = createSprite(200, 10, 20, 20);
    leaf.addImage(leafImg);
    leaf.scale = 0.07;
    leaf.x = round(random(50, 350));
    leaf.velocityY = 4;
    rabbit.depth = leaf.depth;
    rabbit.depth = rabbit.depth + 1;
  } 
}
  
function createRedLeaf(){
  if(frameCount % 90 === 0){
    var redLeaf = createSprite(200, 10, 20, 20);
    redLeaf.addImage(redLeafImg);
    redLeaf.scale = 0.07;
    redLeaf.x = round(random(50, 350));
    redLeaf.velocityY = 4;
    rabbit.depth = redLeaf.depth;
    rabbit.depth = rabbit.depth + 1;
  }
}
      
function createOrgLeaf(){
  if(frameCount % 85 === 0){
    var orangeLeaf = createSprite(200, 10, 20, 20);
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.scale = 0.07;
    orangeLeaf.x = round(random(50, 350));
    orangeLeaf.velocityY = 4;
    rabbit.depth = orangeLeaf.depth;
    rabbit.depth = rabbit.depth + 1;
  }  
}