/**
 *
 */
function error_function(obj){
	var id = obj.id;
	if(id == "error"){
		document.write("Before noSuchFunction() call...");
		noSuchFunction();
		document.write("After noSuchFunction() call...");
	} else if(id == "error_handle"){
		document.write("Before noSuchFunction() call...");
		try{
			noSuchFunction();
		} catch(e){
			document.write("<br/>Inside catch block<br/>" + e.message);
		}
		document.write("<br/>After noSuchFunction() call...");
	} else if(id == "custom_error"){
		try{
			var age_id = document.getElementById("age");
			var age = parseInt(age_id.value);
			var p = document.getElementById("error_info");
			if(isNaN(age))
				throw "Enter Age in number";
			if(age < 18) {
				throw "Age " + age + " : Not Eligible to VOTE";
			}
			else if(age >= 18){
				p.innerHTML = "Age " + age + " : Eligible to VOTE";
				p.style.color = "green";
				p.style.fontWeight = "bold";
			}
		} catch(e){
			p.innerHTML = e;
			p.style.color = "red";
			p.style.fontWeight = "bold";
		} finally {
			age_id.value = "";
		}
	}
}