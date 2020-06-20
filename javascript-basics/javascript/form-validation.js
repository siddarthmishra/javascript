/**
 *
 */
function validate(obj){
	var formName = obj.name;
	if(formName == "textFields"){
		var email = document.textFields.email.value;
		var password = document.textFields.password.value;
		if(email == ""){
			alert("email is mandatory");
			document.textFields.email.focus();
			return false;
		}
		else if(password == ""){
			alert("password is mandatory");
			document.textFields.password.focus();
			return false;
		}
		else{
			alert("validation successful");
			return true;
		}
	}
	else if(formName == "numbers"){
		var num = document.numbers.number.value;
		if(isNaN(num) || num < 1 || num > 10){
			alert("Please enter a valid number between 1-10");
			document.numbers.number.focus();
			document.numbers.number.value = "";
			return false;
		} else{
			alert("Validation Successful");
			return true;
		}
	} else if(formName == "dropdown"){
		var color = document.dropdown.color.value;
		if(color == ""){
			alert("Please select a color");
			document.dropdown.color.focus();
			return false;
		} else{
			alert("Validation Successful");
			return true;
		}
	} else if(formName == "checkbox"){
		var valid = false;
		var js = document.getElementById("js").checked;
		var jQuery = document.getElementById("jQuery").checked;
		var ng = document.getElementById("ng").checked;
		var node = document.getElementById("node").checked;
		if(js || jQuery || ng || node){
			valid = true;
			alert("Validation Successful");
		}
		if(!valid){
			alert("Please select atleast one technology");
		}
		return valid;
	} else if(formName == "radio"){
		var valid = false;
		var x = document.radio.paymentmethod;
		for(i = 0; i < x.length; i++){
			if(x[i].checked){
				valid = true;
				alert("Validation Successful")
				break;
			}
		}
		if(!valid){
			alert("Please select payment mode")
		}
		return valid;
	} else if(formName == "regexp_text"){
		// var exp = /^[A-Za-z]{6,}$/;
		var exp = new RegExp("^[A-Za-z]{6,}$");
		var uname = document.regexp_text.username.value;
		var result = exp.test(uname);
		if(result){
			alert("Validation Successful");
		} else {
			alert("User Name should be combination of A-Z or a-z only and should be of minimum 6 character");
			document.regexp_text.username.focus();
			document.regexp_text.username.value = "";
		}
		return result;
	} else if(formName == "regexp_alpha_numeric"){
		var exp = new RegExp("^[\/A-za-z0-9\\s.,-]{15,150}$");
		var address = document.regexp_alpha_numeric.address.value;
		var result = exp.test(address);
		if(result){
			alert("Validation Successful");
		} else {
			alert("Address can contains A-Z, a-z, 0-9, space, line feed, tab space, comma(,), hyphen(-), dot(.), forward slash(/). Min 15 and Max 150 characters.");
			document.regexp_alpha_numeric.address.focus();
		}
		return result;
	}
}

function userRegistrationValidation(){
	var email = document.user_registration.email;
	var password = document.user_registration.password;
	var phone = document.user_registration.phone;

	var isValid = true;

	var email_regexp = new RegExp("^[A-Za-z0-9._]{6,}@.*");
	var password_regexp = new RegExp("^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*_]).{8,16}$");
	var phone_regexp = new RegExp("^[0-9]{10}$");

	if(!email_regexp.test(email.value)){
		alert("Please enter valid email");
		email.focus();
		isValid = false;
		return isValid;
	}
	if(!password_regexp.test(password.value)){
		alert("Size of password should be atleast 6 and should contain atleast one upper case, one lower case, one digit, any one of (!@#$%^&*_)");
		password.focus();
		password.value = "";
		isValid = false;
		return isValid;
	}
	if(!phone_regexp.test(phone.value)){
		alert("Please enter valid phone number");
		phone.focus();
		phone.value = "";
		isValid = false;
		return isValid;
	}
	if(isValid){
		alert("Validation Successful")
		return isValid;
	}
}
