//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Home starting content goes here.";
const aboutContent = "About content goes here.";
const contactContent = "Contact content goes here.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home.ejs", {homeStartingContent: homeStartingContent});
});

app.get("/about", function(req, res) {
    res.render("about.ejs", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res) {
    res.render("contact.ejs", {contactContent: homeStartingContent});
});

app.listen(3000, function() {
    console.log("Server running on port 3000.");
});
