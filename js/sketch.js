let title = "Across the Wall";
let job = "Job:";
let requiredAbilities = "Required Abilities:";
let toolbox = "Toolbox:";
let count = 0;
let speed = 10

let introtext;

let canvas;

let videoPlaying = true;

//boolean to check the status of the button to update in draw
//you need to create a boolean for each function that uses a
// a prev and next button
let findingBool = false;
let translationBool = false;
let captionBool = false;



function preload(){

  folder = loadImage("image/folder.png");
  table = loadTable('assets/data.csv', 'csv', 'header');
  tableHome = loadTable('assets/disclaimers.csv','csv');
  sourceLight = loadFont('assets/SourceCodePro-Light.ttf');
  sourceBold = loadFont('assets/SourceCodePro-Bold.ttf');
  sourceReg = loadFont ('assets/SourceCodePro-Regular.ttf');
  vidEN = createVideo("assets/English.mp4");
  vidZH = createVideo("assets/Chinese.mp4");

}


function setup() {
  // put setup code here
  canvas = createCanvas (windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '0');
  imageMode (CENTER);
  background(0);

  fill(225,225,100);
  textSize(10);
  rectMode(CENTER);
  textFont(sourceReg);
  textAlign(CENTER);
  //text(tableHome.getString(0,0),windowWidth/2,200, 900, 300);

  //using a p tag instead of the text object
  introtext = createP(tableHome.getString(0,0));
  introtext.addClass("introText"); //this class is referenced in the style tag in the index file
  introtext.position(windowWidth/2, 200);
  introtext.style("width", "500px");

  //create the content paragraph here, that way you can just replace the text instead
  //of creating a bunch of paragraphs in all of your functions. Look at the findingR function
  //to see how replacing the text works. You can now get rid of all the createP in your
  //funcitons and just use this one.
  contentText = createDiv ('');
  contentText.addClass("contentText");
  contentText.position(windowWidth/3+50,100);
  contentText.style("width", '500px');
  contentText.hide();

  descriptionText = createP('');
  descriptionText.addClass("descriptionText");
  descriptionText.position(windowWidth/6-130,75);
  descriptionText.style("width", '250px');
  descriptionText.hide();

  buttonNext = createButton("next >").size(120,40);
  buttonNext.addClass("contentButton");
  buttonNext.position(windowWidth-450,windowHeight-100);
  buttonNext.mousePressed(next);
  buttonNext.hide();

  buttonPrev = createButton("< previous").size(120,40);
  buttonPrev.addClass("contentButton");
  buttonPrev.position(windowWidth/3+100,windowHeight-100);
  buttonPrev.mousePressed(prev);
  buttonPrev.hide();

  buttonBack = createButton ('back to home').size(120,40);
  buttonBack.addClass("contentButton");
  buttonBack.position(windowWidth/3*2-175,windowHeight-100);
  buttonBack.mousePressed(homePage);
  buttonBack.hide();

  buttonBackRight = createButton ('back to home').size(120,40);
  buttonBackRight.addClass("contentButton");
  buttonBackRight.position(windowWidth/3+720,windowHeight-75);
  buttonBackRight.mousePressed(homePage);
  buttonBackRight.hide();


  buttonPlayVideo = createButton('play');
  buttonPlayVideo.mousePressed(playVideoToggle);
  buttonPlayVideo.addClass("contentButton");
  buttonPlayVideo.position(windowWidth/3+75,windowHeight-75);
  createElement('br');
  buttonPlayVideo.hide();


  buttonFstYes = createButton(tableHome.getString(1,0));
  buttonFstYes.addClass("introButton");
  //this class is referenced in the style tag in the index file
  buttonFstYes.position(windowWidth/2-250,windowHeight/2);
  buttonFstYes.mousePressed(introThd);
  buttonFstYes.style("text-align","left");


  buttonFstNo = createButton(tableHome.getString(2,0));
  buttonFstNo.addClass("introButton");
  buttonFstNo.position(windowWidth/2-250,windowHeight/2+50);
  buttonFstNo.mousePressed(introScd);
  buttonFstNo.style("text-align","left" );


}

