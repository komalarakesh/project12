var path, Runner2_running, Runner_collided;

function preload(){
  //pre-load images
  path = loadImage("path.png");
  Runner2_running = loadAnimation("Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  scear = createSprite(200,200);
  scear.addImage(path)
  scear.VelocityY =4;
  scear.scale=1.2;

Runner2 = createSprite(200,322,20,50);
Runner2.addAnimation("running", Runner2_running);
Runner2.scale = 0.1;
}

function draw() {
  background(0);

  if(scear.y > 400 ){
    scear.y = hight/1;
  }

  drawSprites();

}
