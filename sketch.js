const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gamestate = 0;
var story;
var front, game;
var enter = 0;
var backgroundImg;
var character;
var character1;
var timer = 30;

function preload() {
    charImg = loadAnimation("download.png", "download(1).png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    backgroundImg = loadImage("mfbk.jpg");
    createCanvas(displayWidth, displayHeight -113);
    front = new Front();
    front.display();
    var options = {
        isStatic: true
    }
    character = Bodies.rectangle(200,200,50,50,options);
   World.add(world, character);
   character1 = createSprite(400,400,50,50);
}

function draw(){
    background(255);
    if(enter == 1){
        gamestate = 1;
        background(backgroundImg);
    }
    if(gamestate === 1){
        if(frameCount % 60 === 0 && timer > 0){
            timer = timer - 1;
        }
        textSize(100);
        textAlign(CENTER, CENTER);
        text(timer, displayWidth / 2, displayHeight / 2);
        rect(character.position.x, character.position.y, 50,50);
        drawSprites();
    }
}