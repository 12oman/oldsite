// setup Canvas as a fun screen
// position absolute on the page
// set the background to clear so canvas doesn't appear
// draw loop, create bubbles to match result from calculator
//  
var bubObjs = [];
var result = 90;
var sketchScreen;
// will need to change this variable from calculator result.

function setup() {

    sketchScreen = createCanvas(windowWidth, windowHeight);
    sketchScreen.position(0,0);
    sketchScreen.style('z-index', '-1');

	//bubble array calling the bubble constructor
	for (i = 0; i < result; i++) {
		bubObjs[i] = new Bubble();
	}

}

// this draw function is actually a loop from the p5.js library
function draw() {
    background(40, 40, 40);
    // clear();
    for (i = 0; i < bubObjs.length; i++) {
    bubObjs[i].display();
	bubObjs[i].move();
	}
	

}




function Bubble() {
	this.x = random(windowWidth *.2, windowHeight *.6 );
  	this.y = random(windowWidth *.2,windowHeight *.6);
  	// this.h = random(20,25)
	// this.w = random(20,25)
	this.display = function() {
    stroke(250, 250, 255);
    strokeWeight(2);
    // strokeColor(0,0,0);
	noFill();
	ellipse(this.x, this.y, 70, 70);
		},
		this.move = function() {
			this.x += random(-10,10);
			this.y += random(-10,10);
	}
}
