//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// web page content

const homeStartingContent = "Home starting content goes here.";
const aboutContent = "About content goes here.";
const contactContent = "Contact content goes here.";

const posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// main page

app.get("/", function(req, res) {
    res.render("home.ejs", {homeStartingContent: homeStartingContent, posts: posts, });
});

// about us page

app.get("/about", function(req, res) {
    res.render("about.ejs", {aboutContent: aboutContent});
});

// contact page

app.get("/contact", function(req, res) {
    res.render("contact.ejs", {contactContent: homeStartingContent});
});

// compose page

app.get("/compose", function(req, res) {
    res.render("compose.ejs");
});

app.post("/compose", function(req, res) {
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody
    }
    posts.push(post);
    res.redirect("/");
});

// individual posts

app.get("/posts/:post", function(req, res) {

    posts.forEach(function(post) {

        const postUrl = post.title.replace(/\s+/g, '-').toLowerCase();

        if (req.params.post == postUrl) {
            res.render("post", {title: post.title, content: post.content});
        } else {
            res.redirect("/");
        }
    });
});

app.listen(3000, function() {
    console.log("Server running on port 3000.");
});
