/*jshint esversion: 6 */
const express = require('express');
const bodyParser= require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.use("/public", express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


mongoose.connect("mongodb://localhost:27017/First",{useNewUrlParser: true});

app.get("/", function(req, res) {
  res.render("login")
})
app.get("/signup", function(req, res) {
  res.render("signup")
})
app.get("/login", function(req, res) {
  res.render("index")
})


app.listen(27017, function() {
  console.log("server started successfully at 27017.")
})