function introScd(){
  background(0);

  fill(225,225,100);
  rectMode(CORNER);
  introtextScd = createP(tableHome.getString(0,1));
  introtextScd.addClass("introText");
  introtextScd.position(windowWidth/2, 200);
  introtextScd.style("width", "500px");


  buttonScd = createButton(tableHome.getString(1,1));
  buttonScd.addClass("introButton");
  buttonScd.position(windowWidth/2-250,windowHeight/2+50);
  buttonScd.mousePressed(introThd);

  introtext.hide();
  buttonFstYes.hide();
  buttonFstNo.hide();


}

function introThd(){

  background(0);
  rectMode(CORNER);

  introtextThd = createP(tableHome.getString(0,2));
  introtextThd.addClass("introText");
  introtextThd.position(windowWidth/2, 200);
  introtextThd.style("width", "500px");


  buttonThd = createButton(tableHome.getString(1,2));
  buttonThd.addClass("introButton");
  buttonThd.position(windowWidth/2-250,windowHeight/2+50);
  buttonThd.mousePressed(homePage);


  introtext.hide();
  buttonFstYes.hide();
  buttonFstNo.hide();
  introtextScd.hide();
  buttonScd.hide();

}


function homePage(){
  background(0);
  //reset the count to 0 everytime you go back home.
  count = 0;
  //flip the finding boolean to false
  //you'll need to flip all of your booleans
  //to false when you go back home.
  findingBool = false;
  translationBool = false;
  captionBool = false;

  rectMode(CORNER);
  noStroke();
  fill(255,255,100);
  rect(0, 0, windowWidth/3, windowHeight);

  buttonThd.hide();
  introtextThd.hide();
  buttonBack.hide();
  buttonBackRight.hide();
  buttonNext.hide();
  buttonPrev.hide();
  buttonPlayVideo.hide();
  descriptionText.hide();
  vidEN.hide();
  vidZH.hide();


  //background stop

  //lines;
  lineBlack = createImg('assets/line_black.gif');
  lineBlack.position(windowWidth/6-25,windowHeight/2-15).size(windowWidth/3-280,30);
  lineYellow1 = createImg('assets/line_yellow_right.gif');
  lineYellow1.position(windowWidth/3+75,windowHeight/2-15).size(windowWidth/3-220,30);
  lineYellow2 = createImg('assets/line_yellow_right.gif');
  lineYellow2.position(windowWidth/3*2+5,windowHeight/2-15).size(windowWidth/3-220,30);
  lineYellow3 = createImg('assets/line_yellow_up.gif');
  lineYellow3.position(windowWidth/3*2-100,windowHeight/3).size(30,windowWidth/12-50);
  lineYellow4 = createImg('assets/line_yellow_down.gif');
  lineYellow4.position(windowWidth/3*2-75,windowHeight/3).size(30,windowWidth/12-50);
  lineYellow5 = createImg('assets/line_yellow_up.gif');
  lineYellow5.position(windowWidth/3*2-75,windowHeight/3*2-70).size(30,windowWidth/12-50);
  lineYellow6 = createImg('assets/line_yellow_down.gif');
  lineYellow6.position(windowWidth/3*2-100,windowHeight/3*2-70).size(30,windowWidth/12-50);
  //lines stop


  //titles and descriptions
  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);


  //Finding Resource button
  buttonR = createButton ("Finding Resource").size(120,60);
  buttonR.addClass("homeButton");
  buttonR.position(windowWidth/3,windowHeight/2);
  buttonR.mousePressed(findingR);

  //Management
  buttonM = createButton ("Management").size(120,60);
  buttonM.addClass("homeButton");
  buttonM.position(windowWidth/3*2-70,windowHeight/2);
  buttonM.mousePressed(management);

  //translation
  buttonT = createButton ("Translation").size(120,60);
  buttonT.addClass("homeButton");
  buttonT.position(windowWidth/3*2-70,windowHeight/2-150);
  buttonT.mousePressed(translation);

  //Captioning
  buttonC = createButton("Captioning").size(120,60);
  buttonC.addClass("homeButton");
  buttonC.position(windowWidth/3*2-70,windowHeight/2+150);
  buttonC.mousePressed(captioning);


  buttonO = createButton("Original Video").size(120,60);
  buttonO.addClass("homeButton");
  buttonO.position(140,windowHeight/2);
  buttonO.mousePressed(originV);


  buttonU = createButton("Reuploading").size(120,60);
  buttonU.addClass("homeButton");
  buttonU.position(windowWidth-140,windowHeight/2);
  buttonU.mousePressed(reuploading);

  //hide content paragraph
  contentText.hide();

  textScd.hide();
  textThd.hide();
  textM.hide();
  vid.hide();

}


