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
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=AryanParmarResume.pdf"
    );
    res.setHeader("Content-Type", "application/pdf");

    https
      .get(process.env.RESUME_URL, (dropboxRes) => {
        dropboxRes.pipe(res);
      })
      .on("error", () => {
        res.status(500).send("Resume not available");
      });
  })
  .use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
  });

app.listen(8080);
