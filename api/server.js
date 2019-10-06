const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const connect = require("connect");
const serveStatic = require("serve-static");
const app = express();
const httpPort = 3000;
const filePort = 8081;
const { generateBody, buildHtml } = require("./helper");
const baseFileUrl = `http://localhost:${filePort}/`;

connect()
  .use(serveStatic(__dirname))
  .listen(filePort, function() {
    console.log("Serving files on 8081");
  });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(httpPort, function() {
  console.log("Listening on port 3000!");
});

app.post("/", function(req, res) {
  let body = generateBody(JSON.parse(req.body.elements));
  let html = buildHtml(body, req.body.pageTitle);
  let fileName = req.body.fileName.toLowerCase();
  let filePath = `${__dirname}\\${fileName}.html`;
  fs.writeFile(filePath, html, function(err) {
    return console.log(err);
  });
  res.send({ filePath: `${baseFileUrl}${fileName}.html` });
});
