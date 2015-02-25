window.onload = function() {
    var enlaces = document.getElementsByTagName('a');
    console.log("Numero de enlaces: " + enlaces.length);

    enlaces = document.querySelectorAll('a');
    console.log("Numero de enlaces: " + enlaces.length);

    console.log(enlaces[enlaces.length - 2].href);

    enlaces = document.querySelectorAll('a[href="http://prueba/"]');
    console.log("Numero de enlaces: " + enlaces.length);

    var count = 0;
    for (var i = enlaces.length - 1; i >= 0; i--) {
        if (enlaces[i].href === "http://prueba/") {
            count++;
        }
    }
    console.log("Numero de enlaces: " + count);

    parrafos = document.querySelectorAll('p');

    if (parrafos.length > 2) {
        enlaces = parrafos[2].querySelectorAll('a');
        console.log("Numero de enlaces: " + enlaces.length);

    }

    enlaces = document.querySelectorAll('body >p:nth-child(3)> a');
    console.log("Numero de enlaces: " + enlaces.length);


};
