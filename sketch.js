let startScene = true;
let blackScene = false;
let blackScene2 = false;
let didiScene = false;
let popScene = false;

let scene = 1;

let btnSize = 120;
let pointSize = 60;
let didiInput1, didiInput2;


let w, h;

function preload(){
  startBG = loadImage('image/p01.png')
  blackBG = loadImage('image/p02.png')
  blackBG2 = loadImage('image/p03.png')
  didiBG = loadImage('image/didiBG.png')
  popBG = loadImage('image/popBG.png')

  loadImage('image/point.png')
  loadImage('image/startbtn.png')
}

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  w = window.innerWidth;
  h = window.innerHeight;
  // console.log(w+','+h)
  
  startBG.resize( w, 3518*(w/1626) )
  blackBG.resize( w, 3518*(w/1626) )
  blackBG2.resize( w, 3518*(w/1626) )
  didiBG.resize( w, 3518*(w/1626) )

  startBtn = createImg('image/startbtn.png', 'startBtn');
  startBtn.size(btnSize, 814*(btnSize/ 1477));
  startBtn.position(width/2 - 55, height/2-70);
  startBtn.mouseClicked(function(){
    startScene = false;
    blackScene = true;
  })
  startBtn.show();

  pointBtn = createImg('image/point.png', 'pointBtn');
  pointBtn.size(pointSize, 496*(pointSize / 601));
  pointBtn.position(width/2+120, height/2+200);
  pointBtn.mouseClicked(function(){
    scene++;
    if(scene == 2){
      blackScene = false;
      blackScene2 = true;
    }else if(scene == 3){
      blackScene2 = false;
      didiScene = true;
    }else if(scene == 4){
      didiScene = false;
      popScene = true;
    }
  })
  pointBtn.hide();

  didiInput1 = createInput('');
  didiInput1.attribute('placeholder', 'ex. 跟朋友、獨自...');
  didiInput1.position(width/2 - 130, height/2 + 100)
  didiInput1.style('font-size', '20px');
  didiInput1.style('height', '35px');
  didiInput2 = createInput('');
  didiInput2.attribute('placeholder', 'ex. 喝酒、聊天、運動...');
  didiInput2.position(width/2 - 130, height/2 + 200)
  didiInput2.style('font-size', '20px');
  didiInput2.style('height', '35px');

  didiInput1.hide();
  didiInput2.hide();
}

function draw() {
  // background(220);
  push();
  translate(width/2, height/2)
  imageMode(CENTER);

  if(startScene){
    image( startBG, 0 , 0 )


  }else if(blackScene){
    image( blackBG, 0 , 0 )
    startBtn.hide();
    pointBtn.show();

  }else if(blackScene2){
    image( blackBG2, 0 , 0 )

  }else if(didiScene){
    image( didiBG, 0 , 0 )
    fill(255)
    noStroke()
    textSize(25)
    text(didiInput1.value(), -140, -150)
    text(didiInput2.value(), -140, -105)

    if( didiInput1.value() != '' && didiInput2.value() != ''){
      pointBtn.show();
    }else{
      pointBtn.hide();
    }
    didiInput1.show();
    didiInput2.show();

  }else if(popScene){
    image( popBG, 0 , 0 )
    didiInput1.hide();
    didiInput2.hide();
  }

  pop();
}