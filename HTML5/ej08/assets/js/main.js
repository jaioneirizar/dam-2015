$(function() {
    "use strict";

    // Obtener los elementos del DOM
    var status = document.getElementById('status');
    var input = document.getElementById('input');
    var content = $('#content');

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    var socket = new WebSocket('ws://www.arkaitzgarro.com:1337');

    socket.addEventListener('open', function(e) {

        console.log("El canal está preparadado");

    });

    socket.addEventListener('onerror', function(e) {

        console.log('WebSocket Error ' + error);

    });

    socket.addEventListener('close', function(e) {

        console.log('El canal está cerrado');

    });

    socket.addEventListener('message', function(e) {

        var json;

        try {
            json = JSON.parse(e.data);
        } catch (ex) {

            //console.log ("Error with json message." e.data );
            return false;
        }


        if (json) {

            switch (json.type) {

                case 'color':

                    myColor = json.data;
                    status.style.color = myColor;
                    break;

                case 'history':

                    for (var i = 0; i < json.data.length; i++) {

                        var msg = json.data[i];

                        addMessage(
                            msg.author,
                            msg.text,
                            msg.color,
                            new Date(msg.time));
                    }

                    break;

                case 'message':

                    addMessage(
                        json.data.author,
                        json.data.text,
                        json.data.color,
                        new Date(json.data.time));
                    break;
            }
        }
    });

   

    input.addEventListener('keypress', function(e) {

        var key = e.keyCode;

        if (key === 13) {

            //socket.addEventListener('onopen', function() {

            //if (input.value !== " " && input.value !== "undefined") {

            // console.log(input.value);
            socket.send(input.value);
            input.value = " ";
        }
        //});
    });

    socket.addEventListener('onerror', function(e) {

        console.log('WebSocket Error ' + error);

    });

    socket.onmessage = function(e) {
        console.log('Server: ' + e.data);

    };
    
    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
            +(dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
    }

});

 // 1. Al abrir la conexión, solicitar el nick.
  // 2. Controlar posibles errores del servidor.

  // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"

// 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */