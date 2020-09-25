var mObj,fObj,Obj

function setup() {
  createCanvas(800,400);
  mObj=createSprite(400, 200, 100, 50);
  fObj=createSprite(200, 200, 50, 100);
mObj.shapeColor="green";
fObj.shapeColor="green";
Obj=createSprite(100, 100, 50, 100);
Obj.shapeColor="green";
Obj1=createSprite(100, 100, 50, 100);
Obj2=createSprite(800, 100, 50, 100);
Obj1.velocityX=5;
Obj2.velocityX=-5;

}

function draw() {
  background(255,255,255);  
 mObj.x=mouseX
 mObj.y=mouseY
 console.log ((mObj.width+fObj.width)/2);
 console.log(mObj.x)
 console.log(mObj.x-fObj.x)
 console.log(fObj.x-mObj.x)
 
 if(isTouching(mObj,fObj))
 
  {
    mObj.shapeColor="red";
    fObj.shapeColor="red";
   }
   else
   {
    mObj.shapeColor="green";
    fObj.shapeColor="green";
   }
 bounce(Obj1,Obj2);
 
 drawSprites();
}


