/**
 *
 */
function ifElseLadder() {
	var subjects = [ "JavaScript", "Java", ".NET" ];
	var isFail = false, grade;
	var total = 0;
	for (i = 0; i < subjects.length; i++) {
		var x = parseInt(prompt("Enter marks (0-100) in " + subjects[i], "35"));
		total += x;
		if (x < 35 || x > 100)
			isFail = true;
	}
	var average = parseInt(total / 3);
	document.write("<br/>Total : " + total + "<br/>Average : " + average);
	if (!isFail) {
		document.write("<br/>Result : Pass");
		if (average >= 70 && average <= 100) {
			grade = "A";
		} else if (average >= 60 && average < 70) {
			grade = "B";
		} else if (average >= 35 && average < 60) {
			grade = "C";
		}
	} else {
		grade = "F";
		document.write("<br/>Result : Fail");
	}
	document.write("<br/>Grade : " + grade);
}

function ifElse() {
	var x = parseInt(prompt("Enter any number", "10"));
	if (x == 10) {
		document.write("If block");
		document.write("<br/>x : " + x);
	} else {
		document.write("else block");
		document.write("<br/>x : " + x);
	}
}

function ifFun() {
	var x = parseInt(prompt("Enter any number", "10"));
	if (x == 10) {
		document.write("If block");
		document.write("<br/>x : " + x);
	}
}

function randomFun() {
	var x = parseInt(prompt("Enter any number"));
	var factor = "1";
	for (i = 1; i <= x.toString().length; i++) {
		factor = factor + "0";
	}
	var random = Math.random();
	var y = parseInt(random * factor);
	document.write("Random value :  " + y);
	document.write("<br/>Entered Value : " + x);
	if (x > y) {
		alert("You WON!!!");
	} else if (x == y) {
		alert("It's a tie!!!")
	} else {
		alert("You LOST!!!");
	}
}