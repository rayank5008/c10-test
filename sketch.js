var edges
var ship, ship_running
var sea, sea_running

function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea_running=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  //creating sea and ship sprite
  sea=createSprite(300,180,600,10)
  sea.addAnimation("walking",sea_running)
  sea.velocityX=-4
  sea.x=sea.width/2
  
  ship=createSprite(100,180,10,40)
  ship.addAnimation("running",ship_running)
  ship.scale=0.5
  ship.x=50
  edges=createEdgeSprites()
}

function draw() {
  background("white");
console.log(sea.x)

 if(sea.x<0){
   sea.x=sea.width/2
 }
 ship.collide(sea)

 drawSprites()
}

