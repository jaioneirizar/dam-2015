(function(){
    var tweet={
        id:"3242432423",
        text:"dsad",
        author:"hsajdh",
        createdAt:"asdd"
    };
    //APP.DB.insert(tweet);
    var success=(function(datos){
        console.log("Ver datos");
        console.log(datos);
    });

    APP.DB.getAll(success);
})();