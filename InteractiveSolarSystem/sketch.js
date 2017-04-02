var posX, posY;
var rotA= 0;
var rotB= 0;
var rotC = 0;
var rotC1 = 0;
var rotD = 0;
var rotD1= 0;
var rotE = 0;
var rotE1 = 0;
var rotF = 0;
var rotF1 = 0;
var rotG = 0;
var rotG1 = 0;
var rotH = 0;
var rotH1 = 0;
var rotH2 = 0;
var rotI= 0;
var rotI1 = 0;
var mercuryViz = false;
var venusViz = false;
var earthViz = false;
var marsViz = false;
var jupiterViz = false;
var saturnViz = false; 
var uranusViz = false;
var neptuneViz = false;
var plutoViz = false;
var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;
//earth moon
var img11;
//mars moons
var img12, img13;
//jupiter moons
var img14, img15, img16, img17;
//saturn moons
var img18, img19, img20, img21, img22, img23, img24, img25;
//uranus moons
var img26, img27, img28, img29, img30;
//neptune moons
var img31, img32, img33;
//pluto moons
var img34, img35, img36, img37, img38;
var mercuryInfo, venusInfo, earthInfo, marsInfo, jupiterInfo, saturnInfo, uranusInfo, neptuneInfo, plutoInfo;

//button variables
var mercuryX, mercuryY, mercuryW, mercuryH;
var venusX, venusY, venusW, venusH;
var earthX, earthY, earthW, earthH;
var marsX, marsY, marsW, marsH;
var jupiterX, jupiterY, jupiterW, jupiterH;
var saturnX, saturnY, saturnW, saturnH;
var uranusX, uranusY, uranusW, uranusH;
var neptuneX, neptuneY, neptuneW, neptuneH;
var plutoX, plutoY, plutoW, plutoH;
var myColor;
var myColor2;

//xing out of boxes
var infoXPos, infoYPos, infoWidth, infoHeight;

var numberOfCircles = 1800; 
var circle = [];

function setup() {
  var myCanvas = createCanvas(1280, 720);
  myCanvas.parent('container');
  img1= loadImage("sun.png");
  img2 = loadImage("mercury.png");
  img3 = loadImage("venus.png");
  img4 = loadImage("earth.png");
  img5 = loadImage("mars.png");
  img6 = loadImage("jupiter.png");
  img7 = loadImage("saturn.png");
  img8 = loadImage("uranus.png");
  img9 = loadImage("neptune.png");
  img10 = loadImage("pluto.png");
  img11 = loadImage("moon.png");
  img12 = loadImage("marsmoon1.png");
  img13 = loadImage("marsmoon2.png");
  img14 = loadImage("jupitermoon4.png");
  img15 = loadImage("jupitermoon3.png");
  img16 = loadImage("jupitermoon2.png");
  img17 = loadImage("jupitermoon1.png");
  img18 = loadImage("saturnmoon1.png");
  img19 = loadImage("saturnmoon2.png");
  img20 = loadImage("saturnmoon3.png");
  img21 = loadImage("saturnmoon4.png");
  img22 = loadImage("saturnmoon5.png");
  img23 = loadImage("saturnmoon6.png");
  img24 = loadImage("saturnmoon7.png");
  img25 = loadImage("saturnmoon8.png");
  img26 = loadImage("uranusmoon1.png");
  img27 = loadImage("uranusmoon2.png");
  img28 = loadImage("uranusmoon3.png");
  img29 = loadImage("uranusmoon4.png");
  img30 = loadImage("uranusmoon5.png");
  img31 = loadImage("neptunemoon1.png");
  img32 = loadImage("neptunemoon2.png");
  img33 = loadImage("neptunemoon3.png");
  img34 = loadImage("plutomoon1.png");
  img35 = loadImage("plutomoon2.png");
  img36 = loadImage("plutomoon3.png");
  img37 = loadImage("plutomoon4.png");
  img38 = loadImage("plutomoon5.png");
  mercuryInfo = loadImage("MercuryInfo.png");
  venusInfo = loadImage("VenusInfo.png");
  earthInfo = loadImage("EarthInfo.png");
  marsInfo = loadImage("MarsInfo.png");
  jupiterInfo = loadImage("JupiterInfo.png");
  saturnInfo = loadImage("SaturnInfo.png");
  uranusInfo = loadImage("UranusInfo.png");
  neptuneInfo = loadImage("NeptuneInfo.png");
  plutoInfo = loadImage("PlutoInfo.png");
  
  for (var i = 0; i < numberOfCircles; i++) { 
	 circle.push(new Circle());
     //circle[i] = new Circle(color(255, random(245, 250), random(190, 235)), 2, 2, random(width), random(height), random(.3, .9), 0);
  }

}

