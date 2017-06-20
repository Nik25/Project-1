
	// event listener to respond to "Show another quote" button clicks
	// when user clicks anywhere on the button, the "printQuote" function is called

	document.getElementById('loadQuote').addEventListener("click", printQuote, false);

	var color; 

	var htmlQuote = '';

		// The quotes objects that have been displayed.
		var displayedQuotes = [];  

		// quotes array :

		var quotes = [

		{
			quote : "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
			source : "Princess Diana",
			citation : "BrainyQuote.com", 
			year : "",
			tags : "Knowledge, Kindness, Day" 
		},

		{ 
			quote : "I believe life is an intelligent thing: that things aren't random.",
			source: "Steve Jobs",
			citation : "BrainyQuote.com",
			year : "",
			tags: "Life, Believe, Intelligent"
		},

		{
			quote : "I have no special talent. I am only passionately curious",
			source: "Albert Einstein",
			citation: "Quotationspage.com",
			year: "",
			tags: "Education, I Am, Talent"
		},

		{
			quote : "First they ignore you, then they laugh at you, then they fight you, then you win.", 
			source : "Mahatma Gandhi",
			citation : "Quotationspage.com",
			year: "",
			tags: "Fight, Laugh, Win"	   	
		},

		{
			quote: "Pleasure in the job puts perfection in the work.",
			source : "Aristotle", 
			citation:  "Quotationspage.com",
			year: "",
			tags: "Work, Job, Perfection"	   	
		}

		];

		
		//This function generates a random number. 
		function randomNumber() {
			var number = Math.floor(Math.random() * quotes.length);
			return number;
		}

		//This function gets random quote object (quote, source & citation) from quotes array corresponding to the position of randomNumber generated.
		function getRandomQuote() {
			var randomQuoteObject = quotes[randomNumber()]; 
			return randomQuoteObject;
		}

	     // This function generates a random (new) color 
	     function randomColor() { 
	     	color = '#';
	     	var pick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	     	for (var i=0; i<6; i++ ) {
		 //Here a random number from 0 to 15 is generated which is used to get a random number or letter from the 'pick' array.
		 color += pick[Math.floor(Math.random() * 16)]; 
		}
	    } 

	     //This function will change the color of the background and the button.
	     function newBackgroundColor() {  
	     	randomColor();
	     	document.body.style.backgroundColor = color;
	     	document.getElementById('loadQuote').style.backgroundColor = color;
	     }

	    //When the button is clicked then this function resets the timer to 0.
	    function resetTimer() { 
	    	clearInterval(changeQuote);
	    	changeQuote = window.setTimeout(printQuote, 30000);
	    }
	    
	    //This function uses a for loop to retrieve all the objects from the displayed array and restore them to the restore quotes array.
	    function restoreQuotesArray() { 
	    	for (var i=0; i < 5; i++) {
	    		var retrieveObject = displayedQuotes.shift();
	    		quotes.push(retrieveObject);
	    	}
	    }

		// The printQuote function  calls the getRandomQuote function and stores the returned quote object in a variable
		function printQuote() {
		//In case all the quotes have been displayed then all quote objects are put back into the quotes array
		if (quotes.length < 1) { 
			restoreQuotesArray();
		}
		var quoteObject = getRandomQuote();
		htmlQuote = '<p class="quote">' + quoteObject.quote + '</p> <p class="source">' + quoteObject.source;
		 //In case citation is provided, it will get added to the htmlQuote.
		 if (quoteObject.citation !== ' ') {  
		htmlQuote += '<span class="citation">' + quoteObject.citation + '</span>';
		  }
	          //In case year is given, it also gets added to the htmlQuote.
	          if (quoteObject.year !== ' ') { 
	          	htmlQuote += '<span class="year">' + quoteObject.year + '</span>';
	          }
              //If any tags are provided, they are also added to the htmlQuote.
	          if (quoteObject.tags !== ' ') { 
	          	htmlQuote += '<span class="tags">' + quoteObject.tags + '</span>';
	          }
	          htmlQuote += '</p>';
		 // This will get the html in the quote-box div and replace it with 'htmlQuote'.
		  document.getElementById('quote-box').innerHTML =  htmlQuote; 
	           // Finds the index of the quote object 
	             var indexQuoteObject = quotes.indexOf(quoteObject); 
		// Here the selected quote object is moved into the displayedQuotes array..
		 displayedQuotes.push(quoteObject); 
		 //And also removed from the quotes array.
		 quotes.splice(indexQuoteObject, 1); 
		 newBackgroundColor();
		 resetTimer();
		 return htmlQuote;
		} 

		// Here the printQuote function is called at an interval of 30 seconds to display a new quote.
		var changeQuote = window.setTimeout(printQuote, 30000); 
