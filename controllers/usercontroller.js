var userModel = require("../models/usermodel.js");

// Export so we can use the methods in app.js:

module.exports = {
	createUser : function(request,response){
		// Create a new user using request.body:
		var user = new userModel.User(request.body)
		response.send(userModel.users)
	},
	getUsers : function(request,response){
		response.send(userModel.users)
	}
}