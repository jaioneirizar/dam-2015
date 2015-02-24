var App = App || {Model : {} };
App.Model.Square=(function (){

	var _side;
	

	function Square (x, y,side) {

		  App.Model.Shape.call(this, x, y);
		  //App.Model.Shape.apply(this, [x, y]);
		  //App.Model.Shape.bind(this)(x,y);
		 _side= (typeof side === "number") ? side : 0;
		 

	}
 //Indicamos el padre;
	Square.prototype= new App.Model.Shape();

	 Square.prototype.getSide = function() {

        return _side;
    };


	 Square.prototype.setSide = function(side) {

         _side= (typeof side === "number") ? side : _side;
    };

    Square.prototype.getArea = function(){

    	return Math.pow(_side,2);
    	  
    };

	return Square;

})();