function draw() {
  // put drawing code here
 background(3, 4, 33);
 myColor = color(10, 1, 55);
 myColor2 = color(209, 129, 25);
 posX = mouseX;
 posY = mouseY;


  /*stars function*/
  for (var i = 0; i < numberOfCircles; i++) {
    circle[i].display(); 
    circle[i].move();
  } 
  
  
  //SUN
  ellipseMode(CENTER);
  fill(212, 113, 0);
  image(img1, -137.5, -137.5);
  
  /* Setup for making moons rotate around planets
  	push();
	rotate(radians(rotA));
	translate(200, 0);
	
	push();
	rotate(rotB));
	ellipse(0, 0, 30, 30);
	ellipse(45, 0, 10, 10); //moon
	pop();
	
	rotA += .1;
	rotB += .3;
	
	pop();
	*/
	
  //RINGS
  stroke(77, 78, 79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 455, 455); //mercury ring
  
  stroke(77, 78, 79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 720, 720); //venus ring
  
  stroke(77, 78, 79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 960, 960); //earth ring
  
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 1225, 1225); //mars ring
  
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 1500, 1500); //jupiter ring
  
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 1790, 1790); //saturn ring
  
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 2090, 2090); //uranus ring
  
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 2400, 2400); //neptune ring
  
  stroke(77,78,79);
  noFill();
  ellipseMode(CENTER);
  ellipse(0, 0, 2700, 2700); //pluto ring
  //END RINGS
  
  //BEGIN PLANETS
  
  //MERCURY
  push();
  rotate(radians(rotA));
  translate(227,0);
  noStroke();
  fill(228, 237, 237); //setup
  image(img2, -15, 0); 
  pop();
  
  rotA+=.2;
  
  if(rotA > 90) {
	rotA = -10; 
  }
 
  //VENUS
  push();
  rotate(radians(rotB));
  translate(335, 0);
  noStroke();
  fill(224, 87, 45);
  image(img3, 0, 0); 
  pop();
  
  rotB+=.06;
  
  if(rotB > 90) {
	rotB = -10; 
  }
  
  //EARTH
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotC));
  translate(480,0);
  imageMode(CENTER);
  image(img4, 0, 0); //earth
  
  push(); //begin moon rotation
  noStroke();
  rotate(radians(rotC1));
  fill(237, 236, 225);
  image(img11, 45, 0); //moon
  pop(); //end moon rotation
  
  pop(); //END PLANET ROTATION
  
  rotC+=.12;
  rotC1+=.3;
  
  if(rotC > 100) {
	rotC = -10; 
	rotC1 = -10;
  }
  
  //MARS  
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotD));
  translate(610,0);
  imageMode(CENTER);
  image(img5, 0, 0); //mars
  
  push(); //begin moon rotation
  noStroke();
  rotate(radians(rotC1));
  fill(224, 212, 173);
  image(img12, 45, 0); //moon
  fill(176, 149, 111);
  image(img13, 0, 45); //moon
  pop(); //end moon rotation
  
  pop(); //END PLANET ROTATION
  
  rotD+=.08;
  rotD1+=.2;
  
  if(rotD > 90) {
	rotD = -10; 
	rotD1 = -10;
  }
  
  
  //JUPITER  
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotE));
  translate(750,0);
  imageMode(CENTER);
  image(img6, 0, 0); //jupiter
  
  push(); //begin moon rotation
  noStroke();
  rotate(radians(-rotE1));
  fill(224, 212, 173);
  image(img14, 100, -40); //moon
  fill(176, 149, 111);
  image(img15, 0, 100); //moon
  fill(184, 101, 33);
  image(img16, -100, 1); //moon
  fill(112, 101, 92);
  image(img17, -50, -100); //moon
  pop(); //end moon rotation
  
  pop(); //END PLANET ROTATION
  
  rotE+=.2;
  rotE1+=.4;
  
  if(rotE > 90) {
	rotE = -10; 
	rotE1 = -10;
  }
  
  //SATURN
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotF));
  translate(895, 0);
  imageMode(CENTER);
  image(img7, 0, 0); //saturn
  
  push(); //begin moon rotation
  noStroke();
  rotate(radians(rotF1));
  fill(224, 212, 173);
  image(img18, 100,-40); //moon
  fill(176, 149, 111);
  image(img19, 0, 100); //moon
  fill(184, 101, 33);
  image(img20, -100, 1); //moon
  fill(112, 130, 92);
  image(img21, 55, -100); //moon
  fill(112, 101, 92);
  image(img22, -30, 100); //moon
  fill(150, 101, 40);
  image(img23, -40, -78); //moon
  fill(112, 137, 145);
  image(img24, 85, 40); //moon
  fill(98, 106, 44);
  image(img25, -55, 35); //moon
  pop(); //end moon rotation
  
  pop(); //END PLANET ROTATION
  
  rotF+=.1;
  rotF1+=.3;
  
  if(rotF > 90) {
	rotF = -10; 
	rotF1 = -10;
  }
 
  
  //URANUS
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotG));
  translate(1045, 0);
  imageMode(CENTER);
  image(img8, 0, 0); //uranus
  
  push(); //begin moon rotation
  noStroke();
  rotate(radians(-rotG1));
  fill(224, 212, 173);
  image(img26, 75, 10); //moon
  fill(176, 149, 111);
  image(img27, 70, -25); //moon
  fill(184, 101, 33);
  image(img28, 50, -55); //moon
  fill(112, 130, 92);
  image(img29, 25, -70); //moon
  fill(112, 101, 92);
  image(img30, -10, -73); //moon
  pop(); //end moon rotation
  
  pop(); //END PLANET ROTATION
  
  rotG+=.06;
  rotG1+=.5;
  
  if(rotG > 90) {
	rotG = -10; 
	rotG1 = -10;
  }
  
  //NEPTUNE
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotH));
  noStroke();
  translate(1200, 0);
  imageMode(CENTER);
  image(img9, 0, 0); //neptune
  
  push(); //begin moon rotation 1
  noStroke();
  rotate(radians(rotH1));
  fill(224, 212, 173);
  image(img31, 60, 10); //moon
  fill(176, 149, 111);
  image(img32, -30, -55); //moon
  pop(); //end moon rotation 1
  
  push(); //begin moon rotation 2
  noStroke();
  rotate(radians(-rotH2));
  fill(184, 101, 33);
  image(img33, 0, 90); //moon
  pop(); //end moon rotation 2
  
  pop(); //END PLANET ROTATION
  
  rotH+=.13;
  rotH1+=.5;
  rotH2+=.5;
  
  if(rotH > 90) {
	rotH = -10; 
	rotH1 = -10;
	rotH2 = -10;
  }
  
  //PLUTO
  push(); //BEGIN PLANET ROTATION
  rotate(radians(rotI));
  noStroke();
  translate(1350, 0);
  imageMode(CENTER);
  image(img10, 0, 0); //pluto
  
  push(); //begin moon rotation
  noStroke();
  rotate(radians(rotI1));
  fill(224, 212, 173);
  image(img34, 45, 0); //moon
  fill(176, 149, 111);
  image(img35, 0, 65); //moon
  fill(184, 101, 33);
  image(img36, -60, -25); //moon
  fill(112, 130, 92);
  image(img37, 25, -70); //moon
  fill(112, 101, 92);
  image(img38, -10, -73); //moon
  pop(); //end moon rotation
  
  pop(); //END PLANET ROTATION
  
  rotI+=.11;
  rotI1+=.2;
  
  if(rotI > 90) {
	rotI = -10; 
	rotI1 = -10;
  }
  
  
  //BUTTONS
  
  //MERCURY
  mercuryX = 228;
  mercuryY = 10;
  mercuryW = 100;
  mercuryH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > mercuryX - mercuryW/2) && 
  (posX < mercuryX + mercuryW/2) && 
  (posY > mercuryY - mercuryH/2) && 
  (posY < mercuryY + mercuryH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(mercuryX, mercuryY, mercuryW, mercuryH);
  fill(255);
  textSize(18);
  text("Mercury", 195, 19);
  
  
  //VENUS
  venusX = 355;
  venusY = 10;
  venusW = 100;
  venusH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > venusX - venusW/2) && 
  (posX < venusX + venusW/2) && 
  (posY > venusY - venusH/2) && 
  (posY < venusY + venusH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(venusX, venusY, venusW, venusH);
  fill(255);
  textSize(18);
  text("Venus", 330, 19);
  
  //EARTH
  earthX = 480;
  earthY = 10;
  earthW = 100;
  earthH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > earthX - earthW/2) && 
  (posX < earthX + earthW/2) && 
  (posY > earthY - earthH/2) && 
  (posY < earthY + earthH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(earthX, earthY, earthW, earthH);
  fill(255);
  textSize(18);
  text("Earth", 460, 19);
  
  //MARS
  marsX = 615;
  marsY = 10;
  marsW = 100;
  marsH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > marsX - marsW/2) && 
  (posX < marsX + marsW/2) && 
  (posY > marsY - marsH/2) && 
  (posY < marsY + marsH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(marsX, marsY, marsW, marsH);
  fill(255);
  textSize(18);
  text("Mars", 595, 19);
  
  //JUPITER
  jupiterX = 750;
  jupiterY = 10;
  jupiterW = 100;
  jupiterH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > jupiterX - jupiterW/2) && 
  (posX < jupiterX + jupiterW/2) && 
  (posY > jupiterY - jupiterH/2) && 
  (posY < jupiterY + jupiterH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(jupiterX, jupiterY, jupiterW, jupiterH);
  fill(255);
  textSize(18);
  text("Jupiter", 722, 19);
  
  //SATURN
  saturnX = 895;
  saturnY = 10;
  saturnW = 100;
  saturnH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > saturnX - saturnW/2) && 
  (posX < saturnX + saturnW/2) && 
  (posY > saturnY - saturnH/2) && 
  (posY < saturnY + saturnH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(saturnX, saturnY, saturnW, saturnH);
  fill(255);
  textSize(18);
  text("Saturn", 870, 19);
  
  //URANUS
  uranusX = 1045;
  uranusY = 10;
  uranusW = 100;
  uranusH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > uranusX - uranusW/2) && 
  (posX < uranusX + uranusW/2) && 
  (posY > uranusY - uranusH/2) && 
  (posY < uranusY + uranusH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(uranusX, uranusY, uranusW, uranusH);
  fill(255);
  textSize(18);
  text("Uranus", 1017, 19);
  
  //NEPTUNE
  neptuneX = 1200;
  neptuneY = 10;
  neptuneW = 100;
  neptuneH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > neptuneX - neptuneW/2) && 
  (posX < neptuneX + neptuneW/2) && 
  (posY > neptuneY - neptuneH/2) && 
  (posY < neptuneY + neptuneH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(neptuneX, neptuneY, neptuneW, neptuneH);
  fill(255);
  textSize(18);
  text("Neptune", 1167, 19);
  
  //PLUTO
  plutoX = 1150;
  plutoY = 710;
  plutoW = 100;
  plutoH = 30;
  rectMode(CENTER);
  noStroke();
  
  if((posX > plutoX - plutoW/2) && 
  (posX < plutoX + plutoW/2) && 
  (posY > plutoY - plutoH/2) && 
  (posY < plutoY + plutoH/2)){
  fill(myColor2);
  }
  
  else{
  fill(myColor);
  }
  
  rect(plutoX, plutoY, plutoW, plutoH);
  fill(255);
  textSize(18);
  text("Pluto", 1129, 715);
  
  /*draws info boxes*/
  isVisible();
 

} 

