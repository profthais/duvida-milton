var vida = 100;
var morte = 30;
var box;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200,200,10,10);
}

function draw() {
  background(220);

  if(mousePressedOver(box)){
    vida = vida - morte;
  }
  
  if(vida < 0){
    box.destroy();
  }
  
  drawSprites();
}