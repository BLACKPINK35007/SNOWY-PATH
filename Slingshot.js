class Slingshot{
       constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:25,
            stiffness:0.2
        }
        this.sling=Matter.Constraint.create(options)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        World.add(world,this.sling)
       }
       fly(){
           this.sling.bodyA=null
       }
      display() {
          if(this.sling.bodyA){
             image(this.sling1,200,20) 
             image(this.sling2,170,20) 
          var pointA=this.sling.bodyA.position
          var pointB=this.sling.pointB
          strokeWeight(4)
         line(pointA.x,pointA.y,pointB.x,pointB.y)}
      }
}