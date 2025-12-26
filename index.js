const path = require("path");
const express = require("express");
const app = express();
const https = require("node:https");
require("dotenv").config({ quiet: true });

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
    const resumeUrl = process.env.RESUME_URL;

    if (!resumeUrl) {
      return res.status(500).send("Resume not configured");
    }

    function proxy(url) {
      https
        .get(url, (dropboxRes) => {
          if (
            dropboxRes.statusCode >= 300 &&
            dropboxRes.statusCode < 400 &&
            dropboxRes.headers.location
          ) {
            return proxy(dropboxRes.headers.location);
          }

          res.writeHead(dropboxRes.statusCode, {
            "Content-Type": dropboxRes.headers["content-type"],
            "Content-Length": dropboxRes.headers["content-length"],
            "Content-Disposition":
              'attachment; filename="AryanParmarResume.pdf"',
          });

          dropboxRes.pipe(res);
        })
        .on("error", () => {
          res.status(500).send("Resume not available");
        });
    }

    proxy(resumeUrl);
  })
  .use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
  });

app.listen(8080);
