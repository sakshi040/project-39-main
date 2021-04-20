const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var player;
var oP1;
var oP2;
var oP3;
var Ob1;
var Ob2;
var Ob3;
var database;
var distance=0;
var gameState=0;
var canvas;

function setup(){
    database=firebase.database();
    canvas=createCanvas(1200,300)
}

function draw(){
Engine.update(engine);
}