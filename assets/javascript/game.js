
// player is shown a random number at the start of the game.
	//who to start game?


	
	var	game = {
		randomNumber: Math.floor((Math.random() * (120-18)) + 19),
		randomCrystalNumber: Math.floor((Math.random() * 12) + 1 ),
		newValue: "randomCrystalNumber",
		wins: 0,
		losses: 0,


		// a random number will be genereated between 19-120	
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

	generateRandomCrystalNumber: function(){
			// checked that number was generating properly -- received no alert
		 		// for (var i = 0; i < 100; i++){
				// 	console.log(Math.floor((Math.random() * 12) + 1 ));
				// var newRandomCystalNumber = Math.floor((Math.random() * 12) + 1 );
				// if (newRandomCystalNumber < 1 || newRandomCystalNumber> 12)
				// 	alert("look out!");
			document.getElementById("red").onclick = this.generateRandomCrystalNumber;
			this.randomCystalNumber = Math.floor((Math.random() * 12) + 1 );

			document.getElementById("red").value = this.randomCrystalNumber;
			// tested that amount was being generated for red crystal
				// console.log(document.getElementById("red").value = this.randomCrystalNumber);
			document.getElementById("red").onclick = this.generateRandomCrystalNumber;

		

		},
	

	} //end of object










	// Actions when player clicks on a cystal
		// button on click event will add an amout to the counter
		// each crystal should have a value between 1-12
		// pushed effects to the html

// need to call this function outside of object for it to run
game.generateRandomNumber();
game.generateRandomCrystalNumber();
// console.log(generateRandomCrystalNumber)



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








