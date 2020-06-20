/**
 *
 */
function assignmentOperator() {
	var x = 20;
	var y = 10;

	document.write("x = " + x + "<br/>" + "y = " + y);

	var z = x *= y;
	// z = x = x * y;
	// z = x = 10*20
	// z = x = 200

	document.write("<br/>z = x*=y<br/>=> z = x = x * y<br/>=> z = x = 10 * 20");
	document.write("<br/>z = " + z);
	document.write("<br/>x = " + x);
	document.write("<br/>y = " + y);
}

function comparisonOperator() {
	var x = "20";
	var y = "10";
	var z = 10;

	document.write("x = " + "\"" + x + "\"" + "<br/>" + "y = " + "\"" + y
			+ "\"" + "<br/>" + "z = " + z);
	document.write("<br/>" + "y == z : ");
	document.write(y == z);
	document.write("<br/>" + "y === z : ");
	document.write(y === z);
	document.write("<br/>" + "y != z : ");
	document.write(y != z);
	document.write("<br/>" + "y !== z : ");
	document.write(y !== z);
	document.write("<br/>" + "x != y : ");
	document.write(x != y);
	document.write("<br/>" + "(z >= 10) : ");
	document.write(z >= 10);
	document.write("<br/>" + "(z >= \"10\") : ");
	document.write(z >= "10");
	document.write("<br/>Only === and !== can check data type");
}

function incrementecrement() {
	var x = 20;
	document.write("x = " + x);
	var y = x++;

	document.write("<br/>y = x++");
	document.write("<br/>x = " + x + "<br/>" + "y = " + y + "<br/>");

	var a = 20;
	document.write("<br/>a = " + a);
	var b = --a;

	document.write("<br/>b = --a");
	document.write("<br/>a = " + a + "<br/>" + "b = " + b + "<br/>");

	var c = 15;
	document.write("<br/>c = " + c);
	var d = c--;

	document.write("<br/>d = c--");
	document.write("<br/>c = " + c + "<br/>" + "d = " + d + "<br/>");

	var p = 5;
	document.write("<br/>p = " + p);
	var q = ++p;

	document.write("<br/>q = ++p");
	document.write("<br/>p = " + p + "<br/>" + "q = " + q + "<br/>");
}

function operatorsFun(){
	var x = 20;
	var y = 10;

	document.write((x + y) + "<br/>" + (x - y) + "<br/>" + (x * y) + "<br/>" + (x / y) + "<br/>" + (x % y));
}