(function() {

    var parimpar = function(numero) {

        var ok = "falso";
        var i;
        var rs;

        if (typeof(numero) === 'number') {


            if (numero % 2 == 0) {
                rs = "par";
            }
            else {
                rs = "impar";
            }



           


        } else {
            rs="false";
        }

         return rs;

    }


    console.log(parimpar(361));
    console.log(parimpar("sdlkfjsdf"));
    console.log(parimpar());
    console.log(parimpar(-119));

})();


//return numero % 2 == 0