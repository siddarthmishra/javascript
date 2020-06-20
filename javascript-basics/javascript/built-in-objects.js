/**
 *
 */
function string_function(){
	var s = "Hello World";
	document.write(s);
	document.write("<br/>Length : " + s.length);
	document.write("<br/>Index of 'o' : " + s.indexOf("o"));
	document.write("<br/>Last Index of 'o' : " + s.lastIndexOf("o"));
	document.write("<br/>toLowerCase : " + s.toLowerCase());
	document.write("<br/>toUpperCase : " + s.toUpperCase());
	document.write("<br/>bold : " + s.bold());
	document.write("<br/>replace : " + s.replace("World", "Siddarth"));
}

function boolean_function(){
	var b1 = new Boolean(0); //false
	var b2 = new Boolean(1); //true
	var b3 = new Boolean(2); //true
	var b4 = new Boolean(-2); //true
	var b5 = new Boolean(); //false
	var b6 = new Boolean(""); //false
	var b7 = new Boolean(NaN); //false
	var b8 = new Boolean(null); //false
	var b9 = new Boolean("hello"); //true
	var b10 = new Boolean("false"); //true

	document.write("new Boolean(0) : " + b1 + "<br/>new Boolean(1) : " + b2);
	document.write("<br/>new Boolean(2) : " + b3 + "<br/>new Boolean(-2) : " + b4);
	document.write("<br/>new Boolean() : " + b5 + "<br/>new Boolean(\"\") : " + b6);
	document.write("<br/>new Boolean(NaN) : " + b7 + "<br/>new Boolean(null) : " + b8);
	document.write("<br/>new Boolean(\"hello\") : " + b9 + "<br/>new Boolean(\"false\") : " + b10);
}

function math_function(){
	document.write("Math.PI : " + Math.PI);
	document.write("<br/>Math.sqrt(49) : " + Math.sqrt(49));
	document.write("<br/>Math.pow(7,2) : " + Math.pow(7,2));
	document.write("<br/>Math.floor(14.7) : " + Math.floor(14.7)); // 14
	document.write("<br/>Math.ceil(14.7) : " + Math.ceil(14.7)); // 15
	document.write("<br/>Math.round(14.5) : " + Math.round(14.5));
	document.write("<br/>Math.round(14.4) : " + Math.round(14.4));
}

function arrays_function(obj){
	var id = obj.document.body.id;

	var a = new Array(2, 4.56, "Nikhita");
	document.write("var a = new Array(2, 4.56, \"Nikhita\");");

	var b = [5, "Sid", 10.01, true];
	document.write("<br/>var b = [5, \"Sid\", 10.01, true];");

	var c = new Array();
	document.write("<br/>var c = new Array();");

	if(id == "arrays"){
		document.write("<br/><br/>a : " + a)
		document.write("<br/>a.length : " + a.length)

		document.write("<br/><br/>Using Index");
		for(i = 0; i < a.length; i++){
			document.write("<br/>a[" + i + "] : " + a[i]);
		}

		document.write("<br/>b : " + b)

		document.write("<br/><br/>Using Index");
		for(i = 0; i < b.length; i++){
			document.write("<br/>b[" + i + "] : " + b[i]);
		}
		c[0] = 5;
		c[1] = new Boolean();
		c[2] = "add many more elements";
		document.write("<br/><br/>c[0] = 5;<br/>c[1] = new Boolean();<br/>c[2] = \"add many more elements\";");
		document.write("<br/>c : " + c)
	} else if(id == "concat-reverse-join"){
		document.write("<br/><br/>a.concat(b) : " + a.concat(b));
		c = a.concat(b,new Array(Math.PI, "qwerty"), 123.456, "other string");
		document.write("<br/>c = a.concat(b,new Array(Math.PI, \"qwerty\"), 123.456, \"other string\");");
		document.write("<br/>c : " + c);
		document.write("<br/><br/>c.reverse() : " + c.reverse());
		document.write("<br/><br/>b.join(\"-\") : " + b.join("-"));
		document.write("<br/>b.join(\";\") : " + b.join(";"));
	} else if(id == "delete-replace"){
		delete a[1];
		document.write("<br/>delete a[1];");
		document.write("<br/>a[1] : " + a[1]); // undefined
		document.write("<br/>a : " + a);
		a[0] = 49;
		a[1] = NaN;
		document.write("<br/><br/>Replace<br/>a[0] = 49;<br/>a[1] = NaN;");
		document.write("<br/>a : " + a);
	}
}

function date_function(){
	var d = new Date();
	document.write("var d = new Date();");
	document.write("<br/>d : " + d);
	document.write("<br/>d.toLocaleTimeString() : " + d.toLocaleTimeString());
	document.write("<br/>d.toLocaleDateString() : " + d.toLocaleDateString());
	document.write("<br/>d.toLocaleString() : " + d.toLocaleString());
}
