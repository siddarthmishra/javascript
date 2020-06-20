/**
 *
 */
function wait(){
	// setTimeout : once
	setTimeout(function(){alert('Hello')},5000);
}

function continuous(){
	// setInterval : repeat periodically
	setInterval(function(){
		var d = new Date();
		var x = d.toDateString() + " " + d.toTimeString();
		document.getElementById("clockinfo").innerHTML = x;
	}, 1000); // every 1 second
}