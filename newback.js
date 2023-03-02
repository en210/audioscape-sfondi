var points=[]
var ampl;
var vol;
var speed=1.02;
var mic;
var spectrum=[]
var ct=0
var msc
var back
var waveform
var fft
var num_switch
var strobo
var bass
var mid
var low
var high

function setup(){
  background("black")
  colorMode(HSB,255)
   createCanvas(windowWidth,windowHeight)
     mic= new p5.AudioIn()
//  mic.getSources()
//  console.log(getSources())
//  mic.setSource(0);
   mic.start()
  ampl=new p5.Amplitude();
   ampl.setInput(mic)

   fft=new p5.FFT(0.9,128);
    fft.setInput(mic)


  for(i=0;i<128;i++){
      points[i]=new Point()
    }
}

function draw()

{
  spectrum=fft.analyze()
  waveform=fft.waveform()

  noStroke()
  //background(frameCount%360,map(ampl.getLevel(),0,0.1,0,750),mouseX/2,5)
    if (strobo==0){background(0,0,ampl.getLevel()*100,5)}

    else if(strobo==1){
      if(frameCount%10<5){
        background(0,0,255,95 )}
      else{background(0,0,0,95)}
      }
    console.log(num_switch)
  let simmetry = 30
  let angle = 360/simmetry

      var bass = max(waveform)
          var low = min(waveform)
                  var bassindex = waveform.indexOf(bass)
                  var lowindex = waveform.indexOf(low)

  translate(width/2,height/2)
strokeWeight(1)
          scale(frameCount%map(mouseX,0,width,1,15))




  for (let i = 0; i < simmetry; i++) {
       rotate(angle);

       console.log(bass, bassindex, low, lowindex)
      // let sw = sizeSlider.value();
       //strokeWeight(sw);
      push();
      noFill()
       stroke(spectrum[i],255,255,255)
       strokeWeight(frameCount%25/50+strobo*2)
       line(waveform[30]*2000,waveform[60]*2000,waveform[90]*2000,waveform[120]*2000)

      //line(max(waveform)*2000, max(waveform)*2000,min(waveform)*2000,min(waveform)*2000)
       //curve(waveform[0]*2000, waveform[15]*2000, waveform[30]*2000, waveform[45]*2000,
       //waveform[60]*2000, waveform[75]*2000, waveform[90]*2000, waveform[105]*2000);

       push();
       scale(1, -1);
        //line(max(waveform)*2000, max(waveform)*2000,min(waveform),min(waveform)*2000)
       line(waveform[30]*2000,waveform[60]*2000,waveform[90]*2000,waveform[120]*2000)
      // curve(waveform[0]*2000, waveform[30]*2000, waveform[15]*2000, waveform[15]*2000,
      // waveform[45]*2000, waveform[45]*2000, waveform[0]*2000, waveform[30]*2000);
          pop();
          rotate(map(ampl.getLevel(),0,1,0,360))
       pop();
     }




  // for(i=0;i<128;i++){
  //
  //     points[i].show=function show(){
  //       var hue =(map(waveform[i],-0.05,0.05,0,360))
  //       var hue_adjust =(map(waveform[i],-0.05,0.05,0,20))
  //       var size_adjust =(map(waveform[i],-0.05,0.05,0,1))
  //
  //       //QUESTA RIGA DI CODICE è IMPORTANTE
  //       if(waveform[i]>0){fill(100+hue_adjust,255,255,255)}
  //       else{fill(100-hue_adjust,255,255,255)}
  //
  //       ellipse(i*20,
  //         height/2-this.y,
  //         //height/2-waveform[i]*750,
  //         size_adjust*mouseX/100,size_adjust*mouseX/100,)
  //     //  rotate(this.x)
  //     }

        //          points[i].update()
        //    points[i].show()

}

//
// for(i=0;i<64;i++){
//   rect(i*20,height/2-spectrum[i]*3/2,10,20+spectrum[i]*3)
// push()
//     fill("white")
//     rect(i*20,height/2-waveform[i]*255,10,20+waveform[i]*510)
// pop()
// fill(i*6,255,255)
// }

//}

function keyPressed(){

  if (keyCode === 49) {
    num_switch = 30;
  }


    if (keyCode === 50) {
      num_switch = 60;
    }

      if (keyCode === 51) {
        num_switch = 90;
      }

        if (keyCode === 52) {
          num_switch = 120;
        }

        if (keyCode === 53) {
            strobo=1
            }

            else{strobo=0}
}

function Point(){
  this.x=random(-10,10)
  this.y=random(-10,10)

  this.update=function update(){
    this.x*=speed;
    this.y*=speed;

    if (this.x < -windowWidth / 2) {
      this.x = random( -windowWidth / 10, windowWidth / 10)
    };
    if (this.x > windowWidth / 2) {
      this.x = random( -windowWidth / 10, windowWidth / 10)
    };
    if (this.y < -windowHeight / 2) {
      this.y = random(-windowHeight / 10, windowHeight / 10)
    };
    if (this.y > windowHeight / 2) {
      this.y = random(-windowHeight / 10, windowHeight / 10)
    };
  }
  this.show=function show(){}
}
