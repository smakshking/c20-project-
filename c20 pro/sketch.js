var car ;
function setup() {
  createCanvas(800,400);
  car = createSprite(400, 200, 50, 50);
car.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  drawSprites();
}