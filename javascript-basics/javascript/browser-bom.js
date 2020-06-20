/**
 *
 */
function screen_functions(){
	document.write("Screen Width : " + window.screen.width + "<br/>Screen Height : " + window.screen.height
			+ "<br/>Available Screen Width: " + window.screen.availWidth);

	document.write("<br/><br/>All properties in window.screen<br/>");
	for(x in window.screen){
		document.write(x + "<br/>");
	}
}

function history_function(obj){
	var event = obj.id;
	if(event == "forward")
		window.history.forward();
	else if(event == "back")
		window.history.back();
	else if(event == "all_prop"){
		document.write("<br/><br/>All properties in window.history<br/>");
		for(x in window.history){
			document.write(x + "<br/>");
		}
	}
}

function navigator_function(){
	document.write("App Name : " + window.navigator.appName);
	document.write("<br/>App Code Name : " + window.navigator.appCodeName);
	document.write("<br/>Is Cookie Enabled? : " + window.navigator.cookieEnabled);
	document.write("<br/>Is Java Enabled? : " + window.navigator.javaEnabled);

	document.write("<br/><br/>All properties in window.navigator<br/>");
	for(x in window.navigator){
		document.write(x + "<br/>");
	}
}