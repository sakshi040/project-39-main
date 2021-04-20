class MainPlayer{
    constructor(x,y,w,h){  
    
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.image1=loadImage("mainPlayer1.png")
    this.image2=loadImage("mainPlayer2.png")
    this.image3=loadImage("mainPlayer3.png")
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h )
    World.add(world,this.body)
    }
}
