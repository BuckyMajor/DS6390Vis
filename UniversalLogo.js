var img;
var angle = 0;
 
 function preload()
 {
   // load image
   img = loadImage("https://dm2305files.storage.live.com/y4mAJSkac6_1__F7OBj_rkjriCkPQxuC7_QgM72wqPMUpDctr-lNpRePpN04_osUCbCDU7U7KDxcjScTx2ksa5kgR60BiszAqtkezJr1Mt81UKPOljUdcwmWCdQBgiKhMTNi1YRBzo5KU0b-hg5fAc7r9iqqFzhFL2QBX_fFJsRiMj1TwrTGmNTQf4BftIPTPvnaXZC6ood8-9roKt0KxUiCu-qd44BtTqVPFpxu_N2nxk?encodeFailures=1&width=505&height=505");
   img2 = loadImage("https://dm2305files.storage.live.com/y4mZWQaj7iFQIyoOPk2REznvUS1B3gVwMKH1GvAQT7Wjxbf6fVyDidg6pl-9LybjxScZP68ubEKVvZpVJQTewNIao7DgD2xXzrBbexhhBiJVFz9jm5D9I894OIZ1Ts0Eooh8mrmIt2J4gTrMX7jWtgs4Ru5nss6U1jgymrYxfPELX4NF7QylvCH9Ru-En4qVHWWJ52YwtYOtIxI4ty7o-MVXgoqEKxcggj5mEnLnt6VaA4?encodeFailures=1&width=1920&height=363")
 }

 
 function setup() 
 {
   // set canvas size
   createCanvas(1900, 980);
   fill("#565656");
   posX = 950;
   posX2 = 500;
   angleMode(DEGREES);
   noLoop(); 
 }
   
 function draw() 
 {
   push();
   background("#565656");
   translate(posX2, windowHeight / 2);
   imageMode(CENTER);
   image(img2, 0, 0, 1100, 300);

   noStroke();
   fill("#565656");
   rect(posX-posX2-1100, -100, 1100, 300);
   
  
   translate(posX-posX2, -20);
   rotate(-angle);
   imageMode(CENTER);
   // display image (img, x, y)
   image(img, 0, 0, 250, 250);

    if (angle < 1800) {angle+=10;
    } else {noLoop();
    }
    if (posX > 1900 / 5) {posX-=8;
    } else {noLoop();
    }
    if (posX2 > 1900 / 5) {posX2+=7.7;
    } else {noLoop();
    }
    if (posX > 1900 / 5) {loop();
    } else {noLoop();
    }
   pop(); 
 }