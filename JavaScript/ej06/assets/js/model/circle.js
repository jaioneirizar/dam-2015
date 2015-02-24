var App = App || {Model : {} };
App.Model.Circle=(function (){

	var _radius;
	var _area;

	function Circle (x, y,radius) {

		  App.Model.Shape.call(this, x, y);
		  //App.Model.Shape.apply(this, [x, y]);
		  //App.Model.Shape.bind(this)(x,y);
		 _radius= (typeof radius === "number") ? radius : 0;
		 

	}
 //Indicamos el padre;
	Circle.prototype= new App.Model.Shape();

	 Circle.prototype.getRadius = function() {

        return _radius;
    };


	 Circle.prototype.setRadius = function(radius) {

         _radius= (typeof radius === "number") ? radius : _radius;
    };

    Circle.prototype.getArea = function(){

    	return Math.PI*Math.pow(_radius,2);
    	  
    };

	return Circle;

})();