function mousePressed() {

  /*mercury click, mouse detecting function*/
  if((posX > mercuryX - mercuryW/2) && 
  (posX < mercuryX + mercuryW/2) && 
  (posY > mercuryY - mercuryH/2) && 
  (posY < mercuryY + mercuryH/2)){

	  mercuryViz = true;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  jupiterViz = false;
	  saturnViz = false;
	  uranusViz = false;
	  neptuneViz = false;
	  plutoViz = false;
  }
  
  /*venus click*/
  else if((posX > venusX - venusW/2) && 
  (posX < venusX + venusW/2) && 
  (posY > venusY - venusH/2) && 
  (posY < venusY + venusH/2)){
	  
	  venusViz = true;
	  mercuryViz = false;
	  earthViz = false;
	  marsViz = false;
	  jupiterViz = false; 
	  saturnViz = false;
	  uranusViz = false;
	  neptuneViz = false;
	  plutoViz = false;
	   
  }
  
  /*earth click*/
  else if((posX > earthX - earthW/2) && 
  (posX < earthX + earthW/2) && 
  (posY > earthY - earthH/2) && 
  (posY < earthY + earthH/2)){   
	  
	  earthViz = true;
	  mercuryViz = false;
	  venusViz = false;
	  marsViz = false;
	  jupiterViz = false;
	  saturnViz = false;
	  uranusViz = false;
	  neptuneViz = false;
	  plutoViz = false;
  }
  
  /*mars click*/
  else if((posX > marsX - marsW/2) && 
  (posX < marsX + marsW/2) && 
  (posY > marsY - marsH/2) && 
  (posY < marsY + marsH/2)){
	
	  marsViz = true;
	  venusViz = false;
	  earthViz = false;
	  mercuryViz = false;
	  jupiterViz = false;
	  saturnViz = false;
	  uranusViz = false;
	  neptuneViz = false;
	  plutoViz = false;
	    
  }
  
  /*jupiter click*/
  else if((posX > jupiterX - jupiterW/2) && 
  (posX < jupiterX + jupiterW/2) && 
  (posY > jupiterY - jupiterH/2) && 
  (posY < jupiterY + jupiterH/2)){
	  
	  jupiterViz = true;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  mercuryViz = false; 
	  saturnViz = false;
	  uranusViz = false;
	  neptuneViz = false;
	  plutoViz = false;
  }
  
  /*saturn click*/
  else if((posX > saturnX - saturnW/2) && 
  (posX < saturnX + saturnW/2) && 
  (posY > saturnY - saturnH/2) && 
  (posY < saturnY + saturnH/2)){
	  
	  saturnViz = true;
	  jupiterViz = false;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  mercuryViz = false; 
	  uranusViz = false;
	  neptuneViz = false;
	  plutoViz = false;
  }
  
  /*uranus click*/
  else if((posX > saturnX - saturnW/2) && 
  (posX < uranusX +  uranusW/2) && 
  (posY >  uranusY -  uranusH/2) && 
  (posY <  uranusY +  uranusH/2)){
	  
	  uranusViz = true;
	  saturnViz = false;
	  jupiterViz = false;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  mercuryViz = false; 
	  neptuneViz = false;
	  plutoViz = false;
  }
  
  /*neptune click*/
  else if((posX > neptuneX - neptuneW/2) && 
  (posX < neptuneX +  neptuneW/2) && 
  (posY >  neptuneY -  neptuneH/2) && 
  (posY <  neptuneY +  neptuneH/2)){
	  
	  neptuneViz = true;
	  uranusViz = false;
	  saturnViz = false;
	  jupiterViz = false;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  mercuryViz = false; 
	  plutoViz = false;
  }
  
  /*pluto click*/
  else if((posX > plutoX - plutoW/2) && 
  (posX < plutoX +  plutoW/2) && 
  (posY >  plutoY -  plutoH/2) && 
  (posY <  plutoY +  plutoH/2)){
	  
	  plutoViz = true;
	  neptuneViz = false;
	  uranusViz = false;
	  saturnViz = false;
	  jupiterViz = false;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  mercuryViz = false; 
  }
  
  //Xing OUT
  infoXPos = 1205;
  infoYPos = 115;
  infoWidth = 25;
  infoHeight = 25;
  
  if ((posX > infoXPos - infoWidth/2) &&
  (posX < infoXPos + infoWidth/2) &&
  (posY > infoYPos - infoHeight/2) &&
  (posY < infoYPos + infoHeight/2)) {
	  
	  plutoViz = false;
	  neptuneViz = false;
	  uranusViz = false;
	  saturnViz = false;
	  jupiterViz = false;
	  venusViz = false;
	  earthViz = false;
	  marsViz = false;
	  mercuryViz = false; 
	  
  }
}

