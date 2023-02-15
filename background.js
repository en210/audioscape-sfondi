var points=[]
var analyze_vol;
var vol;
var speed=1.02;
var mic;
var spectrum=[]
var ct=0
var msc
var back


function setup(){
  colorMode(HSB,255)
   createCanvas(windowWidth,windowHeight)
     mic= new p5.AudioIn()
//  mic.getSources()
//  console.log(getSources())
//  mic.setSource(0);
   mic.start()
  analyze_vol=new p5.Amplitude();
   analyze_vol.setInput(mic)
  for(i=0;i<100;i++){
      points[i]=new Point()
    }

    fill('black')
    rect(0,0,width,height)
}

function draw(){
  text(ct,150,100,100)
  text(mouseX,100,100,100)
  noStroke()
  background(0,0,0,5)


  for(i=0;i<100;i++){

    if(ct==0){
      points[i].show=function show(){

        //QUESTA RIGA DI CODICE è IMPORTANTE
        fill(analyze_vol.getLevel()*500,155,255,255)

        ellipse(i*20,
          height/2-this.y-analyze_vol.getLevel()*100,
          analyze_vol.getLevel()*mouseX/5,40)
      //  rotate(this.x)
      }

                  points[i].update()
            points[i].show()
          }

    else if(ct==1){

      points[i].show=function show(){

           ellipseMode(CENTER)

              //QUESTA RIGA DI CODICE è IMPORTANTE
              fill(analyze_vol.getLevel()*500,155,255,255)

              ellipse(width/2+this.x-analyze_vol.getLevel()*100,
                height/2-this.y-analyze_vol.getLevel()*100,
                analyze_vol.getLevel()*mouseX/5,20+analyze_vol.getLevel()*mouseX/5)
            //  rotate(this.x)
            }

                        points[i].update()
                  points[i].show()
                }

    else if(ct==2){

      points[i].show=function show(){

      ellipseMode(CENTER)

      //QUESTA RIGA DI CODICE è IMPORTANTE
      fill(analyze_vol.getLevel()*500,155,255,255)

      ellipse(i*20+this.x-analyze_vol.getLevel()*100,
      height/2-this.y-analyze_vol.getLevel()*100,
      analyze_vol.getLevel()*mouseX/10,
      analyze_vol.getLevel()*mouseX/10)
                    //  rotate(this.x)
                    }

      points[i].update()
      points[i].show()
      }


    else if(ct==3){
            points[i].show=function show(){

                   ellipseMode(CENTER)

                      //QUESTA RIGA DI CODICE è IMPORTANTE
                      fill(155,analyze_vol.getLevel()*500,255,255)

                      ellipse(width/2+this.x-analyze_vol.getLevel()*100,
                        height/2-this.y-analyze_vol.getLevel()*100,
                        analyze_vol.getLevel()*mouseX/10,
                        analyze_vol.getLevel()*mouseX/10)
                        rotate(this.x)
                    }

                                points[i].update()
                          points[i].show()
                  }

                  if(ct==4){
                  angleMode(DEGREES)
                        translate(windowWidth/2,windowHeight/2)

                  rotate(frameCount%360)
                        for(a=0;a<=30;a++){
                            rotate(frameCount)
                            colorMode(RGB)
                          stroke(analyze_vol.getLevel()*255,255-analyze_vol.getLevel()*255,analyze_vol.getLevel()*1024%255)
                          // colorMode(HSB,255)
                          strokeWeight(2)
                          line(width*cos(a*32),-height*sin(a*32),100,0)

                       stroke(150,analyze_vol.getLevel()*1000,155-analyze_vol.getLevel()*1000)
                          line((analyze_vol.getLevel()*1000)*cos(a*32),255,255,0)
                        }
                        }


    else if(ct==5){

              for(j=0;j<width/20;j++){
      points[i].show=function show(){

          //QUESTA RIGA DI CODICE è IMPORTANTE
          fill(155,0,analyze_vol.getLevel()*500,255)

          ellipse(i*20,
            height/2-this.y-analyze_vol.getLevel()*100,
            1,analyze_vol.getLevel()*mouseX,)

        //  rotate(this.x)
      }}

                  points[i].update()
            points[i].show()
     }

    }



if(ct==6){
  for(d=0;d<width/10;d++){
  for(e=0;e<height/10;e++){
    if(e<analyze_vol.getLevel()*100){
      text(Math.floor(Math.random()*10),width/2+analyze_vol.getLevel()*1000,e*100,100)
    }
  }
}}
}



//Setup Unit
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


function mousePressed() {
  // store in a variable the current state
  // by calling “fullscreen” without arguments
  // you get either true or false
  if(ct==0){var fs = fullscreen();
  // then enter or exit the full screen mode
  fullscreen(!fs)}

  else if (ct==3){
      ct=-1}
      ct++
}

function windowResized() {
  // resize canvas when switching into/from full screen
  resizeCanvas(windowWidth, windowHeight);
}
