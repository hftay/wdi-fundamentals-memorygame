
var myArray = [
	{	
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	},
	{	
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{	
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{	
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function (){
	 if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

var flipCard = function(){

	var cardId = this.getAttribute('data-id');
	console.log(cardId);

	//console.log("User flipped " + myArray[cardId].rank);
	//console.log("User flipped " + myArray[cardId].suit);
	//console.log("User flipped " + myArray[cardId].cardImage);
	
	cardsInPlay.push(myArray[cardId].rank);
	this.setAttribute('src', myArray[cardId].cardImage);

	if (cardsInPlay.length ===2 ){
		checkForMatch();
	}

}

var createBoard= function() {
	for (i=0; i<myArray.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();