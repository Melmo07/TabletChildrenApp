var mouse_moved = false;
var touch_started = false;
var dog_walk;
var dog_sprite;


function setup() {
  createCanvas(windowWidth, windowHeight);


  // Create the dog sprite and add it's animations
  dog_sprite = createSprite(50, windowHeight/2, 250, 165);
  dog_sprite.addAnimation("walk", "assets/dog_walk_00000.png", "assets/dog_walk_00019.png");
  dog_sprite.addAnimation("sit","assets/sitting_dog_00000.png", "assets/sitting_dog_00019.png");
}

function draw() {
  clear();
  background('white');
  frameRate(30);


  // Mobile friendly controls
  var eventX;
  if (isTouch()) {
    eventX = touchX;
  } else {
    eventX = mouseX;
  }

  //if mouse is to the left
  if(eventX < dog_sprite.position.x - 10) {
    dog_sprite.changeAnimation('walk');
    // flip horizontally
    dog_sprite.mirrorX(-1);
    // move left
    dog_sprite.velocity.x = - 4;
  }
  else if(eventX > dog_sprite.position.x + 10) {
    dog_sprite.changeAnimation('walk');
    // flip horizontally
    dog_sprite.mirrorX(1);
    // move right
    dog_sprite.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    dog_sprite.velocity.x = 0;
  }

  //draw the sprite
  drawSprites();
}

function touchStarted() {
  touch_started = true;
  dog_sprite.changeAnimation('sit');
}

function mouseMoved() {
  mouse_moved = true;
}

function isTouch() {
  return touch_started && !mouse_moved;
}
