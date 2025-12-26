const path = require("path");
const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  })
  .get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
  })
  .get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
  })
  .get("/resume", (req, res) => {
    res.download(path.join(__dirname, "private", "AryanParmar.pdf"));
  })
  .use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
  });

app.listen(8080);
