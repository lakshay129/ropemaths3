class rope{
constructor(body1,pointB){
var options={
    stiffness:0.28
    ,
    length:150,
    bodyA:body1,
    pointB:pointB
}
   this.pointB=pointB;
   this.rope=Constraint.create(options)
   World.add(world,this.rope);
}
display(){
    
    if(this.rope.bodyA){
  var pointA=this.rope.bodyA.position
 var pointB=this.pointB
 stroke("white")
 strokeWeight(5)
 push();
 line(pointA.x,pointA.y,pointB.x,pointB.y);
 pop();
    }

}
fly(){
this.rope.bodyA=null
}
}