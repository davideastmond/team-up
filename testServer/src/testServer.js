var http = require("http");

var server = http.createServer(function (request, response) {
  response.end("how are you?\n");
});

var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log("listening on port " + port);
});