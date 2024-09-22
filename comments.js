//Create web server 
//Create a form that will take a comment and a name
//When the form is submitted, the comment and name will be saved to a file
//When the form is submitted, the user will be redirected to a page that displays all comments

var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/comments.html");
});

app.post("/comments", function(req, res){
    var comment = req.body.comment;
    var name = req.body.name;
    fs.appendFile("comments.txt", name + ": " + comment + "\n", function(err){
        if(err){
            res.send("Error writing to file");
        }
        else{
            res.redirect("/comments");
        }
    });
});

app.get("/comments", function(req, res){
    fs.readFile("comments.txt", "utf8", function(err, data){
        if(err){
            res.send("Error reading file");
        }
        else{
            res.send(data);
        }
    });
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});