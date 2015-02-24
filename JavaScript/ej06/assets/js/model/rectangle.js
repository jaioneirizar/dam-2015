var App = App || {Model : {} };
App.Model.Rectangle=(function (){


	var _height;

	function Rectangle (x, y, width, heigth) {

		  App.Model.Square.call(this, x, y, width);
		 _height= (typeof heigth === "number") ? heigth : 0; 

	}

	Rectangle.prototype= new App.Model.Square();

	 Rectangle.prototype.setHeight = function(heigth) {

         _height= (typeof heigth === "number") ? heigth : _height;
    };

    Rectangle.prototype.getHeight = function() {

        return _height;
    };


   Rectangle.prototype.getArea = function(){
		return _height*this.getSide();
   };





	return Rectangle;

})();

``