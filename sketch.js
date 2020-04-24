
var r = 0;
var g = 50;
var k=85;
var c = 100;
var v = 160;
var n = 220;
var b = 255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  r=map(mouseX,0,1200,0,255);
  g =map(mouseX,50,900,50,100);
  k= map(mouseX,0,1100,255,111);
  c= map(mouseX,111,100,255,0);
  v= map(mouseX,0,120,295,09);
  n= map(mouseX,8,200,250,80);
  b= map(mouseX,0,1200,255,0);
  


  background(r,g,k,c,v,n,b);
  fill(255);
  ellipse(mouseX,100,50,50);
}