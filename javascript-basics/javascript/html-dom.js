/**
 *
 */
var tvCount = 0;
function handleHTML(){
	var para = document.getElementById("para1");
	para.align = "center";
	para.style.fontWeight = "bold";
	para.style.fontSize = "50px";
	para.style.color = "red";
	para.style.fontFamily = "Charcoal";
	para.style.fontStyle = "italic";

	var img = document.getElementById("img1");
	img.src = "../../images/java-logo.png";
	img.width = 150;
	img.height = 150;
}

function handleCreateRemove(obj){
	var event = obj.value;
	var parent = document.getElementById("div1");
	var child;
	if(event == "remove"){
		child = document.getElementById("p2");
		try{
			parent.removeChild(child);
		} catch(e){
			alert(e.message);
		}
	} else if(event == "add"){
		child = document.createElement("p");
		var text = document.createTextNode("I am new in here");
		child.appendChild(text);
		parent.appendChild(child);
	}
}

function handleProduct(obj){
	var event = obj.id;
	var parent = document.getElementById("product");
	var child;
	if(event == "rm_p2"){
		child = document.getElementById("p2");
		try{
			parent.removeChild(child);
		} catch(e){
			alert(e.message);
		}
		obj.disabled="disabled";
	} else if(event == "add_tv"){
		tvCount++;
		child = document.createElement("p");
		var text = document.createTextNode("TV - 200$");
		child.appendChild(text);
		parent.appendChild(child);
		if(tvCount >= 2)
			obj.disabled="disabled";
	}
}