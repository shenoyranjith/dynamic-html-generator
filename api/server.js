const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const port = 3000;
const { generateBody, buildHtml } = require("./helper");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log("Listening on port 3000!");
});

app.post("/", function(req, res) {
  let body = generateBody(JSON.parse(req.body.elements));
  let html = buildHtml(body, req.body.pageTitle);
  let filePath = `${__dirname}\\${req.body.fileName}.html`;
  fs.writeFile(filePath, html, function(err) {
    return console.log(err);
  });
  res.send({ filePath });
});
