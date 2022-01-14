class drops{
constructor(x,y,r){
    var options={
'density':0.1
    }
 this.x=x
 this.y=y
 this.r=r
 this.widht=width
this.height=height
this.dro=[]


this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)




}

display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
rectMode(CENTER)
fill(0,0,300)
ellipse(pos.x,pos.y,this.r,this.r)
pop()
var maxdrops=100

for(var i=0;i<maxdrops;i++){
    dro.push[(random(0,400),random(0,400))]
}



}


}

