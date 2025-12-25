const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/about") {
    fs.readFile("./about.html", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url == "/contact-me") {
    fs.readFile("./contact-me.html", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    fs.readFile("./404.html", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
});

server.listen(8080);
