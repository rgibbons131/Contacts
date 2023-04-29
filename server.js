var express = require('express');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;
const users = require('./routes/contacts.js');
const mongodb = require("./db/connect");
const bodyParser = require("body-parser");


dotenv.config();
const app = express();
const port = process.env.PORT || 8080;



app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", users);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
