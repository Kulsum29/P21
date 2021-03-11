var bullet;
var wall;
var speed, weight,thickness;
var def,fulldef;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 30);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed/5;
  bullet.shapeColor="gold";
  bullet.depth=wall.depth+1;
  
}

function draw() {
  background(255,255,255);
  
  if(bullet.x-wall.x<=bullet.width/2+wall.width/2 
    && wall.x-bullet.x<=bullet.width/2+wall.width/2){
      bullet.velocityX=0;
      def=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(def<=10){
        wall.shapeColor="green";
        fulldef="Safe"
      }
      else{
        wall.shapeColor="red";
        fulldef="Lethal"
      }
      fill("black");
      textSize(20)
      text("Bullet Weight: "+Math.round(weight)+"\nBullet Speed: "+Math.round(speed)+"\nWall thickness: "
      +Math.round(thickness)+"\nDamage: "+fulldef,600,200)
    }  
  drawSprites();
}