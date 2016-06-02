var songNames = [
	"Word Crimes",
	"Mission Statememt",
	"White &amp; Nerdy",
	"It's All About The Pentiums",
	"Online",
	"We Didn't Start With Fiber",
	"A Song About Google"
];

var songDescriptions = [
	"Written by American musician \"Weird Al\" Yankovic for his fourteenth studio album.  This song is a paraody of \"Blurred Lines\" by Robin Thicke.",
	"Written by American musician \"Weird Al\" Yankovic for his fourteenth studio album.  This song written in a parody of Crosby, Stills, and Nash.",
	"Written by American musician \"Weird Al\" Yankovic for his ? studio album.  This song is a paraody of \"Ridin'\" by Chamillionaire featuring Krayzie Bone.",
	"Written by American musician \"Weird Al\" Yankovic for his ? studio album.  This song is a paraody of \"It's All About the Benjamins\" by Puff Daddy.",
	"Written by Brad Paisley with Kelley Lovelace and Chris DuBois.  This song has lyrics that satirized the online world.",
	"A parody of \"We Didn't Start The Fire\" by Billy Joel.  This song is about the first fifteen years of the Internet.",
	"Lyrics by James McFraw, sung to the tune of \"My Girl\".  This song is about finding material to plagiarize for school papers and learning that your new love is a man killer before it's too late."
];

var songIds = ["WC", "MS", "WN", "Pent", "OL", "Fiber", "SG"];

var memberNames = [
	"Eric Hungate",
	"Dave Evans",
	"Steve Gedwillo",
	"Linda Hood",
	"Bill Kinnamon"
];

var memberInstruments = [
	"Band Leader",
	"Bass Guitarist",
	"Instrumentals",
	"Female Vocalist",
	"Vocalist"
];

var memberBios = [
	"The AITP BandITs' band leader, who started his music career as a rock/R&amp;B musician in 1970 and is a published singer-songwriter with his CDs on iTunes and other media outlets, is a Chief Information Officer for a nonprofit association in Austin, TX.",
	"Dave started his music career in 1977 as a bass guitarist playing various different genres of music in venues from small coffee-shops to large music festivals and is a current member of another band in addition to the AITP BandITs, is a Research Technician at a state university in Birmingham, AL.",
	"Steve has played various instruments in pop/rock and Christian bands over the last 30 years and co-produced and performed on a CD of original songs released in April 2010, is a 20-year IT veteran and currently an IT manager at a life insurance company in Omaha, NE.",
	"Linda appeared on the Grand Old Opry, Nashville Network's \"You Can Be A Star\", Ernest Tubb's Midnight Jamboree Radio Show, and awarded the \"Best Female Vocalist\" at the Loretta Lynn Talent Showcase, is a 25-year IT software development professional in Nashville, TN.",
	"Bill started his music career in a rock band over 20 years ago and released four albums, is a 15-year IT veteran currently finishing his degree in Computer Network Engineering in Houston, TX."
];

var memberImages = [
	"images/cKadlec.jpg",
	"images/jKaleta.jpg",
	"images/jBullington.jpg",
	"images/cAasheim.jpg",
	"images/rThackston.jpg"
];

function songInfo(id) {
	var mywin = window.open("", "newWin", "width=400, height=200");
	var q = songIds.indexOf(id);
	mywin.document.write("<h2>" + songNames[q]  + "</h2><p>" + songDescriptions[q] + "</p>");
	/* Old way from Assignment 4 Alert */

	/*
		alert("You clicked on the song with the id: " + id);
	*/
}

