var express = require('express');
var bodyParser = require('body-parser')
var path = require('path')
var googleTranslate = require('google-translate')('AIzaSyDI9OMHCbsglZ8X805ZVxjEXWazCS3tSvQ');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



app.get('/', function(req, res){
	res.sendFile(path.resolve('./public/html/home.html'))
})

app.post('/translate', function(req, res){
	// console.log(req.body.wordToTranslate)
	googleTranslate.translate((req.body.wordToTranslate), req.body.languageToTranslate, function(err, translation) {
  		console.log(translation);
  // =>  { translatedText: 'Hallo', originalText: 'Hello', detectedSourceLanguage: 'en' }
  		if(err){
  			res.send("NOTHING IS WORKING")
  		}else{
  			res.send(translation.translatedText)
  		}
	});
})

app.get('/quiz', function(req, res){
	res.sendFile(path.resolve('./public/html/quiz.html'))
})

app.get('/translate', function(req, res){
	res.send(req.query)
})

// app.post('/getlanguages', function(req, res, next){
// 	var wordArray = ["dog", "cat", "house", "table", "water", "tree", "mother", "chair", "mouse", "door"]
// 	var translatedArray = []
// 	var quizLanguage = req.body.language


var translatedArray = []

app.post('/getlanguages', function(req, res){
	var wordArray = ["dog", "cat", "house", "table", "water", "tree", "mother", "chair", "mouse", "door"]
	var quizLanguage = req.body.language
	for(var i=0;i<wordArray.length; i++){
		googleTranslate.translate(wordArray[i], quizLanguage, function(err, translation){
			if(err){
				console.log('nothings happening')
			}else {
				translatedArray.push(translation.translatedText)
				if(wordArray.length === translatedArray.length){
							res.send(translatedArray)
						}

			}
				
		})

	}
	translatedArray = []
})

var checked = 0

app.post('/compareanswers', function(req, res){
	console.log(req.body)
	// googleTranslate.translate(req.body.word, 'en', function(err, translation){
			// if(err){
			// 	console.log('nothings happening')
			// }else {
			// 	checked++
			// 	if(checked === 10){
			// 		res.send(translation.translatedText)
			// 	}
			// }
				
		// })
})



var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});