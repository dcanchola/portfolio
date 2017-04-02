var rotA= 0;
var rotB= 0;
var rotC= 0;
var rotD= 0;
var rotE= 0;
var rotF= 0;
var rotG= 0;
var rotH= 0;
var rotI= 0;
/*var numberOfCircles = 2200; Fix this, it crashes
var circle = [1];*/

function setup() {
  createCanvas(1280, 720);
  /*for (var i = 0; i < circle.length; i++) { Also fix this
	 circle.push(new Circle());
    //circle[i] = new Circle(color(255, random(245, 250), random(190, 235)), 2, 2, random(width), random(height), random(.3, .9), 0);
  }*/

}

function draw() {
  // put drawing code here
  background(3, 4, 33);

  /*FIX
  for (var i = 0; i < circle.length; i++) {
    circle[i].display(); 
    circle[i].move();
  }*/
	
  ellipseMode(CENTER);
  fill(212, 113, 0);
  ellipse(0, 0, 275, 275); //sun
  
  push();
  rotate(radians(rotA));
  stroke(77, 78, 79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 455, 455);
  noStroke();
  fill(228, 237, 237);
  ellipseMode(CENTER);
  ellipse(175, -145, 30, 30); //mercury
  pop();
  
  rotA+=.1;
  
  push();
  rotate(radians(rotB));
  stroke(77, 78, 79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 720, 720);
  noStroke();
  fill(224, 87, 45);
  ellipseMode(CENTER);
  ellipse(200, 300, 50, 50); //venus
  pop();
  
  rotB+=.06;
  
  push();
  rotate(radians(rotC));
  stroke(77, 78, 79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 960, 960);
  noStroke();
  fill(68, 157, 201);
  ellipseMode(CENTER);
  ellipse(475, 60, 47, 47); //earth
  pop();
  
  rotC+=.12;
  
  push();
  rotate(radians(rotD));
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 1225, 1225);
  noStroke();
  fill(207, 158, 74);
  ellipseMode(CENTER);
  ellipse(600, -110, 35, 35);//mars
  pop();
  
  rotD+=.08;
  
  push();
  rotate(radians(rotE));
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 1500, 1500);
  noStroke();
  fill(209, 123, 77);
  ellipseMode(CENTER);
  ellipse(640, 400, 130, 130); //jupiter
  pop();
  
  rotE+=.2;
  
  push();
  rotate(radians(rotF));
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 1790, 1790);
  noStroke();
  fill(230, 209, 140);
  ellipseMode(CENTER);
  ellipse(680, 600, 115, 115); //saturn
  pop();
  
  rotF+=.1;
  
  push();
  rotate(radians(rotG));
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 2090, 2090);
  noStroke();
  fill(175, 196, 219);
  ellipseMode(CENTER);
  ellipse(1030, -150, 90, 90); //uranus
  pop();
  
  rotG+=.101;
  
  push();
  rotate(radians(rotH));
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 2400, 2400);
  noStroke();
  fill(95, 147, 207);
  ellipseMode(CENTER);
  ellipse(1130, -400, 85, 85); //neptune
  pop();
  
  rotH+=.13;
  
  push();
  rotate(radians(rotI));
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 2700, 2700);
  noStroke();
  fill(87, 136, 250);
  ellipseMode(CENTER);
  ellipse(1210, -600, 20, 20); //neptune
  pop();
  
  rotI+=.11;
} 

/*This will crash your computer so fix it

function Circle() {
	
  //Properties of circle/constructor
  this.circleColor = color(255, random(245, 250), random(190, 235));
  this.circleWidth = 2;
  this.circleHeight = 2;  
  this.circleX = random(width);
  this.circleY = random(height);
  this.speedX = random(.3,.9);
  this.speedY = 0;

  //Methods

  this.display = function() {
    noStroke();
    ellipseMode(CENTER);
    fill(this.circleColor);
    ellipse(this.circleX, this.circleY, this.circleWidth, this.circleHeight);
  }

  this.move = function() {
    this.circleX += this.speedX; 
    this.circleY += this.speedY; 

    if (this.circleX > width || this.circleX < 0) {
      this.circleX = -1;  
      this.circleX += this.speedX;
    }


    if (this.circleY > height || this.circleY < 0) {
      this.circleY = -1; 
      this.circleY += this.speedY;
    }
  }

}
*/

