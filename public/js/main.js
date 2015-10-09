var bookApp = angular.module("bookApp",[])

bookApp.controller("bookController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Welcome to the friendliest place to read!"

	$http.get('/getusers').then(function(returnData){
		$scope.users = returnData.data
	})

	$scope.submitUser = function(){
		$http.post('/submituser',angular.copy($scope.newUser)).then(function(returnData){
			$scope.users = returnData.data
			console.log($scope.users)
		})
		$scope.newUser.name = ""
		$scope.newUser.genre = ""
	}

	$scope.upvoteUser = function ($index){
		
	}

}])