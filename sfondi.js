var mic,fft, spectrum

function setup(){
  createCanvas(windowWidth,windowHeight)
  mic= new p5.AudioIn()
   mic.start()
   fft=new p5.FFT(0.9,128);
    fft.setInput(mic)
    colorMode(HSB)

}
function draw(){
  //
  // var vol= mic.getLevel()
  // var color_vol=map(vol,0,1,0,255)
   spectrum=fft.analyze()
   waveform=fft.waveform()
   bass= fft.getEnergy("bass", 45)

   lowmid= fft.getEnergy("lowMid", 45)

   mid= fft.getEnergy("mid", 45)

   high= fft.getEnergy("highMid", 45)

   treble= fft.getEnergy("treble", 45)
  //function mousePressed() {
     console.log(waveform[30])
  noStroke()

    // background(spectrum[10],spectrum[15],spectrum[20])
    background(0)
  for(i=0;i<128;i++){
    rect(i*10,height/2-spectrum[i]*3/2,10,20+spectrum[i]*3)
pop()
      fill("white")
      rect(i*10,height/2-waveform[i]*255,10,20+waveform[i]*1000)
push()
  fill("red")
  }
}



  // store in a variable the current state
  // by calling “fullscreen” without arguments
  // you get either true or false
//  var fs = fullscreen();
  // then enter or exit the full screen mode
  //fullscreen(!fs);


function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}
