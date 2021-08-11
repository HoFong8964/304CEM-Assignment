const http = require('http');
const fs = require("fs");
const qs = require("querystring");
const axios = require('axios');
const { stringify } = require('querystring');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
const dbUrl = "mongodb://localhost:27017";
const recaptchaSecret="6Lcz97wbAAAAACi4WlthHAEYO5dL9LL2d3yYTRxV";

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
	}else if(req.url === "/products"){
		sendFileContent(res, "products.html", "text/html");
	}else if(req.url === "/wishlist"){
		sendFileContent(res, "wishlist.html", "text/html");
	}else if(req.url === "/covid"){
		sendFileContent(res, "covid.html", "text/html");
	}else if(req.url === "/weather"){
		sendFileContent(res, "weather.html", "text/html");
	}else if(req.url === "/profile"){
		sendFileContent(res, "profile.html", "text/html");
	}else if(req.url === "/store"){
		sendFileContent(res, "store.html", "text/html");
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
	}else if(req.url === "/getProfile"){
		if(req.method==="GET"){
			formData = '';
			data=qs.parse(req.params);
			return getProfile(res, data);
		}else{
			res.end("Requedt Method not vaild");
		}			
	}else if(req.url === "/getProduct"){
		if(req.method==="GET"){
			formData = '';
			data=qs.parse(req.params);
			return getProduct(res, data);
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
	}else if(req.url === "/getWishlist"){
		if(req.method==="GET"){
			formData = '';
			data=qs.parse(req.params);
			return getWishlist(res, data);
		}else{
			res.end("Requedt Method not vaild");
		}		
	}else if(req.url === "/deleteWishlist"){
		if(req.method==="DELETE"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					data=qs.parse(formData);
					deleteWishlist(res, data);
				});
			});
		}else{
			res.end("Requedt Method not vaild");
		}		
	}else if(req.url === "/handleUpdateProfile"){
		if(req.method==="PUT"){
			formData = '';
			return req.on('data', function(data) {
				formData += data;
				return req.on('end', function() {
					var data;
					data=qs.parse(formData);
					updateProfile(res, data);
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

/*====================================
	signup
======================================*/

function handleSignup(res, data){
	const crypto = require('crypto')
	const md5sum = crypto.createHash('md5');
	let password = md5sum.update(data['password']).digest('hex');

	var signup_info = {
		'name': data['name'],
		'email': data['email'],
		'password': password
	};


	//check captcha before exec
	const query = stringify({
		secret: recaptchaSecret,
		response: data['token']
	});

	axios
  		.post(`https://google.com/recaptcha/api/siteverify?${query}`, {})
  		.then((verifyRes) => {
			if(verifyRes.data.success){
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
			} else{
				error_response(res, 'Captcha Verify Fail');
			}
  		})
  		.catch((error) => {
  		  error_response(res, 'Captcha Verify Fail');
  		});
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
			console.log(response);
            res.end(JSON.stringify(response));
        });
    });
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
			console.log(response);
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

	//check captcha before exec
	const query = stringify({
		secret: recaptchaSecret,
		response: data['token']
	});

	axios
  		.post(`https://google.com/recaptcha/api/siteverify?${query}`, {})
  		.then((verifyRes) => {
			if(verifyRes.data.success){
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
			} else{
				error_response(res, 'Captcha Verify Fail');
			}
  		})
  		.catch((error) => {
  		  error_response(res, 'Captcha Verify Fail');
  		});

}

/*====================================
	product
======================================*/

function getProduct(res, data){
	MongoClient.connect(dbUrl, function(err,db){
		if (err) throw err;
		var dbo = db.db("assignment");
		var query = {};
		var limit = 1000;
		if(data['keyword']){
			query["name"] = new RegExp(data['keyword'], 'i');
		}
		if(data['type']){
			query["type"] = data['type'];
		}
		if(data['min_amount'] &&  data['max_amount']){
			query["price"] = { $gte: parseFloat(data['min_amount']), $lte: parseFloat(data['max_amount'])};
		}
		if(data['limit']){
			limit = parseInt(data['limit']);
		}

		dbo.collection("products").find(query).sort({"price": -1}).limit(limit).toArray(function(err, result) {
			if (err) throw err;
			var response = {
				status  : 200,
				res : result
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
}


/*====================================
	profile
======================================*/

function getProfile(res, data){
	MongoClient.connect(dbUrl, function(err,db){
		if (err) throw err;
		var dbo = db.db("assignment");
		var query = {};
		if(data['userId']){
			var query = { "_id": ObjectId(data['userId']) };
		}
		
		dbo.collection("users").findOne(query).then(result => {
			if (err) throw err;
			var response = {
				status  : 200,
				res : result
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
}

/*====================================
	wishlist
======================================*/

function addToWishlist(res, data){
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

function getWishlist(res, data){
	MongoClient.connect(dbUrl, function(err,db){
		if (err) throw err;
		var dbo = db.db("assignment");
		dbo.collection('wishlist').aggregate([
			{
				$match: {"userId": data['userId']}
			},
			{
				$project:
					{
						productObjId: {
							$toObjectId: '$productId'
						}
					}
			},
			{
				$lookup:
					{
						from: 'products',
						localField: 'productObjId',
						foreignField: '_id',
						as: 'productDetails'
					}
			}
		]).toArray(function(err, result) {
			if (err) throw err;
			var response = {
				status  : 200,
				res : result
			}
			console.log(response);
			res.end(JSON.stringify(response));
			db.close();
		});
	});
}

function deleteWishlist(res, data){
	MongoClient.connect(dbUrl, function(err, db) {
		if (err) throw err;
		var dbo = db.db("assignment");
		var query = { "_id": ObjectId(data['wishlistId']) };
		dbo.collection("wishlist").deleteOne(query, function(err, result) {
		  	if (err) throw err;
		  	var response = {
				status  : 200,
				res : result
			}
			console.log(response);
			res.end(JSON.stringify(response));
			db.close();
		});
	  });
}

/*====================================
	profile
======================================*/

function updateProfile(res, data){
	if(data['oldpassword'] && data['newpassword']){
		const crypto = require('crypto')
		const md5sum = crypto.createHash('md5');
		const md5sum2 = crypto.createHash('md5');
		let oldpassword = md5sum.update(data['oldpassword']).digest('hex');
		let newpassword = md5sum2.update(data['newpassword']).digest('hex');
		var autoLogout = false;
		MongoClient.connect(dbUrl, function(err,db){
			if (err) throw err;
			var dbo = db.db("assignment");

			var login_info = {
				'_id': ObjectId(data['userId']),
				'password': oldpassword
			};

			dbo.collection("users").findOne({ "_id": ObjectId(data['userId']) }).then(result => {
				if(result){
					if(result.password != oldpassword){
						error_response(res, 'The old password is not correct');
					}
				} else {
					error_response(res, 'User not found!');
				}
				db.close();
			  })
		});

		var profile_info = {
			'name': data['name'],
			'password': newpassword
		};
		autoLogout = true;
	}
	else{
		var profile_info = {
			'name': data['name']
		};
	}
	
	//check captcha before exec
	const query = stringify({
		secret: recaptchaSecret,
		response: data['token']
	});

	axios
  		.post(`https://google.com/recaptcha/api/siteverify?${query}`, {})
  		.then((verifyRes) => {
			if(verifyRes.data.success){
				MongoClient.connect(dbUrl, function(err,db){
					if (err) throw err;
					var dbo = db.db("assignment");
					if(dbo.collection("users").updateOne(
						{ "_id": ObjectId(data['userId']) },
						{ $set: profile_info }
					)){
						console.log("Update user profile success");
						var response = {
							status  : 200,
							autoLogout: autoLogout,
							res: "Update Success"
						}
						console.log(response);
						res.end(JSON.stringify(response))
					}
				});
			} else{
				error_response(res, 'Captcha Verify Fail');
			}
  		})
  		.catch((error) => {
  		  error_response(res, 'Captcha Verify Fail');
  		});
}

function success_response(res, msg, data=[]){
	var response = {
		status  : 200,
		message : msg,
		data: data
	}
	console.log(response);
	res.end(JSON.stringify(response));
}

function error_response(res, msg){
	var response = {
		status  : 500,
		message : msg
	}
	console.log(response);
	res.end(JSON.stringify(response));
}