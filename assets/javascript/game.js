window.onload = function() {

	var	game = {
		randomNumber: 0,
		redCrystalValue: 0,
		blueCrystalValue: 0,
		yellowCrystalValue: 0,
		greenCrystalValue: 0,
		counter: 0,
		wins: 0,
		losses: 0,
			
		// a random number will be genereated between 19-120 at the start of the game.	
		generateRandomNumber: function() {
			// this makes it so a random number is generated every time the page is refresed
			this.randomNumber = Math.floor((Math.random() * (120-18)) + 19);
			// number will be pushed to the html
			document.getElementById("three").innerHTML = this.randomNumber;
			// how you can see that the function works properly
			// console.log(this.randomNumber);

			// how the random number generator function was tested
		 	// for (var i = 0; i < 1000; i++){
			// console.log(Math.floor((Math.random() * (120-18)) + 19));
			// var newRandomnumber = Math.floor((Math.random() * (120-18)) + 19)
			// if (newRandomnumber < 19 || newRandomnumber > 120)
			// 	alert ("look out!");

			},
		// Actions when player clicks on a cystal
		// button on click event will add an amout to the counter
		// each crystal should have a value between 1-12
		// pushed effects to the html
		generateRandomCrystalNumber: function(){
			// checked that number was generating properly -- received no alert
	 		// for (var i = 0; i < 100; i++){
			// 	console.log(Math.floor((Math.random() * 12) + 1 ));
			// var newRandomCystalNumber = Math.floor((Math.random() * 12) + 1 );
			// if (newRandomCystalNumber < 1 || newRandomCystalNumber> 12)
			// 	alert("look out!");
			this.redCrystalValue = Math.floor((Math.random() * 12) + 1 );
			this.blueCrystalValue = Math.floor((Math.random() * 12) + 1 );
			this.yellowCrystalValue = Math.floor((Math.random() * 12) + 1 );
			this.greenCrystalValue = Math.floor((Math.random() * 12) + 1 );
			},

		// How wins and losses are calculated...
		checkWins: function() {
			// if user's score (Counter) is  === the amount generated game is won
			if (this.counter === this.randomNumber) {
				// add 1 to total wins.
				game.wins++;
				// the caption "You Win" will show
				document.getElementById("caption").innerHTML = "You Win!!!";
				// Amt of wins will show
				document.getElementById("fourwins").innerHTML = game.wins;
				// reset function is called
				reset();
			}
			// if user's score (counter) is > than the amt generated the game is lost
			else if (this.counter > this.randomNumber) {
					// add 1 to total losses
					game.losses++;
					// The caption "You Lost" will show within HTML
					document.getElementById("caption").innerHTML = "You Lost!!!";
					// Amt of losses will show within HTML
					document.getElementById("fourlosses").innerHTML = game.losses;
					// reset function is called
					reset();
			};
		}

	} //end of object

	// function for resetting the game was created
	function reset () {
		// function for generating a random number is automatically ran
		game.generateRandomNumber();
		// function for generating random crystal values is automatically generated
		game.generateRandomCrystalNumber();
		// score counter resets to 0
		game.counter = 0;
		// sore shows as 0 within HTML
		document.getElementById("gamescore").innerHTML = 0;
	};
	// calling the reset function
	reset ();

	// event listener for red crystal
	document.getElementById("red").addEventListener ("click", function(){
		// add to counter based on the random amt for the "RED" crystal
		game.counter+= game.redCrystalValue;
		// print to html
		console.log(game.counter);
		// shoot score to HTML
		document.getElementById("gamescore").innerHTML = game.counter;
		// run check wins function so the wins or losses increases.		game.checkWins();
	})

	document.getElementById("blue").addEventListener ("click", function(){
		game.counter+= game.blueCrystalValue;
		console.log(game.counter);
		document.getElementById("gamescore").innerHTML = game.counter;
		game.checkWins();
	})

	document.getElementById("yellow").addEventListener ("click", function(){
		game.counter+= game.yellowCrystalValue;
		console.log(game.counter);
		document.getElementById("gamescore").innerHTML = game.counter;
		game.checkWins();
	})

	document.getElementById("green").addEventListener ("click", function(){
		game.counter+= game.greenCrystalValue;
		console.log(game.counter);
		document.getElementById("gamescore").innerHTML = game.counter;
		game.checkWins();	
	})		
}