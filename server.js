var http = require('http');
var fs = require("fs");
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
				console.log(data);
				res.end("hihi");
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
}