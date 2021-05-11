var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite (600,400,50,80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite (800,400,50,80);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  text("moving"+mouseX+","+mouseY,30,50);

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
     movingRect.shapeColor = "red"; 
     fixedRect.shapeColor = "red"; 
    } 
    else
     { movingRect.shapeColor = "green"; 
     fixedRect.shapeColor = "green"; }

  drawSprites();
}