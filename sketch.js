var movingRect, fixedRect;

function setup() {
  createCanvas(1200,400);
  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "blue";
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2) { 
    fixedRect.shapeColor = "yellow"; movingRect.shapeColor = "yellow"; } else 
  { fixedRect.shapeColor = "blue"; movingRect.shapeColor = "blue" }

  drawSprites();
}