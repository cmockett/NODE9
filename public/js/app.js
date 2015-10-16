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
		var translatedArray = []
		var wordArray = ["dog", "cat", "house", "table", "water", "tree", "mother", "chair", "mouse", "door"]
		$scope.sendTranslation = 
		$scope.submitLanguage = function(){
			$scope.sendTranslation = $scope.language
			$http({
				method: 'POST',
				url: '/getlanguages',
				data : {language : $scope.language}
			}).then(function(returnData){
				// console.log(returnData)
				$scope.translatedArray = returnData.data
			}, function(error){
				console.log(error)
			})
}

		$scope.submitGuesses = function(key, word, userGuess){
			console.log($scope.userGuess)
			$http({
				method: 'POST',
				url: '/compareanswers',
				data : {word: userGuess,
						language : $scope.sendTranslation}
			}).then(function(returnData){
				console.log(returnData)
			}, function(error){
				console.log(error)
			}
			)


			// for(var i =0; i<wordArray.length; i++){
			// $http({
			// 	method: "POST",
			// 	url: '/checkanswers',
			// 	data : {word : $scope.userGuess}
			// }).then(function(returnData){
			// 	console.log(returnData.data)
			// }, function(error){
			// 	console.log(error)
			// })
		// }
		console.log(key)
}


	}])