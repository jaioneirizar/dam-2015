(function(){
    var tweet={
        id:"324243242323",
        text:"dsad",
        author:"hsajdh",
        createdAt:"asdd"
    };
    //APP.DB.insert(tweet);
    APP.DB.get(tweet.id, function(t){

        console.log(t);
    });

    var success=(function(datos){
        console.log("Ver datos");
        console.log(datos);
    });

   // APP.DB.getAll(success);
})();