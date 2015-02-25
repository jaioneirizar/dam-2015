window.onload = function() {  
    var enlace = document.querySelectorAll('.enlace');
    var span = document.querySelectorAll('.adicional.oculto');
    console.log (enlace);
    console.log (span);


    var muestra = function() {

        if (span.length) {

            console.log(span[0].classList.remove('oculto'));

        }
        if (enlace.length) {

            console.log(enlace[0].classList.add('oculto'));

        }

    };

    if (enlace.length){
        enlace[0].addEventListener('click',muestra, false);
    }

};
