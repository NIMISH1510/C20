var fixedRect, movingRect;
var a1,a2,a3,a4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  a1 = createSprite(100,100,50,50);
  a1.shapeColor = "blue";
  a2 = createSprite(200,100,50,50);
  a2.shapeColor = "blue";
  a3 = createSprite(300,100,50,50);
  a3.shapeColor = "blue";
  a4 = createSprite(400,100,50,50);
  a4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(a1,a2)){
  movingRect.shapeColor = "orange";
  a1.shapeColor = "orange";
 }
 else{
  movingRect.shapeColor = "blue";
  a1.shapeColor = "blue"; 
 }

  drawSprites();
}
function isTouching(a1,a2){
  if (a1.x - a2.x < a2.width/2 + a1.width/2
    && a2.x - a1.x < a2.width/2 + a1.width/2
    && a1.y - a2.y < a2.height/2 + a1.height/2
    && a2.y - a1.y < a2.height/2 + a1.height/2) {
    return true;
}
else {
 return false;
}
}