function findingR(){
  //flip the boolean to true so the text gets updated
  //look in draw to see it in use
  findingBool = true;
  //show the contentText paragraph
  contentText.show();
  rectMode(CENTER);
  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();
  lineBlack.hide();
  lineYellow1.hide();
  lineYellow2.hide();
  lineYellow3.hide();
  lineYellow4.hide();
  lineYellow5.hide();
  lineYellow6.hide();

  buttonBack.show();
  buttonNext.show();
  buttonPrev.show();
  descriptionText.show();

  descriptionF = "First, a group of volunteer will download the videos from YouTube, and hand them to the manager."

  fill(255);
  rect(windowWidth/2, windowHeight/2,windowWidth, windowHeight);
  rectMode(CORNER);
  fill(255,255,100);
  rect(0,0,windowWidth/3,windowHeight);

  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);

  textAlign(LEFT);
  fill(100,70,50);
  textSize(25);
  text('Finding Resource',windowWidth/3+50,75);
  descriptionText.html(descriptionF);


  rectMode(CORNER);
  textAlign(LEFT);
  fill(80,50,30);
  textSize(15);
  text(job,windowWidth-300,75);
  text(requiredAbilities,windowWidth-300,windowHeight/2-75);
  text(toolbox,windowWidth-300,windowHeight-225);
  textFont(sourceReg);
  textSize(10);
  text(table.getString(0,1),windowWidth-300,100);
  text(table.getString(0,2),windowWidth-300,windowHeight/2-50);
  text(table.getString(0,3),windowWidth-300,windowHeight-200);


  //upadate the paragraph content when the counter changes.
  //this changes becasue the findingR function is being called
  //over and over again in draw becasue the boolean is true. We are also
  //just replacing the paragraph text and not making a bunch of new paragraphs.
  if (count == 0){
    contentText.html(table.getString(0,4));
    buttonPrev.hide();
    fill(0,255,0);
    rect(windowWidth/3+50,80,40,5);

  }


  if (count == 1){
    contentText.html(table.getString(0,5));
    fill(0,255,0);
    rect(windowWidth/3+50,80,40,5);
    print("it changed");
  }

  if (count == 2){
    contentText.html(table.getString(0,6));
    fill(0,255,0);
    rect(windowWidth/3+50,80,40,5);
    buttonNext.hide();
  }



}

