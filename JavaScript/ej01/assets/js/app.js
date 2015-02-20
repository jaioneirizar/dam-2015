(function() {

    var validaDNI = function(dni) {

        var numero = dni.substr(0, dni.length - 1);
        var letra = dni.substr(dni.length - 1, 1);
        numero = parseInt(numero);
        if ((numero > 99999999) || (numero < 0)) {
            console.log("Numero erroneo");
        } else {

            numero = numero % 23;
            var listletra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
            listletra = listletra[numero];
            if (listletra == letra) {

                console.log("EL numero y la letra indicada son correctas");
            } else {
                console.log("La letra no es correcta");
            }


        }


        return true;
    };

    console.log(validaDNI("123456789875433") === false);
    console.log(validaDNI("123456789A") === false);
    console.log(validaDNI("72505881Z") === true);
    console.log(validaDNI("725881Z") === false);
    console.log(validaDNI("Z") === false);
    console.log(validaDNI("undefined") === false);
    console.log(validaDNI({}) === false);
})();

//dni_match('/[0-9]{7,8}[A-Z]/'); 