
var Dog
var Happy
var FoodS
var Foodstock
var database
var pos1
var pos2



function preload()
{
  pos1 = loadImage("images/Dog.png")
  pos2 = loadImage("images/happydog.png")
  
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database()
  
  Dog = createSprite(250,250,20,20)
  Dog.addImage(pos1)
  Dog.scale = 0.3

  Foodstock = database.ref('Food')
  Foodstock.on("value",function(data){
    FoodS = data.val()
  })
  
}


function draw() { 
  background (46,139,87)

textSize(15)
fill("white")
  text ("Press Up Arrow key to feed Mr.Dog",125,450)


fill ("black")
textSize(20)
text ("Food Left : "+FoodS, 200,100)

if(keyWentDown(UP_ARROW)){

  Dog.addImage(pos2)
  FoodS = FoodS-1

  }

  drawSprites();
  

}





