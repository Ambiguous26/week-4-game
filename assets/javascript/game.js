
// player is shown a random number at the start of the game.
	//who to start game?


	
	var	randomNumber = {Math.floor((Math.random() * 120) + 1);
	
	generateRandomNumber: function() {
		getElementById("three").innerHTML(randomNumber);
		document.getElementById("three").onclick = randomNumber;
		},


		// a random number will be genereated between 19-120
		// number will be pushed to the html

	} //end of script
	// Actions when player clicks on a cystal
		// button on click event will add an amout to the counter
		// each crystal should have a value between 1-12
		// pushed effects to the html

	// rules for winning/lossing
		// conditional statement: 
		// if the number === the amount generated game is won
		// add 1 to total wins.
		// game stops.

		// else if number < || > than gererated number game is lost.
		// add 1 to total losses
		// games stops

	// games restarts automatically and a new number is generated
	// score counter resets to 0



