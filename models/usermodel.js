var users = []

var User = function(newUser){
	this.name = newUser.name
	this.genre = newUser.genre
	this.books = []
	this.loans = 0
	this.rating = 0
	users.push(this)
	console.log(users)
}

module.exports = {
	User : User,
	users : users
}