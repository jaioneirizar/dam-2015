window.onload = function() {

    var ul = document.getElementById('lista');
    var boton = document.getElementById('add');


    var add = function() {


        if (ul) {
            var nuevoli = document.createElement('li');
            nuevoli.innerText='Elemento ' + (ul.children.length + 1);
            ul.appendChild(nuevoli);
            
        }
    };


    if (boton) {
        boton.addEventListener('click',add, false);
    }
};