/* Function to print each band member to the website */
function printMembers() {
	for (var i=0; i < memberNames.length; i++){
		document.write('<img src="' + memberImages[i] + '" alt="' + memberNames[i] + '">');
		document.write('<h3>' + memberNames[i] + ' - ' + memberInstruments[i] + '</h3>');
		document.write("<p>" + memberBios[i] + "</p>");
		document.write('<br class="clear">');
	}

function show(x){
	document.getElementById(x + "a").style.display="block";
}

function hide(x){
	document.getElementById(x + "a").style.display="none";
}

// declare global variables
var formValidity = true;

function submitTickets(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}
	formValidity = true;
	validateRequired();

	if (formValidity === true){
		document.getElementById("errorMessage").innerHTML = "";
		document.getElementById("errorMessage").style.display = "none";
		orderTotal();
		document.getElementById("ticketForm").submit();
	} else {
		document.getElementById("errorMessage").innerHTML = "Please complete the highlighted fields.";
		document.getElementById("errorMessage").style.display = "block";
		scroll(0,0);
	}
}

// validate required fields
function validateRequired() {
	var inputElements = document.querySelectorAll("fieldset:first-of-type input");  //get inputs only from the first fieldset
	var errorDiv = document.getElementById("errorMessage");
	var deliveryMethodBoxes = document.getElementsByName("DeliveryMethod");
	var fieldsetValidity = true;
	var elementCount = inputElements.length;
	var currentElement;
	try {
		for (var i = 0; i < elementCount; i++) {
			//validate all input elements in first fieldset
			currentElement = inputElements[i];
			if (currentElement.value === "") {
				currentElement.style.border = "3px solid #881122";
				currentElement.style.backgroundColor = "#88ccdd";
				fieldsetValidity = false;
			} else {
				currentElement.style.border = "";
				currentElement.style.backgroundColor = "";
			}
		}
		currentElement = document.querySelectorAll("select")[0];
		//validate state select element
		if (currentElement.selectedIndex === 0) {
			currentElement.style.border = "3px solid #881122";
			currentElement.style.backgroundColor = "#88ccdd";
			fieldsetValidity = false;
		} else {
			currentElement.style.border = "";
			currentElement.style.backgroundColor = "";
		}
		currentElement = document.getElementById("date");
		if (currentElement.value === ""){
			currentElement.style.border = "3px solid #881122";
			currentElement.style.backgroundColor = "#88ccdd";
			fieldsetValidity = false;
		} else {
			currentElement.style.border = "";
			currentElement.style.backgroundColor = "";
		}
		if (!deliveryMethodBoxes[0].checked && !deliveryMethodBoxes[1].checked && !deliveryMethodBoxes[2].checked && !deliveryMethodBoxes[3].checked && !deliveryMethodBoxes[4].checked && !deliveryMethodBoxes[5].checked) {
			// verify a crust is selected
			for(var i = 0; i < deliveryMethodBoxes.length; i++){
				deliveryMethodBoxes[i].style.outline = "3px solid #881122";
				fieldsetValidity = false;
			}
		} else {
			for(var i = 0; i < deliveryMethodBoxes.length; i++){
				deliveryMethodBoxes[i].style.outline = "";
			}
		}

		if (fieldsetValidity === false) {
			throw "Please complete all required fields.";
		} else {
			errorDiv.style.display = "none";
			errorDiv.innerHTML = "";
		}
	}
	catch(msg){
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
}

// get order total only if fields are filled out
function orderTotal() {
	var itemTotal = 10;
	var checkBoxes = document.querySelectorAll("input[type=checkbox]");
	var radioButtons = document.getElementsByName("DeliveryMethod");
	var selectList = document.querySelectorAll("select")[0];
	if (selectList.selectedIndex > 0){
		itemTotal += (selectList.selectedIndex + 1);
	}
	for (var i = 0; i < checkBoxes.length; i++) {
		if(checkBoxes[i].checked) {
			itemTotal += 10;
		}
	}
	for (var i = 0; i < radioButtons.length; i++){
		if (radioButtons[i].checked) {
			itemTotal += ((i + 1)  * 2);
		}
	}
	alert("Your order total is $" + itemTotal);
	document.getElementById("myOrderTotal").value = itemTotal;
}
