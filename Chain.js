class Chain {
    //To attach 2 bodies together passing it in the constructer
    constructor(body1, body2){
        //var options requires 2 things to be attached together (2 bodies or body and point), length and stiffnes
        //If stiffnes is more than 1 it is too stiff
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        };
        //To create the constraint we use constraint.create function 
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }

    //To show a constraint between 2 bodies we are drawing a line in display function 
    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}