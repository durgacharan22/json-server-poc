var fs = require("fs"); // Import the filesystem module
var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router("api.json");
var middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use(function (req, res, next) {
  if (req.method === "POST") {
    req.method = "GET";
    req.query = req.body;
  }
  // Continue to JSON Server router
  next();
});

server.use(router);
// server.use(router1);
server.listen(8010, function () {
  console.log("JSON Server is running");
});
