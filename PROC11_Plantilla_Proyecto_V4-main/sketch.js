var shipImg1,ship;
var seaImg1,sea ;


function preload(){

  
shipImg1= loadAnimation ("ship-1.png", "ship-2.png");
seaImg1= loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite (200,200,40,50);
  ship.addAnimation("ship", shipImg1);
  ship = createSprite (50,160,20,50);
}

function draw() {
  background("blue");
  
  if (sea.x <0){
sea.x=sea.width/2;
  }
  
 drawSprites;
}