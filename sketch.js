
// declaring variables

var wall, thickness;
var bullet, speed, weight;




function setup() {

  // crating canvas 
  createCanvas(1600,400);


  // speed in rando
  speed = random(223,321);


  // givig random weight
  weight = random(30,52);

  // thickness random
  thickness = random(22,93);


  // creating bulllet
  bullet = createSprite(50,200,150,15);
  bullet.shapeColor = ("red");


  // creating wall
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = ("white");



  // bullet velocity is speed
  bullet.velocityX = speed;

}

function draw() {
  background(33,47,60);



  if(abs(bullet.x-wall.x) <= (bullet.width/2 + wall.width/2)){
    bullet.velocityX = 0;



  // giving damage by multiplying 0.5 * weight * speed*speed divided by thickness cube
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    

    // if accordin to the damage colour will be changed
     if(damage > 10){

       wall.shapeColor = ("yellow");

     }

    // same as above 
     if(damage < 10){

       wall.shapeColor = ("blue");

     }

  }


  stroke(50,229,229);
  fill(50,229,229);
  textSize(30);
  text("Press CTRL + R To Reset!!",510,320);


  // draws all sprites
  drawSprites();


}