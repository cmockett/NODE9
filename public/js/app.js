angular.module('translateApp', [])

angular.module('translateApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){

		$scope.submitWord = function(){
			$http({
				method: 'POST',
				url: '/translate',
			}).then(function(returnData){
				console.log(returnData)
			}, function(error){
				console.log(error)
			})
		}
	}])

angular.module('translateApp')
	.controller('quizController', ['$scope', '$http', function($scope, $http){
		$scope.submitLanguage = function(){
			$http({
				method: 'POST',
				url: '/getlanguages',
			}).then(function(returnData){
				console.log(returnData)
			}, function(error){
				console.log(error)
			
			})

		}



	}])