var car, wall, speed, weight;

function setup() {
  createCanvas(1000,200);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(20, 100, 30, 30);
  car.shapeColor = "white";

  wall = createSprite(800, 100, 30, 80);
  wall.shapeColor = "brown";

  car.velocityX = speed;
}

function draw() {
  background("black");
if (wall.x - car.x <= car.width/2 + wall.width/2) {
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed / 22500;
  if (deformation > 180) {
    car.shapeColor = "red";
  }
  if (deformation < 180 && deformation > 100) {
    car.shapeColor = "yellow";
  }
  if (deformation < 100) {
    car.shapeColor = "green";
  }
}
  drawSprites();
}