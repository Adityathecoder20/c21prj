var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(800,200,thickness,height);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="red";
  wall.shapeColor="yellow";

  bullet.velocityX = speed;
}

function draw() {
  background("violet");  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var d=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(d>10)
    {
      wall.shapeColor="blue";
    }
    if(d<10)
    {
      wall.shapeColor="green";
    }
  }
}
function hasCollided(lBullet,lWall)
{
  bulletRightEdge=lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}