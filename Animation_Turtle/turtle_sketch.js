var mouse_moved = false;
var touch_started = false;
var turtle_walk;
var turtle_hide;
var turtle_sprite;


function setup() {
  createCanvas(windowWidth, windowHeight);


  // Create the turtle sprite and add it's animations
  turtle_sprite = createSprite(50, windowHeight/2, 250, 165);
  turtle_sprite.addAnimation("walk", "assets/turtle_walk_00000.png", "assets/turtle_walk_00039.png");
  turtle_sprite.addAnimation("hide","assets/turtle_hide_00000.png", "assets/turtle_hide_00019.png");
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
  if(eventX < turtle_sprite.position.x - 10) {
    turtle_sprite.changeAnimation('walk');
    // flip horizontally
    turtle_sprite.mirrorX(-1);
    // move left
    turtle_sprite.velocity.x = - 0.7;
  }
  else if(eventX > turtle_sprite.position.x + 10) {
    turtle_sprite.changeAnimation('walk');
    // flip horizontally
    turtle_sprite.mirrorX(1);
    // move right
    turtle_sprite.velocity.x = 0.7;
  }
  else {
    //if close to the mouse, don't move
    turtle_sprite.velocity.x = 0;
  }

  //draw the sprite
  drawSprites();
}

function touchStarted() {
  touch_started = true;
  turtle_sprite.changeAnimation('hide');
}

function mouseMoved() {
  mouse_moved = true;
}

function isTouch() {
  return touch_started && !mouse_moved;
}
