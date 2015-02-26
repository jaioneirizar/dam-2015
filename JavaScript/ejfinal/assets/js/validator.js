HTMLFormElement.prototype.validate = function() {

    //var form = this;


    var validador = {

        required: function(val) {
            return !(val === undefined || val === null || val.length > 0 || /^\s+$/.test(val));
        },
        email: function(val) {

            return /^\w+(\.\w+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(val);

        },

        password: function(val) {

            may = /[A-Z]/;
            minuscula = /[a-z]/;
            digito = /[0-9]/;

           // return this.required(value) && (val.length >= 6) && may.test(val) && minuscula.test(val) && digito.test(val);
        }


    };



    var required = this.querySelectorAll(".required");
    var email = this.querySelectorAll(".email");


    var validate = function(e) {

        var errores = [];

        


     for (var i = email.length - 1; i >= 0; i--) {

            if (email[i].value != null && email[i].value != undefined) {
                var error = validador.email(email[i].value);
                if (!error) {

                    errores.push("EL formato del email no es correcto");

                }
            }

        }

        if (errores.length > 0) {
            e.preventDefault();
            for (var i = errores.length - 1; i >= 0; i--) {
                console.log(errores[i]);

            }
        }

    };



    var validateField() {

        for (var i = required.length - 1; i >= 0; i--) {
            var this = required.item(i);

            if (this.type === "checkbox" && !this.checked) {

                errores.push(this.name + 'No esta marcado');

            } else if (this.type === "password") {

                if (!validador.password(this.value)) {
                    errores.push(this.name + "el password no cumple con los  requisitos");
                }


            } else {

                var error = validador.required(this.value);
                if (!error) {
                    errores.push(this.name + " Campo Requerido");

                }

            }

            if(errores= function (){
                
            }


    }

    this.addEventListener('submit', validate, false);
    for (var i = required.length - 1; i >= 0; i--) {
        required[i].addEventListener('blur',validateField, false);
    };


};
