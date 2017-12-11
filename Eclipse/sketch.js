function setup() {
  canvas=createCanvas(500, 500);
  canvas.parent('sketch-holder');
  centerx = width/2;
  centery = height/2;
  XSlider = createSlider(-100, 100,50,0);
  XSlider.elt.step =1;
  XSlider.position(50,40);
  XSlider.class("sim-slider");
  text1 = createP();
  text1.position(50,0);
  text1.parent('sketch-holder')
  text1.html('Moon Position X')
  YSlider = createSlider(-100, 100,50,0);
  YSlider.elt.step =1;
  YSlider.position(50,100);
  YSlider.class("sim-slider");
  text2 = createP();
  text2.position(50,60);
  text2.parent('sketch-holder')
  text2.html('Moon Position Y')
  DSlider = createSlider(0, 100, 50 ,0);
  DSlider.elt.step =1;
  DSlider.position(250,40);
  DSlider.class("sim-slider");
  text3 = createP();
  text3.position(250,0);
  text3.parent('sketch-holder')
  text3.html('Moon Diameter')
}

function draw() {
  background('midnightblue')
  fill('yellow')
  ellipse(250,250,70,70)

  X = XSlider.value();
  Y = YSlider.value();
  D = DSlider.value();

  translate(XSlider.value(),YSlider.value())
  fill('midnightblue')
  stroke(200)
  ellipse(250,250,DSlider.value())
  text1.html('Moon Position X: '+ X);
  text2.html('Moon Position Y: '+ Y);
  text3.html('Moon Diameter: ' + D);
}
