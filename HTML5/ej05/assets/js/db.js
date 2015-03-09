var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: "Twitter.db",
            version: "2.0",
            description: "Twitter database",
            size: 1 * 1024 * 1024
        };

    //1.abrimos la base de datos
    //devuelve peticion
    var request = indexedDB.open(cfg.name, cfg.version);


    var init = function(success) {


        if (!db) {

            request.addEventListener('success', function(e) {

                console.log('Database' + cfg.name + ' OK');

                //la base de datos que vamos a usar
                db = e.target.result;
                success();
            });

            //si la version no coincide
            request.addEventListener('upgradeneeded', function(e) {

                console.log('Updating database...');
                db = e.target.result;
                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
                console.log(tweets);

            });

            request.addEventListener('error', function(e) {

                console.log('Error al abrir ' + cfg.name + 'error');

            });


        } else {
            success();
        }


    };



    var insert = function(tweet) {

        init(function() {
            //[tweets] es un array de elementos que quireo insertar, podria ir varios, [tweets, comentarios]....
            transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });

    };


    var get = function (id, success){
  		 init(function() {
    		var transaction = db.transaction(['tweets'], "readonly");
			var store = transaction.objectStore('tweets');
			var getrequest = store.get(id);

			 getrequest.addEventListener('success', function(e){

			 	success(e.target.result);

			});
		});
    };


    return {
        //puede ir con comillas
        insert: insert,
        get:get
    };
})();
