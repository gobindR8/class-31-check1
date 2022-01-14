const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint

var engine
var world
var droplets
var ground1
var dro=[]

function preload(){
    
}

function setup(){
    createCanvas(1500,900)
   engine=Engine.create()
   world=engine.world

ground1=new ground(200,800,1000,50)

   Engine.run(engine)
    
}

function draw(){
    background(0)
droplets.display()
ground1.display()

}