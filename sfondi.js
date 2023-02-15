var mic,fft, spectrum

function setup(){
  createCanvas(windowWidth,windowHeight)
  mic= new p5.AudioIn()
   mic.start()
   fft=new p5.FFT(0.9,128);
    fft.setInput(mic)

}
function draw(){
  //
  // var vol= mic.getLevel()
  // var color_vol=map(vol,0,1,0,255)
   spectrum=fft.analyze()
  noStroke()

    // background(spectrum[10],spectrum[15],spectrum[20])
    background(spectrum[40])
  for(i=0;i<width/20;i++){
    for(h=0;h<height/20;h++){

      var point_x= round(dist(i,0,width/20,0))
      var point_y=round(dist(0,h,0,height/20))
      // console.log(vol)
      colorMode(HSB)
      fill(point_x,point_y+(spectrum[20]-100),100)
      rect(i*20,h*20,20,20)
    }
  }
}


function mousePressed() {
  // store in a variable the current state
  // by calling “fullscreen” without arguments
  // you get either true or false
  var fs = fullscreen();
  // then enter or exit the full screen mode
  fullscreen(!fs);
}

function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}
