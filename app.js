// REQUIRES
var express = require("express");
var bodyParser = require("body-parser");
var userController = require("./controllers/usercontroller.js");

// CREATE EXPRESS APP OBJECT
var app = express();

// CONFIGURATION
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));


// ROUTES

app.get("/",function(request,response){
	response.sendFile("/html/index.html",{root:"./public"})
})

app.post('/submituser', userController.createUser)
app.get('/getusers', userController.getUsers)

// SET UP SERVER AND LISTEN

var port = 2412;

app.listen(port, function(){
	console.log("The server is running on port " + port)
})