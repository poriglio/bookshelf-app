var bookApp = angular.module("bookApp",[])

bookApp.controller("bookController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Welcome to the friendliest place to read!"

	$http.get('/getusers').then(function(returnData){
		$scope.users = returnData.data
	})

	$scope.submitUser = function(){
		$http.post('/submituser',$scope.newUser).then(function(returnData){
			$scope.users = returnData.data
		})
	}

}])