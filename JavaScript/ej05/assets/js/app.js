(function() {

        var palindromo = function(cadena) {


            var rs = "";
            if (typeof(cadena) === 'string') {

                var tmp = cadena
                            .trim()
                            .toLowerCase()
                            .replace(/\s/g, '')
                            .split('') /*parto el string, es decir lo meto en el array*/
                            .reverse()
                            .join(''); /* los junto, es decir lo vuelvo a pasar a string*/


               

                return (tmp===cadena.trim().toLowerCase().replace(/\s/g, ''));}

               
                 return false;

        };


   // try {
        console.log(palindromo(6));
        console.log(palindromo(undefined)); 
        console.log(palindromo("sdlkfjsdf"));
        console.log(palindromo("sugus"));
        console.log(palindromo("La ruta nos aporto otro paso natural"));

  /*  }/* catch (e) {
        if (e instanceof) 
        if (e instanceof TypeError) {}*/
   /* }*/


})();


/* tendriamos que poner un try catch por cada error*/
