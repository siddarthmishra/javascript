/**
 *
 */
function assignmentFunction() {
	var subjects = [ "Maths", "Physics", "Chemistry" ];
	var total = 0, average = 0, grade;
	for (i = 0; i < subjects.length; i++) {
		var marks = parseInt(prompt("Enter marks (0-100) in " + subjects[i],
		"0-100"));
		total += marks;
	}
	function calculateAverage(tot, subs) {
		return tot / subs;
	}
	average = parseInt(calculateAverage(total, subjects.length));
	function getGrade(avg) {
		if (avg >= 90 && avg <= 100) {
			return "A";
		} else if (avg >= 70 && avg < 90) {
			return "B";
		} else {
			return "C";
		}
	}
	grade = getGrade(average);
	document.write("Total : " + total + "<br/>Average : " + average
			+ "<br/>Grade : " + grade);
}

function closures() {
	var greet = "have a good day!!!";
	function fun1() {
		var a = "Hello";

		function fun2() {
			var b = "Siddarth";
			document.write(a + " " + b + ", " + greet);
		}

		return fun2();
	}

	fun1();
}

function functionWithArguments() {
	function multiply(x, y) {
		document.write(x + " * " + y + " = " + x * y + "<br/>");
	}
	multiply(10, 20);
	multiply(8, 9);
	multiply(15, 17);
}

function functionWithReturn() {
	var result;
	function multiply(x, y) {
		document.write(x + " * " + y + " = ");
		return x * y;
	}
	function displayResult(res) {
		document.write(res + "<br/>");
	}
	result = multiply(21, 11);
	displayResult(result);

	result = multiply(9, 6);
	displayResult(result);

	displayResult(multiply(27, 27));
}

function myfun() {
	function display() {
		alert("My First JS Function");
	}
	display();
	display();
	display();
}