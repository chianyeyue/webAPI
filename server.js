var http = require('http');
var fs = require("fs");
var qs = require("querystring");


var MongoClient = require("mongodb").MongoClient;
var dbUrl="mongodb://localhost:27017/mydb"

//create a server object:
http.createServer(function (req, res) {
    
    if(req.url === "/apple"){
		res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
	}else if(req.url === "/orange"){
		sendFileContent(res, "webjquery.html", "text/html");
	}else if(req.url === "/aaa"){
		sendFileContent(res, "aaa.html", "text/html");
    }else if(req.url === "/index"){
		console.log("Requested URL is url" +req.url);
		sendFileContent(res, "index.html", "text/html");
    }else if(req.url === "/p1"){
		sendFileContent(res, "p1.html", "text/html");
    }else if(req.url === "/p2"){
		sendFileContent(res, "p2.html", "text/html");
	}else if(req.url === "/API"){
		sendFileContent(res, "API.html", "text/html");
		
	}else if(req.url === "/registration"){
		console.log("Requested URL is url" +req.url);
		sendFileContent(res, "registration.html", "text/html");
	}else if(req.url === "/login"){
		console.log("Requested URL is url" +req.url);
		sendFileContent(res, "login.html", "text/html");
	}else if(req.url === "/cpu1"){
		console.log("Requested URL is url" +req.url);
		sendFileContent(res, "cpu1.html", "text/html");
	}else if(req.url === "/myFavourList"){
		console.log("Requested URL is url" +req.url);
		sendFileContent(res, "myFavourList.html", "text/html");
	}else if(req.url === "/check_reg"){
		console.log("Registration" +req.url);
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				var pwd;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("OK_received");
				//res.end(user);
				
				res.end("Account Created!");
				//var mData;
				//mData = JSON.parse(data);
				
				var query={"login": user , "password": pwd};
				//var myobj = {"name":"sam"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("myDB");
							//var myobj = stringMsg;
							//dbo.collection("mycollection").insertOne(myobj, function(err, res) {
							dbo.collection("mycollection").insertOne(query, function(err, res) {
								if (err) throw err;
								console.log("1 document inserted");
								db.close();
							});
				});
				
			
			       });
			
			});
			
		}else{
				
				
			     res.end("abc");
			}		
	
		
	}else if(req.url === "/check_login"){
		console.log("login checking" +req.url);
		//sendFileContent(res, "login.html", "text/html");
		if(req.method==="POST"){
			console.log("data get!");
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				var pwd;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("test received");
				//
				
				//var mData;
				//mData = JSON.parse(data);
				
				var query={"login": user , "password": pwd};
				//var myobj = {"name":"sam"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("myDB");
							//var query={"login": user,"password":pwd};
							console.log(query);
							dbo.collection("mycollection").find(query).toArray(function(err, result) {
								if (err) throw err;
								console.log("comment find");
								console.log(JSON.stringify(result));
								
								db.close();
								res.end(JSON.stringify(result));
							});
				});
				
			
			       });
			
			});
			
		}		
	
	}else if(req.url === "/save_fav"){
		console.log("saving to favourite list" +req.url);
		//sendFileContent(res, "login.html", "text/html");
		if(req.method==="POST"){
			console.log("save fav");
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				
				
				data=qs.parse(formData);
				user=data['login'];
				
				var cpu1;cpu1= data['cpu1'];
				var cpu2;cpu2= data['cpu2'];
				var cpu3;cpu3= data['cpu3'];
				var cpu4;cpu4= data['cpu4'];
				var cpu5;cpu5= data['cpu5'];
				var cpu6;cpu6= data['cpu6'];
				var cpu7;cpu7= data['cpu7'];
				var cpu8;cpu8= data['cpu8'];
				var cpu9;cpu9= data['cpu9'];
				var cpu10;cpu10= data['cpu10'];
				var cpu11;cpu11= data['cpu11'];
				var cpu12;cpu12= data['cpu12'];
				var cpu13;cpu13= data['cpu13'];
				var cpu14;cpu14= data['cpu14'];
				
				
				
				
				console.log(user);
				console.log(cpu1+cpu2+cpu3+cpu4+cpu5+cpu6+cpu7+cpu8+cpu9+cpu10+cpu11+cpu12+cpu13+cpu14);
				console.log("OK_received");
				
				res.end("Saved!");
				
				var myquery = { login: user };
				var newvalues = { $set: {"login": user, 
							"cpu1": cpu1,
							"cpu2": cpu2,
							"cpu3": cpu3,
							"cpu4": cpu4,
							"cpu5": cpu5,
							"cpu6": cpu6,
							"cpu7": cpu7,
							"cpu8": cpu8,
							"cpu9": cpu9,
							"cpu10": cpu10,
							"cpu11": cpu11,
							"cpu12": cpu12,
							"cpu13": cpu13,
							"cpu14": cpu14,
							
							} };   
				//var newvalues = { $set: {"login": user, "password": '333' } };
				console.log(newvalues);
  
				MongoClient.connect(dbUrl, function(err, db) {
				  if (err) throw err;
				  var dbo = db.db("myDB");
				  //var myquery = { address: /^S/ };
				  //var newvalues = {$set: {name: "Minnie"} };
				  dbo.collection("mycollection").updateOne(myquery, newvalues, function(err, res) {
					if (err) throw err;
					console.log("1 document updated");
					db.close();
				  });
				});
				
			
			       });
			
			});
			};
		
	}else if(req.url === "/load_fav"){
		console.log("loading favourite list" +req.url);
		//sendFileContent(res, "login.html", "text/html");
		//if(req.method==="GET"){
			//console.log("2222222222222");
			formData = '';
			return req.on('data', function(data) {
				
			    formData='';
				formData+=data;
				console.log(formData);
				
				return req.on('end', function() {
				
			    var user;
				var data;
				
				var pwd;
				
				data=qs.parse(formData);
				user=data['login'];
				pwd=data['password'];
				console.log(user);
				console.log(pwd);
				console.log("test received");
				//
				
				//var mData;
				//mData = JSON.parse(data);
				
				var query={"login": user};
				//var myobj = {"name":"sam"};
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("myDB");
							//var query={"login": user,"password":pwd};
							console.log(query);
							dbo.collection("mycollection").find(query).toArray(function(err, result) {
								if (err) throw err;
								console.log("comment find");
								console.log(JSON.stringify(result));
								
								db.close();
								res.end(JSON.stringify(result));
							});
				});
				
			
			       });
			
			});
			
		//}		
	
	}else if(/^\/[a-zA-Z0-9\/]*.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}else if(/^\/[a-zA-Z0-9\/]*.jpg$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/jpg");
    }else if(/^\/[a-zA-Z0-9\/]*.png$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/png");
    }
}).listen(9999); //the server object listens on port 8080


function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
			response.end();
		}
		//response.end();
	});
}