function management(){
  rectMode(CENTER);
  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();
  lineBlack.hide();
  lineYellow1.hide();
  lineYellow2.hide();
  lineYellow3.hide();
  lineYellow4.hide();
  lineYellow5.hide();
  lineYellow6.hide();
  buttonBack.show();
  contentText.show();
  descriptionText.show();

  fill(255);
  rect(windowWidth/2, windowHeight/2,windowWidth, windowHeight);
  rectMode(CORNER);
  fill(255,255,100);
  rect(0,0,windowWidth/3,windowHeight);

  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);

  textAlign(LEFT);
  fill(100,70,50);
  textSize(25);
  text('Management',windowWidth/3+50,75);
  let descriptionM = "The manager will organize all the materials and distribute them to translators and editors. All the in-process document and final video will get through the manager."

  rectMode(CORNER);
  textAlign(LEFT);
  fill(80,50,30);
  textSize(15);
  text(job,windowWidth-300,75);
  text(requiredAbilities,windowWidth-300,windowHeight/2-75);
  text(toolbox,windowWidth-300,windowHeight-225);
  textFont(sourceReg);
  textSize(10);
  text(table.getString(1,1),windowWidth-300,100);
  text(table.getString(1,2),windowWidth-300,windowHeight/2-50);
  text(table.getString(1,3),windowWidth-300,windowHeight-200);
  descriptionText.html(descriptionM);


  contentText.html(table.getString(1,4));
  fill(0,255,0);
  rect(windowWidth/3+50,80,40,5);


}

function translation(){

  translationBool = true;

  contentText.show();
  rectMode(CENTER);
  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();
  lineBlack.hide();
  lineYellow1.hide();
  lineYellow2.hide();
  lineYellow3.hide();
  lineYellow4.hide();
  lineYellow5.hide();
  lineYellow6.hide();
  buttonBack.show();
  buttonNext.show();
  buttonPrev.show();
  descriptionText.show();

  fill(255);
  rect(windowWidth/2, windowHeight/2,windowWidth, windowHeight);
  rectMode(CORNER);
  fill(255,255,100);
  rect(0,0,windowWidth/3,windowHeight);

  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);

  textAlign(LEFT);
  fill(100,70,50);
  textSize(25);
  text('Translation',windowWidth/3+50,75);
  let descriptionT = "The translators will listen and translate the video, then return the text document back to manager for adding caption."

  rectMode(CORNER);
  textAlign(LEFT);
  fill(80,50,30);
  textSize(15);
  text(job,windowWidth-300,75);
  text(requiredAbilities,windowWidth-300,windowHeight/2-75);
  text(toolbox,windowWidth-300,windowHeight-225);
  textFont(sourceReg);
  textSize(10);
  text(table.getString(2,1),windowWidth-300,100);
  text(table.getString(2,2),windowWidth-300,windowHeight/2-50);
  text(table.getString(2,3),windowWidth-300,windowHeight-200);
  descriptionText.html(descriptionT);


  if (count == 0){
    contentText.html(table.getString(2,4));
    buttonPrev.hide();
    fill(0,255,0);
    rect(windowWidth/3+50,80,40,5);
  }


  if (count == 1){
    contentText.html(table.getString(2,5));
    buttonNext.hide();
    fill(0,255,0);
    rect(windowWidth/3+50,80,40,5);
  }




}

function captioning(){
  rectMode(CENTER);
  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();lineBlack.hide();
  lineYellow1.hide();
  lineYellow2.hide();
  lineYellow3.hide();
  lineYellow4.hide();
  lineYellow5.hide();
  lineYellow6.hide();
  buttonBack.show();
  buttonNext.show();
  buttonPrev.show();
  contentText.show();
  descriptionText.show();
  captionBool = true;

  fill(255);
  rect(windowWidth/2, windowHeight/2,windowWidth, windowHeight);
  rectMode(CORNER);
  fill(255,255,100);
  rect(0,0,windowWidth/3,windowHeight);

  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);

  textAlign(LEFT);
  fill(100,70,50);
  textSize(25);
  text('Captioning',windowWidth/3+50,75);
  let descriptionC = "The editor will receive the video file and text document from manager, and they will add caption to the video."

  rectMode(CORNER);
  textAlign(LEFT);
  fill(80,50,30);
  textSize(15);
  text(job,windowWidth-300,75);
  text(requiredAbilities,windowWidth-300,windowHeight/2-75);
  text(toolbox,windowWidth-300,windowHeight-225);
  textFont(sourceReg);
  textSize(10);
  text(table.getString(3,1),windowWidth-300,100);
  text(table.getString(3,2),windowWidth-300,windowHeight/2-50);
  text(table.getString(3,3),windowWidth-300,windowHeight-200);
  descriptionText.html(descriptionC);


  if (count == 0){
    contentText.html(table.getString(3,4));
    fill(0,255,0);
    rect(windowWidth/3+50,85,40,5);
    buttonPrev.hide();

  }


  if (count == 1){
    contentText.html(table.getString(3,5));
    fill(0,255,0);
    rect(windowWidth/3+50,85,40,5);
    buttonNext.hide();
  }

}

