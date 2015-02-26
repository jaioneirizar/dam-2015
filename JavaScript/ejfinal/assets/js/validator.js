HTMLFormElement.prototype.validate = function() {

	


    var validador = {

        required: function(val){
        	return  !(val===undefined || val===null || val.length===0 || /^\s+$/.test(val));
        },
        email: function (val){
        	return /^\w+(\.\w+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(value);

        },

        password: function(val) {
       	 	 mayuscula: /[A-Z]/;
        	 minuscula: /[a-z]/;
        	 digito :/[0-9]/;

        	return (val.length >= 6) && mayuscula.test(val) && minuscula.test(val) && digito.test(value);
    	}


    }


    
    var required = this.querySelectorAll(".required");
 	 
var validate = function (e) {

		error= validador.required(this);
		console.log(validador.required(this));

		if (error===true){
			e.preventDefault();
			console.log (error);
		}
	};

	this.addEventListener('submit',validate, false);
	//for (var i= required.length -1; i >=0; i--){

		//required.addEventListener('blur',validate, false);
	//}

};

