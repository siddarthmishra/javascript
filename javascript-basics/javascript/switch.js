/**
 *
 */
function switchFun() {
	var x = parseInt(prompt("Enter any number between 1-7", "1-7"));
	var day;
	switch (x) {
	case 1:
		day = "MONDAY";
		break;
	case 2:
		day = "TUESDAY";
		break;
	case 3:
		day = "WEDNESDAY";
		break;
	case 4:
		day = "THURSDAY";
		break;
	case 5:
		day = "FRIDAY";
		break;
	case 6:
		day = "SATURDAY";
		break;
	case 7:
		day = "SUNDAY";
		break;
	default:
		day = "INVALID OPTION";
	}
	document.write("<br/>Day : " + day);
}

function switchUsingString() {
	var x = prompt("Enter any name", "sid, nikki, chetan");
	var intro;
	switch (x) {
	case "sid":
		intro = "Welcome Back Sid!!!";
		break;
	case "nikki":
		intro = "Welcome Back Nikki!!!";
		break;
	case "chetan":
		intro = "Welcome Back Chetan!!!";
		break;
	default:
		intro = "Hello " + x + "!!!";
	}
	document.write(intro);
}