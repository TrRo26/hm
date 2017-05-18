window.onload = function() {
	
var library = ['obsequious', 'hi', 'cold', 'summer']
var wordView = document.getElementById('the-word')
var lettersView = document.getElementById('letter-bank')
var nextButton = document.getElementById('next')
var onWord = -1
var letterGuessed = null
var letterBank = []
var stringWord = null
var hashedWord = null

// ############################################################

function pullWord(arr) {
	lettersView.innerHTML = ""
	letterBank = []
	onWord++
	stringWord = arr[onWord]
}

function hashWord(word) {
	var hash = {}
	for(i=0; i<word.length; i++) {
		hash[i] = "- "
	}
	hashedWord = hash
}

function displayWord(hashedWord) {
	wordView.innerHTML = ""
	for(var key in hashedWord) {
		wordView.innerHTML += hashedWord[key]
	}
}

function letterInWord(letter, stringWord) {
	for(i=0; i<stringWord.length; i++) {
		if (stringWord[i] === letter) {
			hashedWord[i] = letter
		}
	}
	displayWord(hashedWord)
}

function bankLetter() {
	if (!(letterBank.includes(letterGuessed))) {
		letterBank.push(letterGuessed)
		displayLetter()
	}
}

function displayLetter() {
	if (lettersView.innerHTML.length === 0) {
		lettersView.innerHTML += (letterGuessed)
	} else {
		lettersView.innerHTML += (" - " + letterGuessed)
	}
}

function guessLetter() {
	document.onkeyup = function(e) {
		letterGuessed = e.key
		letterInWord(letterGuessed, stringWord)
		bankLetter()
		win(stringWord)
	}
}

function win(word) {
	counter = 0
	for(i=0; i<word.length; i++) {
		if (letterBank.includes(word[i])) {
			counter++
		}
	}
	if (counter === word.length) {
		setTimeout(function(){
			alert("You think you're amazing? You just won one measly game of hangman. Get a life.")
		}, 500);
		counter = 0
	}
}

function next() {
	nextButton.onclick = function() {
		play()
		console.log("here")
	}
}

function play() {
	pullWord(library)
	hashWord(stringWord)
	displayWord(hashedWord)
	guessLetter()
}

// ############################################################

play()
next()

}
