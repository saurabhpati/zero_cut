var express = require('express');
var app		= express();
var http	= require('http').createServer(app);

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/view/index.html');
}); 


http.listen(3000);