function originV(){
  rectMode(CENTER);
  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();
  lineBlack.hide();
  lineYellow1.hide();
  lineYellow2.hide();
  lineYellow3.hide();
  lineYellow4.hide();
  lineYellow5.hide();
  lineYellow6.hide();
  buttonBackRight.show();
  descriptionText.show();

  let descriptionO = "The video introducing the GFW here is an example of a video downloading from YouTube outside of the wall."

  fill(255);
  rect(windowWidth/2, windowHeight/2,windowWidth, windowHeight);
  rectMode(CORNER);
  fill(255,255,100);
  rect(0,0,windowWidth/3,windowHeight);

  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);

  textAlign(LEFT);
  fill(100,70,50);
  textSize(25);
  text('Original Video',windowWidth/3+50,75);
  descriptionText.html(descriptionO);

  buttonPlayVideo.show();
  vidEN.show();
  vidEN.loop();
  vidEN.volume(0);
  vidEN.size(720,480);
  vidEN.position(windowWidth/3+50,100);


}

function reuploading(){
  rectMode(CENTER);
  lineBlack.hide();
  lineYellow1.hide();
  lineYellow2.hide();
  lineYellow3.hide();
  lineYellow4.hide();
  lineYellow5.hide();
  lineYellow6.hide();
  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();
  buttonBackRight.show();
  descriptionText.show();

  let descriptionR = "The video showing here has been gone through all the processes and ready to be uploaded on to video platform in China. It is a product of team effort."

  fill(255);
  rect(windowWidth/2, windowHeight/2,windowWidth, windowHeight);
  rectMode(CORNER);
  fill(255,255,100);
  rect(0,0,windowWidth/3,windowHeight);

  rectMode(CENTER);
  textAlign(CENTER);
  fill(30,25,22);
  noStroke();
  textSize(25);
  textFont(sourceBold);
  text(title,windowWidth/6,75);

  textAlign(LEFT);
  fill(100,70,50);
  textSize(25);
  text('Reuploading',windowWidth/3+50,75);

  descriptionText.html(descriptionR);

  buttonPlayVideo.show();
  vidZH.show();
  vidZH.loop();
  vidZH.volume(0);
  vidZH.size(720,480);
  vidZH.position(windowWidth/3+50,100);


  buttonR.hide();
  buttonM.hide();
  buttonT.hide();
  buttonC.hide();
  buttonU.hide();
  buttonO.hide();

}

function next(){
  count = count+1;
  //  print(count);
}

function prev(){
  count = count-1;
}

function playVideoToggle(){
  if(videoPlaying){
    vidEN.pause()
    buttonPlayVideo.html('pause');
    vidEN.volume(0);
  }
  else{
    vidEN.play();
    buttonPlayVideo.html('play');

  }

  if(videoPlaying){
    vidZH.pause()
    buttonPlayVideo.html('pause');
  }
  else{
    vidZH.play();
    buttonPlayVideo.html('play');

  }

  videoPlaying = !videoPlaying;

}

function draw() {
  // put drawing code here

  //if the boolean is true, then call the function over and over.
  //you need to do this because when the count variable changes, the function needs
  //to be called again to check against the count value.
  //You need to make a boolean and do this for every finction that uses the buttons.
  if(findingBool == true){
    findingR();
  }

  if(translationBool == true){
    translation();
  }

  if(captionBool == true){
    captioning();
  }
}
