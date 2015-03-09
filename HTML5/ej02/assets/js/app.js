window.onload = function() {

    var loaded = false;
    //var boton = document.querySelectorAll('.boton');
    var player = document.getElementById('player');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var stop = document.getElementById('stop');
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var backward = document.getElementById('backward');
    var forward = document.getElementById('forward');
    var volume = document.getElementById('volume');
    var progressbar = document.getElementById('progress');
    var playlist = document.querySelectorAll('.tracklist');
    var fullscreen = document.getElementById('full');




    var canplay = function(e) {
        loaded = true;
        volume.value = player.volume * 100;
        
    };

    var playFn = function() {

        if (loaded) {
            player.play();
        }

    };

    var playPauseFn = function() {

        if (loaded) {
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }
    }

    var pauseFn = function() {

        if (loaded) {
            player.pause();
        }

    }
    var playFn = function() {

        if (loaded) {
            player.play();
        }

    }


    var stopFn = function() {

        if (loaded) {
            player.pause();
            player.currentTime = 0;

        }

    }

    var startFn = function() {

        if (loaded) {
            player.currentTime = 0;

        }

    }


    var backwardFn = function() {

        if (loaded) {
            player.currentTime -= 10;

        }

    };

    var forwardFn = function() {

        if (loaded) {
            player.currentTime += 10;

        }

    };


    var endFn = function() {

        if (loaded) {
            player.currentTime = player.duration;

        }

    };


    var fullScreen = function(event) {
        if(loaded) {
            (document.Fullscreen) ? document.cancelFullScreen : player.requestFullScreen();
        }
    };

    var updateFn = function(event) {

       
            progressbar.value = player.currentTime / player.duration *100;
       

    };

      var volumeFn = function() {

        if (loaded) {
            player.volume= this.value/100;
        }

    };

     var changeVideo = function(event) {
        var src = event.target.dataset.src;

        if (Modernizr.video.h264) {
            player.src = src + '.mp4';
        }else {
            player.src = src + '.webm';
        }

        player.load();
    };


    play.addEventListener('click', playFn, false);
    player.addEventListener('canplay', canplay, false);
    player.addEventListener('click', playPauseFn, false);
    pause.addEventListener('click', pauseFn, false);
    stop.addEventListener('click', stopFn, false);
    start.addEventListener('click', startFn, false);
    end.addEventListener('click', endFn, false);
    backward.addEventListener('click', backwardFn, false);
    forward.addEventListener('click', forwardFn, false);
    player.addEventListener('timeupdate',updateFn, false);
    volume.addEventListener('input',volumeFn, false);
    playlist[0].addEventListener('click', changeVideo, false);
    
    fullscreen.addEventListener('click', fullScreen, false);
    


    // 

    /* var ejecutar = function() {

			switch (this.value) {


				case "Iniciar":
					play.call(video);
					break;
				case "Pausa":
					pause.call(video);
					break;
				case "Para":
					stop.call(video);
					break;
				case "Avanza":
					avanzaz.call(video);
					break;
				case "Retrocede":
					retroceder.call(video);
					break;
				case "Inicio":
					inicio.call(video);
					break;
				case "Fin":
					fin.call(video);
					break;
				case "Pantalla Completa":
					platallacompleta.call(video);
					break;

				}


    };



    var play = function(accion) {

        this.play();
    };


    var pause = function(accion) {

        this.pause();
    };

    var stop = function(accion) {

        this.currentTime=0;
    };

    var avanzar = function (accion){

    	this.currentTime+=10;
    };


      var retroceder = function (accion){

    	 this.pause();
    	 this.currentTime-=-10;
    };


    var pantallacompleta = function (accion) {

        this.requestFullscreen();
    };

    var inicio = function(tarea, accion) {

        this.currentTime=0;
    };






    for (var i = boton.length - 1; i >= 0; i--) {
        boton[i].addEventListener("click", ejecutar, false);
    };*/


};
