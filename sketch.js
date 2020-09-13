function setup() {
  createCanvas(800,400);
  fixedR=createSprite(400, 200, 50, 50);
  movingR=createSprite(300,100,30,30);
}

function draw() {
  background(255,255,255);  
  
  movingR.x=mouseX;
  movingR.y=mouseY;

  if(movingR.x-fixedR.x<movingR.width/2+fixedR.width/2
    && fixedR.x-movingR.x<movingR.width/2+fixedR.width/2
    && movingR.y-fixedR.y<movingR.height/2+fixedR.height/2
    && fixedR.y-movingR.y<movingR.height/2+fixedR.height/2){
    fixedR.shapeColor = 'purple';
    movingR.shapeColor = 'purple';
  }
  else {
    fixedR.shapeColor = 'blue';
    movingR.shapeColor = 'blue';
  }
  drawSprites();

  text(movingR.width/2+fixedR.width/2,50,50);
  text(movingR.x-fixedR.x,400,50);

}
