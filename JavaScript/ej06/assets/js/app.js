(function() {

     var s1 = new App.Model.Shape();
    s1.move(5, 5);
    console.log(s1);
    var s2 = new App.Model.Shape(10, 10);
    s2.move(5, 5);
    console.log(s2);
    console.log(s2.getX());
    console.log(s2.getY());
    s2.setY(0);
    console.log(s2.getX());
    console.log(s2.getY());

    var c=new App.Model.Circle(10,10,3);
    console.log(c);
    console.log(c.getX());
    console.log(c.getY());
    console.log(c.getRadius());
    //c.setRadius(5);
    console.log(c.getArea());

   var cuadrado= new App.Model.Square(20,20,6);
    console.log(cuadrado);
    console.log(cuadrado.getX());
    console.log(cuadrado.getY());
    console.log(cuadrado.getSide());
    console.log(cuadrado.getArea());


 var rect= new App.Model.Rectangle(20,20,3,5);
    console.log(rect);
    console.log(rect.getX());
    console.log(rect.getY());
    console.log(rect.getHeight());
    console.log(rect.getArea());

 
})();
