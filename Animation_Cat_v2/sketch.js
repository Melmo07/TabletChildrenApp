//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var Bird;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //create a sprite and add the 3 animations
  Cat = createSprite(400, 400, 25, 50);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = Cat.addAnimation("walking", "assets/Walking/PinkCat_00.png", "assets/Walking/PinkCat_49.png");
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  Cat.addAnimation("walking", "assets/Walking/PinkCat_00.png", "assets/Walking/PinkCat_49.png");

  Cat.addAnimation("angry", "assets/AngryCat/AngryCat_00.png", "assets/AngryCat/AngryCat_49.png");

  Cat.onMousePressed = function() {
    Cat.changeAnimation("angry");
    }

}

function draw() {
  background(windowWidth, windowHeight);

  /*function windowResized() {
  console.log("resized:" + windowWidth);
	resizeCanvas(windowWidth, windowHeight);
}*/

  //or by applying a force toward a point
Cat.attractionPoint(.2, mouseX, mouseY);
//since the force keeps incrementing the speed you can
//set a limit to it with maxSpeed
Cat.maxSpeed = 5;

  //if mouse is to the left
  if(mouseX < Cat.position.x - 10) {
    Cat.changeAnimation("walking");
    //flip horizontally
    Cat.mirrorX(1);
    //negative x velocity: move left
    Cat.velocity.x = - 4;
  }
  else if(mouseX > Cat.position.x + 10) {
    Cat.changeAnimation("walking");
    //unflip
    Cat.mirrorX(-1);
    Cat.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    //Cat.changeAnimation("floating");
    Cat.velocity.x = 0;
  }

    if(mouseIsPressed) {
      //the rotation is not part of the spinning animation
      //Cat.rotation -= 5;
      Cat.changeAnimation("angry");
      Cat.scale += 0.05;

    }
    else {
      //Cat.rotation = 0;
      Cat.scale = 1;

      }
  //draw the sprite
  drawSprites();
}
