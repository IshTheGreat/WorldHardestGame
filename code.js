var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e9bbfdd4-0c3c-4796-9088-c26ac25c9056","b12fc340-f378-4180-a12f-0950198d9959","42cf7b83-7b51-460f-9174-186efd2772e8","81301833-a084-4c68-9e51-0ead4bf8a906","177ea1e8-8ba8-40f3-aecf-a97d06896b19"],"propsByKey":{"e9bbfdd4-0c3c-4796-9088-c26ac25c9056":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":60,"version":"T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T3gaSeDCsA_YHvy7GieJSRtG4e1P8Ac1/category_vehicles/car_yellow.png"},"b12fc340-f378-4180-a12f-0950198d9959":{"name":"Screenshot 2021-07-05 153746.png_1","sourceUrl":"assets/v3/animations/yHPNZu-EnFMB-g89lgxVsxgfCmSvH5DsfgEGiYGsJXc/b12fc340-f378-4180-a12f-0950198d9959.png","frameSize":{"x":105,"y":202},"frameCount":1,"looping":true,"frameDelay":4,"version":"UYObTAq6EBGCiU8p5AgjgeRt0sYyrCpI","loadedFromSource":true,"saved":true,"sourceSize":{"x":105,"y":202},"rootRelativePath":"assets/v3/animations/yHPNZu-EnFMB-g89lgxVsxgfCmSvH5DsfgEGiYGsJXc/b12fc340-f378-4180-a12f-0950198d9959.png"},"42cf7b83-7b51-460f-9174-186efd2772e8":{"name":"sungogs","sourceUrl":null,"frameSize":{"x":316,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"561CegN1HHPzeEaAcMYITD6QjQNpYDMo","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":134},"rootRelativePath":"assets/42cf7b83-7b51-460f-9174-186efd2772e8.png"},"81301833-a084-4c68-9e51-0ead4bf8a906":{"name":"gogs","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"y9tSgQh63mK.YSUzLCVbX38OelZtghDy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/81301833-a084-4c68-9e51-0ead4bf8a906.png"},"177ea1e8-8ba8-40f3-aecf-a97d06896b19":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"i_UCwG7PC5vzPYNQC8HCjgZ3shV8icqz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/177ea1e8-8ba8-40f3-aecf-a97d06896b19.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var glasses = createSprite(355,160,20,20)
glasses.setAnimation("gogs")


  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.setVelocity(0,8)
car2.setVelocity(0,8)
car3.setVelocity(0,8)
car4.setVelocity(0,8)


function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  car1.bounceOff(boundary1)
  car1.bounceOff(boundary2)
  
  car2.bounceOff(boundary1)
  car2.bounceOff(boundary2)
  
  car3.bounceOff(boundary1)
  car3.bounceOff(boundary2)
  
  car4.bounceOff(boundary1)
  car4.bounceOff(boundary2)
  
  if(keyDown("right")) {
    sam.x = sam.x + 2
  }
  if(keyDown("left")) {
    sam.x = sam.x - 2
  }
  if(sam.isTouching(car1)) {
    reset()
    life = life + 1
  }
  if(sam.isTouching(car2)) {
    reset()
    life = life + 1
  }
  if(sam.isTouching(car3)) {
    reset()
    life = life + 1
  }
  if(sam.isTouching(car4)) {
    reset()
    life = life + 1
  }
// create bounceoff function to make the car bounceoff the boundaries
//Add the c ondition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 drawSprites();
}

function reset() {
  sam.x = 20
  sam.y = 190
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
