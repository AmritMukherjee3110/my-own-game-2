var ball;
var ballImage;
 var pitch;
var pitchImage;
 var msd;
var msdImage;
var shane;
var shaneImage;
var score = 0;

function preload (){
pitchImage = loadImage("pitch.png")
msdImage = loadImage("msd.png")
shaneImage = loadImage("bowling.png")
ballImage = loadImage("ball.png")
}

function setup(){
    createCanvas(1000,600);
    pitch = createSprite(500,300);
    pitch.addImage(pitchImage);
    msd = createSprite(527,100);
    msd.addImage(msdImage)
    msd.scale = 0.035;
    shane = createSprite(430,450);
    shane.addImage(shaneImage)
    shane.scale = 0.2;
     

}





function draw(){
    background("white");
    if (keyDown("LEFT_ARROW")){
        msd.x -=2
    }
    if (keyDown("RIGHT_ARROW")){
        msd.x +=2;
    }

    if (keyDown("l")){
      ball=createSprite(430,420,10,10);
      ball.addImage(ballImage);
      ball.velocityY = -3;
      ball.x = Math.round(random(400,600))
      ball.scale = 0.2;
    }

    if (keyDown("w") && ball.isTouching(msd)){
       ball.velocityX = 5;
       ball.velocityY = -5;
       score = score+6;         
    }

    if (keyDown("s") && ball.isTouching(msd)){
        ball.velocityX = -5;
        ball.velocityY = 0;
        score = score+4;         
     }
 

     if (keyDown("p") && ball.isTouching(msd)){
        ball.velocityX = 5;
        ball.velocityY = 5;
        var def = Math.round(random(1,3));
        score = score+def;         
     }
 

    drawSprites();
}