/*draws info boxes*/
function isVisible() {
  if (mercuryViz == true) {
      imageMode(CENTER);
      image(mercuryInfo, 1050, 275);
  }
  
  if (venusViz == true) { 
  	  imageMode(CENTER);
 	  image(venusInfo, 1050, 275); 
  }
  
  if (earthViz == true) {
	  imageMode(CENTER);
	  image(earthInfo, 1050, 275);
	  
  }
  
  if (marsViz == true) {
	  imageMode(CENTER);
	  image(marsInfo, 1050, 275); 
	 
  }
  
  if (jupiterViz == true) {
	  imageMode(CENTER);
	  image(jupiterInfo, 1050, 275);  
	  
  }
  
  if(saturnViz == true) { 
  	  imageMode(CENTER);
	  image(saturnInfo, 1050, 275);
  }
  
  if(uranusViz == true) {
	  imageMode(CENTER);
	  image(uranusInfo, 1050, 275);
  }
  
  if(neptuneViz == true) {
	  imageMode(CENTER);
	  image(neptuneInfo, 1050, 275);
  }
  
  if(plutoViz == true) {
	  imageMode(CENTER);
	  image(plutoInfo, 1050, 275);  
  }

}

function Circle() {
	
  //Properties of circle/constructor
  this.circleColor = color(random(245, 255), 255, random(150, 255), random(5, 255));
  this.diameter = 2.2; 
  this.circleX = random(width);
  this.circleY = random(height);
  this.speedX = random(.3,.9);
  this.speedY = -.65;

  
  //Methods

  this.display = function() {
    noStroke();
    ellipseMode(CENTER);
    fill(this.circleColor);
    ellipse(this.circleX, this.circleY, this.diameter, this.diameter);
  }

  this.move = function() {
    this.circleX += this.speedX; 
    this.circleY += this.speedY; 

    if (this.circleX > width || this.circleX < 0) {
      this.circleX = 0;  
      
    }


    if (this.circleY > height || this.circleY < 0) {
      this.circleY = height; 
     
    }
  }
  
 function Planet() {
	 
 }
}

