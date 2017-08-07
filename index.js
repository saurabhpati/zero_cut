var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	setTimeout(function () {
		res.sendFile(__dirname + '/view/index.html')
	}, 1000);
});

io.on('connection', function (socket) {
	console.log("user connected");
})


http.listen(3000);