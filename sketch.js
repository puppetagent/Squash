var ball,img,paddle;


function preload() {
  ballImage = loadImage ("ball.png");
  paddleImage = loadImage ("paddle.png");
  
  
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite (200,200,10,10);
   ball. addImage (ballImage);
   ball.velocityX=9;
  paddle = createSprite (370,200,10,10);
  paddle.addImage (paddleImage);

}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites ();
  
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  
  
  ball.bounceOff (paddle,randomVelocity);
  
  if(keyDown(UP_ARROW))
  {
   paddle.y= paddle.y-20;  
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y= paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{

 var rand = Math.round(random(1,12)) 
 ball.velocityY= rand ;
 
}

