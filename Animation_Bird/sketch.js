//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var Bird;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a sprite and add the 3 animations
  Bird = createSprite(400, 400, 25, 50);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = Bird.addAnimation("floating", "assets/BirdFront/BirdFront_00.png", "assets/BirdFront/BirdFront_49.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  Bird.addAnimation("moving", "assets/Bird/BirdFly00.png", "assets/Bird/BirdFly49.png");

  Bird.addAnimation("spinning", "assets/BirdFrontHappy/BirdFrontHappy_00.png", "assets/BirdFrontHappy/BirdFrontHappy_49.png");

  Bird.onMousePressed = function() {
    Bird.changeAnimation("spinning");
    }

}

function draw() {
  background(255,255,255);

  function windowResized() {
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}

  //or by applying a force toward a point
Bird.attractionPoint(.2, mouseX, mouseY);
//since the force keeps incrementing the speed you can
//set a limit to it with maxSpeed
Bird.maxSpeed = 5;

  //if mouse is to the left
  if(mouseX < Bird.position.x - 10) {
    Bird.changeAnimation("moving");
    //flip horizontally
    Bird.mirrorX(1);
    //negative x velocity: move left
    Bird.velocity.x = - 4;
  }
  else if(mouseX > Bird.position.x + 10) {
    Bird.changeAnimation("moving");
    //unflip
    Bird.mirrorX(-1);
    Bird.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    Bird.changeAnimation("floating");
    Bird.velocity.x = 0;
  }

    if(mouseIsPressed) {
      //the rotation is not part of the spinning animation
      Bird.rotation -= 5;
      Bird.changeAnimation("spinning");
    }
    else {
      Bird.rotation = 0;
      }
  //draw the sprite
  drawSprites();
}
