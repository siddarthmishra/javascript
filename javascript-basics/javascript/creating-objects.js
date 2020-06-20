/**
 *
 */
function createCustomObj(){
	var blogPost = new Object();
	blogPost.title = "JavaScript";
	blogPost.text = "It is awesome"
	blogPost.category = "UI Technology";

	document.write(blogPost.title);
	document.write("<br/>" + blogPost.text);
	document.write("<br/>" + blogPost.category);
}

function createCustomObjUsingFunction(){
	var bp1 = new blogPostFun("jQuery", "Makes JS easier to use");
	bp1.addCategory("UI Technology");
	bp1.displayBlogPost();

	var bp2 = new blogPostFun("AngularJS", "To build single page apps");
	bp2.addCategory("Advanced UI Technology");
	bp2.displayBlogPost();
}

function blogPostFun(title, text){
	this.title = title;
	this.text = text;
	this.addCategory = addCategory;
	this.displayBlogPost = displayBlogPost;
}

function addCategory(category){
	this.category = category;
}

function displayBlogPost(){
	document.write(this.title);
	document.write("<br/>" + this.text);
	document.write("<br/>" + this.category + "<br/>");
}

function createCustomObjUsingLiteral(){
	var blogPost = {
			title : "Java",
			text : "Is a object oriented language",
			displayDetails : function(){
				document.write(this.title + "<br/>");
				document.write(this.text + "<br/>");
			}
	};
	blogPost.displayDetails();
}

function singletonObject(){
	var blogPost = new function(){
		this.title = "Ruby on rails";
		this.text = "Rapid Web Development";
		this.displayDetails = function(){
			document.write(this.title + "<br/>");
			document.write(this.text + "<br/>");
		};
	};
	blogPost.displayDetails();
}

function product(id, name, desc, price){
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.price = price;
	this.displayProductDetails = displayProductDetails;
	this.calculateDiscount = calculateDiscount;
}

function displayProductDetails(){
	document.write(this.id + "<br/>");
	document.write(this.name + "<br/>");
	document.write(this.desc + "<br/>");
	document.write(this.price + "<br/>");
}

function calculateDiscount(percentage){
	this.price = (this.price - (this.price * (percentage/100)));
}

function assignmentProduct(){
	var p1 = new product("P101", "Product1", "Description of the Product", 100);
	p1.calculateDiscount(10);
	p1.displayProductDetails();
}