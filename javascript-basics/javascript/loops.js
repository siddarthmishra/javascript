/**
 *
 */
function assignmentContinue() {
	var x = parseInt(prompt("Enter any positive number", "10"));

	document.write("<br/>Using for loop");
	for (var i = 1; i <= x; i++) {
		if (i % 3 == 0)
			continue;
		document.write("<br/>Number is " + i);
	}
	document.write("<br/><br/>Using while loop");
	var j = 1;
	while (j <= x) {
		if (j % 3 == 0) {
			j++;
			continue;
		}
		document.write("<br/>Number is " + j);
		j++;
	}

	document.write("<br/><br/>Using do-while loop");
	var i = 1;
	do {
		if (i % 3 == 0) {
			i++;
			continue;
		}
		document.write("<br/>Number is " + i);
		i++;
	} while (i <= x);
}

function breakContinue() {
	var x = parseInt(prompt("Enter any positive number", "10"));
	document
	.write("<br/>Break Example : break at x/2. If x = 10, then break at 5");
	for (var i = 1; i <= x; i++) {
		if (i == x / 2)
			break;
		document.write("<br/>Number is " + i);
	}

	document
	.write("<br/><br/>Continue Example : Continue at x/2. If x = 10, the skip 5");
	for (var i = 1; i <= x; i++) {
		if (i == x / 2)
			continue;
		document.write("<br/>Number is " + i);
	}
}

function doWhile() {
	var n = 2;
	var i = 3;
	do {
		document.write("<br/>Value of i : " + i);
	} while (i <= n);
}

function forLoop() {
	var x = parseInt(prompt("Enter any positive number", "10"));
	for (var i = 1; i <= x; i++) {
		document.write("<br/>Number is " + i);
	}
}

function whileLoop() {
	var x = parseInt(prompt("Enter any positive number", "10"));
	var i = x;
	while (i >= 0) {
		document.write("<br/>Number is " + i);
		i--;
	}
}