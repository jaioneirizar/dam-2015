var APP=APP||{};
APP.DB=(function(){
	var db, 
	cfg={
		name:"Twitter.db",
		version:"1.0",
		description:"Twitter database",
		size:1 * 1024 * 1024
	};
	createTable='CREATE TABLE IF NOT EXISTS tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY,text TEXT,author TEXT,created_at INTEGER);';
	try{
		db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);

	}catch(e){
		if(e.code===11){
			//movidon del guapo
			db.changeVersion(cfg.version);
		}

	}
	if(db){
		var createSchema=function(txt){
			txt.executeSql(createTable,[],function(tx,results){
				console.log('Table tweet created');
				console.log(results);
			}, function(txt,error){
				console.log('DB error'+error);
			});

		};
		db.transaction(createSchema);

	}

	console.log(db);
	var insert=function(tweet){
		var sql="INSERT INTO tweets VALUES(?,?,?,?);";
		db.transaction(	function(tx){
			tx.executeSql(sql,[tweet.id,tweet.text,tweet.author,tweet.created_at], function(tx,results){
				console.log("Tweet inserted");
				console.log(results);
			}, function(txt,error){
				console.log('DB error'+error);
			});
		});

	};

	var getAll=function(success){
		
		var sql= "SELECT * FROM tweets;";
		db.transaction(function(tx){	
			tx.executeSql(sql,[], function(tx,results){
				console.log(results.rows);
				var datos=[];
				for (var i = results.rows.length; i>0; i--) {
					console.log(results.rows.length);
					//console.log(results.rows.item(i-1));
					datos.push(results.rows.item(i-1));
				}
				success(datos);
			}, function(txt,error){
				console.log('DB error'+error);
				
			});
		});
	};

	return{
		//puede ir con comillas
		//insert:insert
		getAll:getAll
	};
})();