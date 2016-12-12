//Collision detection - Bouncing behavior

var HerissonBumping;
var Buisson;
var MARGIN = 40;

function preload() {
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  Herissons = new Group();

  for(var i=0; i<5; i++)
  {
  var HerissonBumping = createSprite(150,150);
  HerissonBumping.addAnimation("normal", "assets/HerissonBumping_00.png", "assets/HerissonBumping_03.png");
  HerissonBumping.addAnimation("Hello", "assets/HerissonBumping_58.png", "assets/HerissonBumping_74.png");
  HerissonBumping.setCollider("HerissonBumping", -2,2,55);
  //Herisson_Bumping.addAnimation("Bumping", "assets/Herisson_Bumping_01", "assets/Herisson_Bumping_74");
  HerissonBumping.setSpeed(random(3,7), random(0, 360));

  //scale affects the size of the collider
  HerissonBumping.scale = random(0.5, 0.8);
  //mass determines the force exchange in case of bounce
  HerissonBumping.mass = HerissonBumping.scale;
  //restitution is the dispersion of energy at each bounce
  //if = 1 the circles will bounce forever
  //if < 1 the circles will slow down
  //if > 1 the circles will accelerate until they glitch
  //circle.restitution = 0.9;
  Herissons.add(HerissonBumping);
  }

  Buissons = new Group();

  for(var i=0; i<2; i++)
  {
  var Buisson = createSprite(random(0,width),random(0,height));
  Buisson.addAnimation("normal", "assets/Buisson.png");
  //setting immovable to true makes the sprite immune to bouncing and displacements
  //as if with infinite mass
  Buisson.immovable = true;

  //rotation rotates the collider too but it will always be an axis oriented
  //bounding box, that is an ortogonal rectangle
  if(i%2==0)
    Buisson.rotation = 90;

  Buissons.add(Buisson);
  }

  //function mouseDragged() {
    //HerissonBumping.changeAnimation("Hello");
    //}

  HerissonBumping.onMousePressed = function (){
      HerissonBumping.changeAnimation("Hello");
      velocity = 0
      HerissonBumping.immovable = true;
  }

  HerissonBumping.onMouseReleased = function (){
      HerissonBumping.changeAnimation("normal");
  }

//HERE trying to change the animation when colliding with smth
    //if("Herisson_Bumping") {
      //changeAnimation("Bumping");
    //}
}



function draw() {
  background(255,255,255);
  //circles bounce against each others and against boxes
  Herissons.bounce(Herissons);
  //boxes are "immovable"
  Buissons.bounce(Herissons);


//HERE trying to add a rotation to the random movement of the hedgehog
//  if(Herisson_Bumping."normal")
//    Herisson_Bumping.rotation-=20


  //all sprites bounce at the screen edges
  for(var i=0; i<allSprites.length; i++) {
  var s = allSprites[i];
  if(s.position.x<0) {
    s.position.x = 1;
    s.velocity.x = abs(s.velocity.x);
  }

  if(s.position.x>width) {
    s.position.x = width-1;
    s.velocity.x = -abs(s.velocity.x);
    }

  if(s.position.y<0) {
    s.position.y = 1;
    s.velocity.y = abs(s.velocity.y);
  }

  if(s.position.y>height) {
    s.position.y = height-1;
    s.velocity.y = -abs(s.velocity.y);
    }
  }

  drawSprites();

}

function windowResized() {
console.log("resized:" + windowWidth);
resizeCanvas(windowWidth, windowHeight);
}
