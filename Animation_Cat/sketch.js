//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed
var stretchy
var Cat;

function setup() {
  createCanvas(800,400);
Cat = loadImage("assets/Walking/PinkCat_00.png");
  //Cat = createSprite(300, 300, 25, 50);

  //Cat = loadImage("assets/CatWalk.jpg");
  //  var myAnimation = Cat.addAnimation("normal", "assets/Walking/PinkCat_00.png", "assets/Walking/PinkCat_49.png");

stretchy.draw = function() {

    //the center of the sprite will be point 0,0
    //"this" in this function will reference the sprite itself
    fill(237,50,50);

    //make the ellipse stretch in the sprite direction
    //proportionally to its speed
    push();
    rotate(radians(this.getDirection()));
    Cat(0,0, 100+this.getSpeed(), 100-this.getSpeed());
    pop();

    stretchy.maxSpeed = 10;
}

function draw() {
  background(255,255,255);

  //mouse trailer, the speed is inversely proportional to the mouse distance
  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;

  if(mouseX < stretchy.position.x - 10) {
    stretchy.changeAnimation("normal");
    //flip horizontally
    stretchy.mirrorX(1);
    //negative x velocity: move left
    stretchy.velocity.x = - 4;
  }
  else if(mouseX > Cat.position.x + 10) {
    Cat.changeAnimation("normal");
    //unflip
    Cat.mirrorX(-1);
    Cat.velocity.x = 4;
  }
  else {
    //if close to the mouse, don't move
    Cat.changeAnimation("normal");
    Cat.velocity.x = 0;
  }

  drawSprites();
}
}

