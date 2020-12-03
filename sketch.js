var ground
var division
var plinko
var particle

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var particles=[];
var plinko=[];
var divisiom=[];



function draw() {
  background(255,255,255);  
  var divisionHeight=300;
 

 display() 
plinko.display();
particle.display();
ground.display();
division.display();
 



  drawSprites();











  for (var k = 0; k <= width; k = k+80) {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
    }
}