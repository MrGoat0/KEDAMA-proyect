const http = require("http");
const app = require("./app");

const normalizePort = (val) => {
  // if port 5000 is selected, so port
  var port = parseInt(val, 10);
  // if auto port is assigned
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  // if defined port is selected (3001)
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

// app port setup
const port = normalizePort(process.env.PORT || "3001");

app.set("port", port);

// server creation
const server = http.createServer(app);

// server keep listening
server.listen(port, () => {
  console.log("Server on port " + app.get("port"));
});
