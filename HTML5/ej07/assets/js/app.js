window.onload = function() {


    var boton = document.getElementById('calcular');
    var num = document.getElementById('number');
    var result = document.getElementById('resultados');


    var worker = new Worker('assets/js/prime.js');




    calcular.addEventListener('click', function(e) {

        e.preventDefault();

        var num = boton.value;
        worker.postMessage(num);



    });

    worker.addEventListener('message', function(e) {
        var primes = e.data;

        result.innerHTML = primes.join("");

    });

};
