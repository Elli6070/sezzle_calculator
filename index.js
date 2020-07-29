// Drew Elliott
// Sezzle take home test

// Get modules
var app = require("express")();
var http = require("http").createServer(app);
var io = require ("socket.io")(http);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/calculator.html");
});

io.on("connection", (socket) => {
	socket.on("calculation", (equ) => {
		io.emit("calculation", equ);
	});
});

http.listen(8000, () => {
	console.log("listening on 8000");
});

