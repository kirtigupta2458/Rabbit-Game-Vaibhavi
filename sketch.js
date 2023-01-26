var gameState="play"
var rabbit,apple,bg,banana,blueberry,branchLeft,branchRight,grapes,rabbitCrying,rabbitRequesting,rabbitSitting,strawberry

function preload(){
    apple=loadImage("apple.png")
    bg=loadImage("background1.jpg")
    banana=loadImage("banana.png")
    blueberry=loadImage("blueberry.png")
    branchLeft=loadImage("branchleft.png")
    branchRight=loadImage("branchright.png")
    grapes=loadImage("grapes.png")
    rabbitCrying=loadImage("rabbitcrying.png")
    rabbitRequesting=loadImage("rabbitrequesting.png")
    rabbitSitting=loadImage("rabbitsitting.png")
    strawberry=loadImage("strawberry.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    rabbit=createSprite(width/2,height-70,50,50)
    rabbit.addImage("sitting",rabbitSitting)
    rabbit.scale=0.6
    rabbit.addImage("crying",rabbitCrying)
    rabbit.addImage("requesting",rabbitRequesting)
}

function draw(){
    background(bg)

    if(gameState=="play"){
        if(keyDown("left")){
            rabbit.x-=10
        }
        if(keyDown("right")){
            rabbit.x+=10
        }
    }



    drawSprites(); 
}