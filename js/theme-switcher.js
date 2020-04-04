/* cookie vars */
/*
 * One quick note: due to security settings in the Google Chrome browser,
 * the cookie plugin will not work locally. You will need to upload it to
 * a server or use the http protocol.
 */
var cookie_name = "selected_theme";
var cookie_options = { path: '/', expires: 7 };

/* theme drawer toggler function */
/* function drawerToggler() {
	$("#theme-drawer").slideToggle("normal", function () {
		if ($("#theme-drawer").is(":visible")) {
			$("#wrapper").css("margin-bottom", "150px");
		} else {
		$("#wrapper").css("margin-bottom", "20px");
		}
	});
} */ 

//alert("Hello 1");

//theme-wrapper		theme-drawer

$(document).ready(function(){
	/* let the fun begin! */
	
	//alert("Hello");
	/* $(".drawer-toggler").click(function() {
		drawerToggler();	// calling the function we defined above
	}); */
	
	/* Theme Carousel */
	//$("#themes-frame").carousel("#btn-previous", "#btn-next");	//initializing the carousel plugin
	
	/* Get Cookie */
	var get_cookie = $.cookie(cookie_name);
	//alert("get_cookie: " + get_cookie);
	if(get_cookie != null) {
		$("#active-theme").attr({ href: "css/themes/" + get_cookie + ".css"});	// if the cookie has a value, get that value
	}

	/* theme switcher */
	$("#theme-drawer a").click(function() {
		var themename = $(this).attr("rel");	// get the rel value and store it in themename
		//alert("themename: " + themename);
		$("#active-theme").attr({ href: "css/themes/" + themename + ".css"});	// update the value of the href, which will point to the css file of the theme
		//drawerToggler();
		$.cookie(cookie_name, themename, cookie_options);	// update the value of the cookie
		return false;
	}); 
	
});