HTMLFormElement.prototype.validate = function() {

    var required = this.querySelectorAll(".required");
    var email = this.querySelectorAll(".email");
    var errores = [];

    var validador = {

        required: function(val) {
            return (val !== undefined && val !== null && val.length > 0 && !/^\s+$/.test(val));
        },
        email: function(val) {


            return /^\w([\w.\-]*\w)?@[a-zA-Z0-9]([\w.\-]*\w)?\.[a-zA-Z]{2,3}$/.test(val);


        },

        password: function(val) {

            return this.required(val) &&
                val.length >= 6 &&
                /[a-z]/.test(val) &&
                /[A-Z]/.test(val) &&
                /[0-9]/.test(val);
        }


    };

    var validate = function(e) {

        for (var i = required.length - 1; i >= 0; i--) {
            //Si es de tipo password le llamamos a la utilidad password del objeto validator
            validateField.call(required[i]);
        }

        for (var n = email.length - 1; n >= 0; n--) {


            if (!validador.email(email[n])) {
                console.log(validador.email(email[n]) + "jaionwerrr");
                errores.push("El formato del email no es correcto");
            }

        }

        if (errores.length) {
            e.preventDefault();

          /*  for (var i = errores.length - 1; i >= 0; i--) {
                console.log(errores[i]);
            };*/
        }
    };



    var validateField = function(event) {

        //vaciamos el array
        errores = [];


        if (this.type === 'password') {
            //Comprobamos pass
            if (!validador.required(this.value)) {
                //Añadimos el error al array de errores
                errores.push(this.name + ' es obligatorio');

            } else {
                if (!validador.password(this.value)) {
                    errores.push(this.name + ' no es una contraseña válida. Debe contener mayúsculas, minúsculas y dígitos');

                }
            }
        } else if (this.type === 'textarea') {
            if (this.textLength > 50) {

                errores.push('Introduzca ' + this.name + ' que no superen los 50 caracteres');
            }
        } else if (this.type === 'checkbox') {

            if (!this.checked) {

                errores.push(this.name + ' no está marcado');
            }
        } else {
            if (!validador.required(this.value)) {

                errores.push(this.name + ' es obligatorio');
            }
        }

        if (errores.length) {
            showError.call(this, errores.join('\n'));
        }
    };

    var showError = function(msgError) {

        var span = document.createElement('span');
        span.classList.add('help-block');
        span.innerText = msgError;

        this.parentNode.classList.add('has-error');
        this.parentNode.appendChild(span);
    }

    this.addEventListener('submit', validate, false);
    for (var i = required.length - 1; i >= 0; i--) {
        required[i].addEventListener('blur', validateField, false);
    };


};
