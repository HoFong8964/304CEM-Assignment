var http = require('http');
var fs = require("fs");
var qs = require("querystring");

var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017";

//create a server object:
http.createServer(function (req, res) {
	if(req.method == "GET"){
		let urlPart = req.url.split("?");
		req.url = urlPart[0];
		req.params = urlPart[1];
	}
	
    if(req.url === "/index" || req.url === "/"){
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
	}else if(req.url === "/handleSignup"){
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					data=qs.parse(formData);
					handleSignup(res, data);
					
				});
			});
		}else{
			res.end("Requedt Method not vaild");
		}		
	}else if(req.url === "/checkSignupEmail"){
		if(req.method==="GET"){
			formData = '';
			data=qs.parse(req.params);
			return checkSignupEmail(res, data);
		}else{
			res.end("Requedt Method not vaild");
		}	
	}else if(req.url === "/handleLogin"){
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					data=qs.parse(formData);
					handleLogin(res, data);
				});
			});
			
		}else{
			res.end("Requedt Method not vaild");
		}		
	}else if(req.url === "/get_product"){
		if(req.method==="GET"){
			formData = '';
			data=qs.parse(req.params);
			return get_product(res, data);
		}else{
			res.end("Requedt Method not vaild");
		}		
	}else if(req.url === "/addToWishlist"){
		if(req.method==="POST"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					data=qs.parse(formData);
					addToWishlist(res, data);
				});
			});
		}else{
			res.end("Requedt Method not vaild");
		}
	}else{
		sendFileContent(res, req.url.toString().substring(1), "");
	}
	
}).listen(3000);


function sendFileContent(res, fileName, contentType){
	fs.readFile(fileName, function(err, data){
		if(err){
			res.writeHead(404);
			res.write("Not Found!");
		}
		else{
			res.writeHead(200, {'Content-Type': contentType});
			res.write(data);
		}
		res.end();
	});
}

function handleSignup(res, data){
	const crypto = require('crypto')
	const md5sum = crypto.createHash('md5');
	let password = md5sum.update(data['password']).digest('hex');

	var signup_info = {
		'name': data['name'],
		'email': data['email'],
		'password': password
	};

	if(signup_info)
	{
		MongoClient.connect(dbUrl, function(err,db){
			if (err) throw err;
			var dbo = db.db("assignment");
			//var myobj = stringMsg;

			//check user duplicate
			var query={"email": signup_info['email']};
			dbo.collection("users").find(query).toArray(function(err, result) {
				if (err) throw err;
				if(result.length > 0){
					error_response(res, 'Email has been used.');
				}
				else{
					dbo.collection("users").insertOne(signup_info, function(err, result) {
						if (err) throw err;
						success_response(res, 'Account Created. Plaease login!');
					});
				}
				db.close();
			});
		});
	}
}

function checkSignupEmail(res, data){
	const crypto = require('crypto')
	const md5sum = crypto.createHash('md5');
	let password = md5sum.update(data['password']).digest('hex');

	var signup_info = {
		'name': data['name'],
		'email': data['email'],
		'password': password
	};

	if(signup_info)
	{
		MongoClient.connect(dbUrl, function(err,db){
			if (err) throw err;
			var dbo = db.db("assignment");
			//var myobj = stringMsg;

			//check user duplicate
			var query={"email": signup_info['email']};
			dbo.collection("users").find(query).toArray(function(err, result) {
				if (err) throw err;
				if(result.length > 0){
					error_response(res, 'Email has been used');
				}
				else{
					dbo.collection("users").insertOne(signup_info, function(err, result) {
						if (err) throw err;
						success_response(res, 'Account Created. Plaease login!');
					});
				}
				db.close();
			});
		});
	}
}

function checkSignupEmail(res, data){
	MongoClient.connect(dbUrl, function(err,db){
		if (err) throw err;
		var dbo = db.db("assignment");
		var query={"email": data['email']};
		dbo.collection("users").find(query).toArray(function(err, result) {
			if (err) throw err;
			if(result.length > 0){
				var response = {
					status  : 500,
					res : false
				}
			}
			else{
				var response = {
					status  : 200,
					res : true
				}
			}
			res.end(JSON.stringify(response));
		});
	});
}

function handleLogin(res, data){
	const crypto = require('crypto')
	const md5sum = crypto.createHash('md5');
	let password = md5sum.update(data['password']).digest('hex');

	var login_info = {
		'email': data['email'],
		'password': password
	};

	if(login_info)
	{
		MongoClient.connect(dbUrl, function(err,db){
			if (err) throw err;
			var dbo = db.db("assignment");
			dbo.collection("users").findOne(login_info).then(result => {
				if(result){
					success_response(res, 'Login Success', result);
				} else {
					error_response(res, 'The email or password is not correct');
				}
				db.close();
			  })
		});
	}
}

function get_product(res, data){
	MongoClient.connect(dbUrl, function(err,db){
		if (err) throw err;
		var dbo = db.db("assignment");
		var query={"type": data['type']};
		dbo.collection("products").find(query).toArray(function(err, result) {
			if (err) throw err;
			var response = {
				status  : 200,
				res : result
			}
			res.end(JSON.stringify(response));
		});
	});
}

function addToWishlist(res, data){
	console.log(data);
	var wishlist_info = {
		'productId': data['productId'],
		'userId': data['userId'],
	};

	if(wishlist_info)
	{
		MongoClient.connect(dbUrl, function(err,db){
			if (err) throw err;
			var dbo = db.db("assignment");
			dbo.collection("wishlist").find(wishlist_info).toArray(function(err, result) {
				if (err) throw err;
				if(result.length > 0){
					if (err) throw err;
					success_response(res, 'Product is in wishlist already!');
				}
				else{
					dbo.collection("wishlist").insertOne(wishlist_info, function(err, result) {
						if (err) throw err;
						success_response(res, 'Product has been added to wishlist!');
					});
				}
				db.close();
			});
		});
	}
}

function error_response(res, msg){
	var response = {
		status  : 500,
		message : msg
	}
	res.end(JSON.stringify(response));
}

function success_response(res, msg, data=[]){
	var response = {
		status  : 200,
		message : msg,
		data: data
	}
	res.end(JSON.stringify(response));
}