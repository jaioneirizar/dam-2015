$(function() {
    var $ticker = $("#ticker");
    var $detener = $('#detener');
    var $anterior = $('#anterior');
    var $siguiente = $('#siguiente');

   var  peticionAJAX = function(){

    $.ajax("../servidor/generaContenidos.php", {

    	/*para enviar datos al servidor 
        data: {

            user: "jaione",
            pass: "123"

        },

        method: 'POST',*/
        success: function(data, status, jqXHR) {

        	$ticker.text(data);

       		/*console.log(data);
            console.log(status);
            console.log(jqXHR);*/

        }
    });
};

 // ejecutalo justo un segundo despues de pasar por aqui
    //setTimeout(fn, 1000);
   // ejecutalo justo un segundo despues de pasar por aqui y continua ejecutandolo cada segundo
     var interval = setInterval(peticionAJAX, 1000);
    $detener.on('click', function (){

    		clearInterval(interval);

    });


 });
