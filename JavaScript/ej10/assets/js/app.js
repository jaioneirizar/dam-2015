window.onload = function() {

    var ul = document.getElementById('lista');
    var boton = document.getElementById('add');
    //var lis = ul.querySelectorAll('li');

    var log= function () {

        console.log("New Date ");
    };

    var add = function(e) {

        e.stopPropagation();
        if (ul) {
            var nuevoli = document.createElement('li');

            nuevoli.innerText = 'Elemento ' + (ul.children.length + 1);
            ul.appendChild(nuevoli);

        }
    };

    var remove = function(e) {
        if (confirm("Estas seguro de que quieres eliminar esto?")) {
            this.removeChild(e.target);
        }

    };

    if (boton) {
        boton.addEventListener('click', add, false);
    }

  /*  if (lis.length) {

        for (var i = lis.length - 1; i >= 0; i--) {

            lis[i] = addEventListener('click', remove, false);
        }
    }*/

    if(ul)
    {
         ul.addEventListener('click', remove, false);
    }

    document.addEventListener('click', log, false);
};
