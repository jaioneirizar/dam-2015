(function() {

    var factorial = function(numero) {

        var ok = "falso";
        var i;
        var rs = 1;
        if (typeof(numero) === 'number' && numero >=0) {


            for (i = 1; i <= numero; i++) {

                var rs = rs * i;

            }

           


        } else {
            rs=false;
        }

        return rs;

    }


    console.log(factorial(6));
    console.log(factorial("sdlkfjsdf"));
    console.log(factorial(undefined));
    console.log(factorial(-6));
    console.log(factorial(0));
    console.log(factorial({}));

})();