/* Trying to make an x out class for getting x out coordinates and setting boolean values to turn info boxes on or off

function xOut() {
	 
	 //Constructor
	 this.planetX = 0;
	 this.planetY = 0;
	 this.planetW = 10;
	 this.planetH = 10;
	 this.isVisible = true;
	 this.isNotVisible = false;
	 
	 //Methods
	 this.xedOut = function(this.planetXTemp, this.planetYTemp, this.planetWTemp, this.planetHTemp, this.isVisibleTemp, this.isNotVisibleTemp) {
 		
		this.planetX = planetXTemp;
		this.planetY = planetYTemp;
		this.planetW = planetWTemp;
		this.planetH = planetHTemp;
		this.isVisible = isVisibleTemp;
		this.isNotVisible = isNotVisisbleTemp;
		
		
		if((posX > planetXTemp - planetWTemp/2) && 
 		(posX < planetXTemp + planetWTemp/2) && 
  		(posY > planetYTemp - planetHTemp/2) && 
  		(posY < planetYTemp + planetHTemp/2)){
	  
	    
	 		 saturnViz = true;
	  		 jupiterViz = false;
	  		 venusViz = false;
	  		 earthViz = false;
	  		 marsViz = false;
	 		 mercuryViz = false; 
	 		 uranusViz = false;
	 		 neptuneViz = false;
	 		 plutoViz = false;
	    
		
 	 } 
	 }
	 
	 
 }*/

