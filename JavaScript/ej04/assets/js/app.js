(function() {

    var mayusminus = function(cadena) {

        var resultado = "falso";
        

         var resultado = "La cadena \"" + cadena + "\" ";

        if (typeof(cadena)==='string') {


            if (cadena == cadena.toUpperCase()) {

                resultado += "está formada sólo por mayúsculas";

            } else {


                if (cadena == cadena.toLowerCase()) {

                    resultado += " está formada sólo por minusculas";

                } else {
                    resultado += " está formada por mayúsculas y minúsculas";
                }

                


            }

                
        } else {
            throw Error('No es un string');
        }

        return resultado;

    }




    console.log(mayusminus(6));
    console.log(mayusminus("HOLA ESTO ES UNA PRUEBA"));
    console.log(mayusminus("eSTE TIENE de todo"));
    console.log(mayusminus("este solo minusculas"));
    console.log(mayusminus(undefined));
    console.log(mayusminus({}));

})();
