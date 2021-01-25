const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    var sand_options ={
    isstatic: true
}
    sand = Bodies.rectangle(250,380,250,30,sand_options);
    World.add(world,sand);

    var floor_options ={
        isstatic: true
    }
        floor = Bodies.rectangle(270,360,270,50,floor_options);
        World.add(world,floor);    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    rectMode(CENTER);
    rect(sand.position.x,sand.position.y,380,10);

    ellipseMode(RADIUS);
    ellipse(floor.position.x,floor.position.y, 30, 30);
}