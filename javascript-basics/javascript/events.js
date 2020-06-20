/**
 *
 */
function calculate(obj) {
	var x = parseFloat(document.calcform.num1.value);
	var y = parseFloat(document.calcform.num2.value);
	var z;
	if(obj.value == "Add")
		z = x + y;
	else if(obj.value == "Subtract")
		z = x - y;
	else if(obj.value == "Multiply")
		z = x * y;
	else if(obj.value == "Divide")
		z = x / y;
	else
		z = x % y;

	document.getElementById("result").innerHTML = z;
}

function handleOnChangeEvent(obj){
	var id = obj.id;
	var value = obj.value;
	if(id == "color"){
		if(value == "")
			value = "white";
		document.bgColor = value;
	} else if(id == "website"){
		if(value != "")
			window.location = value;
	} else if(id == "image"){
		document.body.style.backgroundImage = "url('"+ value +"')";
	}
}

function function1(obj){
	obj.style.color = "red";
	obj.style.backgroundColor = "yellow";
}

function function2(obj){
	obj.style.color = "black";
	obj.style.backgroundColor = "cyan";
}

function function3(obj){
	obj.style.color = "green";
	obj.style.backgroundColor = "white";
}

function handleOnLoad(obj){ // obj is window object
	var id = obj.document.body.id;
	wait();
	if(id == "print")
		window.print();
	else if(id == "redirect")
		window.location = "https://www.udemy.com/";
}

function handleOnSubmit(){
	alert("Submitting the form...");
}

function handleMouseDownEvent(x){
	x.style.color = "red";
	x.style.backgroundColor = "yellow";
	x.innerHTML = "MOUSEDOWN";
}

function handleMouseUpEvent(y){
	y.style.color = "yellow";
	y.style.backgroundColor = "blue";
	y.innerHTML = "MOUSEUP";
}

function handleMouseOverEvent(x){
	x.style.color = "red";
	x.style.backgroundColor = "yellow";
	x.innerHTML = "MOUSEOVER";
}

function handleMouseOutEvent(y){
	y.style.color = "yellow";
	y.style.backgroundColor = "blue";
	y.innerHTML = "MOUSEOUT";
}