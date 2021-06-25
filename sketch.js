var intro, USmap;
var username;
var gameState = 0;
var timer;

function preload() {


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  intro = new Intro()
  USmap = new USMap()
  
}

function draw() {
  background(255,255,255);

  
  console.log(gameState)

  if(gameState === 0)
  {
    intro.display()
  }

  

  if(gameState === 1) {
    USmap.display()
    textSize(20)
   text("x:" + mouseX,windowWidth-130, 30)
   text("y:" + mouseY, windowWidth-130,50)
  }
  
}