class Opponent3{
    constructor(x,y,w,h){  
    
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.image1=loadImage("opponent7.png")
    this.image2=loadImage("opponent8.png")
    this.image3=loadImage("opponent9.png")
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h )
    World.add(world,this.body)
    }
}
