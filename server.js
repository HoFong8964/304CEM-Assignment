var http = require('http');
var fs = require("fs");
var qs = require("querystring");

var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";


//create a server object:
http.createServer(function (req, res) {
    if(req.url === "/index"){
	   	sendFileContent(res, "index.html", "text/html");
    }else if(req.url === "/login"){
		sendFileContent(res, "login.html", "text/html");
	}else if(req.url === "/signup"){
		sendFileContent(res, "signup.html", "text/html");
	}else if(req.url === "/abc"){
		sendFileContent(res, "index.html", "text/html");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.bundle.min.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}else if(/^\/[a-zA-Z0-9\/-]*.min.css$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/css");
	}else if(/^\/[a-zA-Z0-9\/-]*.jpg$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/jpg");
	}else if(/^\/[a-zA-Z0-9-._\/]*.min.js$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/javascript");
	}else if(/^\/[a-zA-Z0-9-]*.min.css.map$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/map");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.min.js.map$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/map");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.css.map$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/map");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.png$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "image/png");
	}else if(/^-+|-+$|[^A-Za-z0-9-]*.ico$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/ico");
	}else if(/^\/[a-zA-Z0-9\/-/?]*.ttf$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/font");
	}else if(/^\/[a-zA-Z0-9\/-/?]*.woff$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/woff");
	}else if(/^\/[a-zA-Z0-9\/-/?]*.woff2$/.test(req.url.toString())){
		sendFileContent(res, req.url.toString().substring(1), "text/woff2");
	}else if(req.url === "/check_signup"){
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					data=qs.parse(formData);
					handle_signup(data);
					
				});
			});
		}else{
			res.end("Requedt Method not vaild");
		}		
	}else if(req.url === "/check_login"){
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					
					data=qs.parse(formData);

						
					//res.end("dat="+ user + pwd);
					MongoClient.connect(dbUrl, function(err, db) {
					if (err) throw err;
						var dbo = db.db("assignment");
						var query={"email": data['email'],"password": data['password']};
						console.log(query);
						dbo.collection("users").find(query).toArray(function(err, result) {
							if (err) throw err;
							console.log("users find");
							console.log(JSON.stringify(result));
							db.close();
							return res.end(JSON.stringify(result));
						});
					});
				});
			});
			
		}else{
			res.end("abc");
		}		
	}else{
		sendFileContent(res, req.url.toString().substring(1), "");
	}
	
}).listen(3000);


function sendFileContent(response, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			response.writeHead(404);
			response.write("Not Found!");
		}
		else{
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}d

function handle_signup(data){
	

					//res.end("dat="+ user + pwd);
					
					var signup_info = {
						'firstName': data['firstName'],
						'lastName': data['lastName'],
						'email': data['email'],
						'tel': data['tel'],
						'address1': data['address1'],
						'address2': data['address2'],
						'password': data['password']
					};

	if(signup_info)
	{
		MongoClient.connect(dbUrl, function(err,db){
			if (err) throw err;
			var dbo = db.db("assignment");
			//var myobj = stringMsg;

			//check user duplicate
						var query={"email": signup_info['email']};
						console.log(query);
						dbo.collection("users").find(query).toArray(function(err, result) {
							if (err) throw err;
							if(result.length){
								console.log(result.length);
								console.log("Email duplicate");

							}
							else{
								dbo.collection("users").insertOne(signup_info, function(err, res) {
									if (err) throw err;
									console.log("Account created!!");
								});
							}
							db.close();
						});
		});
	}


}