/*Image Credits: All Images labeled for reuse with modification by Creative Commons

Mercury https://upload.wikimedia.org/wikipedia/commons/3/3b/Mercury_in_color_-_Prockter07.jpg
Venus https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg
Earth https://upload.wikimedia.org/wikipedia/commons/7/7b/Earth_Western_Hemisphere.jpg
Moon https://upload.wikimedia.org/wikipedia/commons/4/41/Moon_right-view_%28Clementine_dataset%29.png
Mars https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_23_aug_2003_hubble.jpg
Jupiter https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg
Saturn https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg
Uranus https://upload.wikimedia.org/wikipedia/commons/9/92/Uranus_from_Voyager_2_%281986%29.jpg
Neptune https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg
Pluto https://upload.wikimedia.org/wikipedia/commons/5/5a/Pluto_by_LORRI_and_Ralph,_13_July_2015.jpg

Mars Moons https://upload.wikimedia.org/wikipedia/commons/5/5c/Phobos_colour_2008.jpg
           https://upload.wikimedia.org/wikipedia/commons/8/8d/Deimos-MRO.jpg

Jupiter Moons https://upload.wikimedia.org/wikipedia/commons/f/fe/Jupiter_and_the_Galilean_Satellites.jpg

Saturn Moons https://upload.wikimedia.org/wikipedia/commons/8/81/Systeme_saturnien.jpg

Uranus Moons https://upload.wikimedia.org/wikipedia/commons/5/5a/Uranus_moons.jpg

Neptune Moons https://upload.wikimedia.org/wikipedia/commons/f/fa/Triton2.jpg
	      https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nereid-Neptune.jpg/640px-Nereid-Neptune.jpg
	      https://upload.wikimedia.org/wikipedia/commons/4/46/Simulated_view_of_Naiad.jpg

Pluto Moons https://upload.wikimedia.org/wikipedia/commons/c/c7/Nh-pluto_moons_family_portrait.png
            https://upload.wikimedia.org/wikipedia/commons/6/69/Moons_of_Pluto.png

Sun https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA's_Solar_Dynamics_Observatory_-_20100819.jpg
*/


