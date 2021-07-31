$(document).on('ready', function() {
	renderTopBar();
	renderMiddleInner();
	renderHeaderInner();
	renderShopService();

	$("#signup").click(function() {
		handleSignup();
	});

	$("#login").click(function() {
		handleLogin();
	});

	$("#logout").click(function() {
		handleLogout();
	});
});
	
/*====================================
	render template
======================================*/

function renderTopBar(){
	if(isLogined()){
		let username = getCookie('name');
		var content =
		"<div class='container'>\n"+
		"	<div class='row'>\n"+
		"		<div class='col-lg-4 col-md-12 col-12'>\n"+
		"		</div>\n"+
		"		<div class='col-lg-8 col-md-12 col-12'>\n"+
		"			<div class='right-content'>\n"+
		"				<ul class='list-main'>\n"+
		"					<li><i class='ti-user'></i> Hello " + username + "</li>\n"+
		"					<li><i class='ti-settings'></i> <a href='#'>My account</a></li>\n"+
		"					<li><i class='ti-power-off'></i><a id='logout' href='#'>Logout</a></li>\n"+
		"				</ul>\n"+
		"			</div>\n"+
		"		</div>\n"+
		"	</div>\n"+
		"</div>";
	}
	else{
		var content =
		"<div class='container'>\n"+
		"	<div class='row'>\n"+
		"		<div class='col-lg-4 col-md-12 col-12'>\n"+
		"		</div>\n"+
		"		<div class='col-lg-8 col-md-12 col-12'>\n"+
		"			<div class='right-content'>\n"+
		"				<ul class='list-main'>\n"+
		"					<li><i class='ti-location-pin'></i> Store location</li>\n"+
		"					<li><i class='ti-power-off'></i><a href='/login'>Login</a></li>\n"+
		"				</ul>\n"+
		"			</div>\n"+
		"		</div>\n"+
		"	</div>\n"+
		"</div>";
	}
	$(".topbar").html(content);
}
	

function renderMiddleInner(){
	var content = 
	"<div class='container'>\n"+
	"	<div class='row'>\n"+
	"		<div class='col-lg-2 col-md-2 col-12'>\n"+
	"			<!-- Logo -->\n"+
	"			<div class='logo'>\n"+
	"				<a href='/index'><img src='images/logo.png' alt='logo'></a>\n"+
	"			</div>\n"+
	"			<!--/ End Logo -->\n"+
	"			<!-- Search Form -->\n"+
	"			<div class='search-top'>\n"+
	"				<div class='top-search'><a href='#0'><i class='ti-search'></i></a></div>\n"+
	"				<!-- Search Form -->\n"+
	"				<div class='search-top'>\n"+
	"					<form class='search-form'>\n"+
	"						<input type='text' placeholder='Search here...' name='search'>\n"+
	"						<button value='search' type='submit'><i class='ti-search'></i></button>\n"+
	"					</form>\n"+
	"				</div>\n"+
	"				<!--/ End Search Form -->\n"+
	"			</div>\n"+
	"			<!--/ End Search Form -->\n"+
	"			<div class='mobile-nav'></div>\n"+
	"		</div>\n"+
	"		<div class='col-lg-8 col-md-7 col-12'>\n"+
	"			<div class='search-bar-top'>\n"+
	"				<div class='search-bar'>\n"+
	"					<form>\n"+
	"						<input name='search' placeholder='Search Products Here.....' type='search'>\n"+
	"						<button class='btnn'><i class='ti-search'></i></button>\n"+
	"					</form>\n"+
	"				</div>\n"+
	"			</div>\n"+
	"		</div>\n"+
	"		<div class='col-lg-2 col-md-3 col-12'>\n"+
	"			<div class='right-bar'>\n"+
	"				<!-- Search Form -->\n"+
	"				<div class='sinlge-bar'>\n"+
	"					<a href='/wishlist' class='single-icon'><i class='fa fa-heart-o' aria-hidden='true'></i></a>\n"+
	"				</div>\n"+
	"				<div class='sinlge-bar'>\n"+
	"					<a href='#' class='single-icon'><i class='fa fa-user-circle-o' aria-hidden='true'></i></a>\n"+
	"				</div>\n"+
	"				<div class='sinlge-bar shopping'>\n"+
	"					<a href='#' class='single-icon'><i class='ti-bag'></i> <span class='total-count'>2</span></a>\n"+
	"					<!-- Shopping Item -->\n"+
	"					<div class='shopping-item'>\n"+
	"						<div class='dropdown-cart-header'>\n"+
	"							<span>2 Items</span>\n"+
	"							<a href='#'>View Cart</a>\n"+
	"						</div>\n"+
	"						<ul class='shopping-list'>\n"+
	"							<li>\n"+
	"								<a href='#' class='remove' title='Remove this item'><i class='fa fa-remove'></i></a>\n"+
	"								<a class='cart-img' href='#'><img src='https://via.placeholder.com/70x70' alt='#'></a>\n"+
	"								<h4><a href='#'>Woman Ring</a></h4>\n"+
	"								<p class='quantity'>1x - <span class='amount'>$99.00</span></p>\n"+
	"							</li>\n"+
	"							<li>\n"+
	"								<a href='#' class='remove' title='Remove this item'><i class='fa fa-remove'></i></a>\n"+
	"								<a class='cart-img' href='#'><img src='https://via.placeholder.com/70x70' alt='#'></a>\n"+
	"								<h4><a href='#'>Woman Necklace</a></h4>\n"+
	"								<p class='quantity'>1x - <span class='amount'>$35.00</span></p>\n"+
	"							</li>\n"+
	"						</ul>\n"+
	"						<div class='bottom'>\n"+
	"							<div class='total'>\n"+
	"								<span>Total</span>\n"+
	"								<span class='total-amount'>$134.00</span>\n"+
	"							</div>\n"+
	"							<a href='checkout.html' class='btn animate'>Checkout</a>\n"+
	"						</div>\n"+
	"					</div>\n"+
	"					<!--/ End Shopping Item -->\n"+
	"				</div>\n"+
	"			</div>\n"+
	"		</div>\n"+
	"	</div>\n"+
	"</div>\n";
	$(".middle-inner").html(content);
}

function renderHeaderInner(){
	var content =
	"<div class='container'>"+
	"    <div class='cat-nav-head'>"+
	"        <div class='row'>"+
	"            <div class='col-12'>"+
	"                <div class='menu-area'>"+
	"                    <!-- Main Menu -->"+
	"                    <nav class='navbar navbar-expand-lg'>"+
	"                        <div class='navbar-collapse'>	"+
	"                            <div class='nav-inner'>	"+
	"                                <ul class='nav main-menu menu navbar-nav'>"+
	"                                    <li class='active'><a href='#'>Home</a></li>"+
	"                                    <li><a href='#'>Product</a></li>												"+
	"                                    <li><a href='#'>Service</a></li>"+
	"                                    <li><a href='#'>Shop<i class='ti-angle-down'></i><span class='new'>New</span></a>"+
	"                                        <ul class='dropdown'>"+
	"                                            <li><a href='shop-grid.html'>Shop Grid</a></li>"+
	"                                            <li><a href='cart.html'>Cart</a></li>"+
	"                                            <li><a href='checkout.html'>Checkout</a></li>"+
	"                                        </ul>"+
	"                                    </li>"+
	"                                    <li><a href='#'>Pages</a></li>									"+
	"                                    <li><a href='#'>Blog<i class='ti-angle-down'></i></a>"+
	"                                        <ul class='dropdown'>"+
	"                                            <li><a href='blog-single-sidebar.html'>Blog Single Sidebar</a></li>"+
	"                                        </ul>"+
	"                                    </li>"+
	"                                    <li><a href='contact.html'>Contact Us</a></li>"+
	"                                </ul>"+
	"                            </div>"+
	"                        </div>"+
	"                    </nav>"+
	"                    <!--/ End Main Menu -->	"+
	"                </div>"+
	"            </div>"+
	"        </div>"+
	"    </div>"+
	"</div>";
	$(".header-inner").html(content);
}

function renderShopService(){
	var content =
	"<div class='container'>\n"+
	"    <div class='row'>\n"+
	"        <div class='col-lg-3 col-md-6 col-12'>\n"+
	"            <!-- Start Single Service -->\n"+
	"            <div class='single-service'>\n"+
	"                <i class='ti-rocket'></i>\n"+
	"                <h4>Free shiping</h4>\n"+
	"                <p>Orders over $100</p>\n"+
	"            </div>\n"+
	"            <!-- End Single Service -->\n"+
	"        </div>\n"+
	"        <div class='col-lg-3 col-md-6 col-12'>\n"+
	"            <!-- Start Single Service -->\n"+
	"            <div class='single-service'>\n"+
	"                <i class='ti-reload'></i>\n"+
	"                <h4>Free Return</h4>\n"+
	"                <p>Within 30 days returns</p>\n"+
	"            </div>\n"+
	"            <!-- End Single Service -->\n"+
	"        </div>\n"+
	"        <div class='col-lg-3 col-md-6 col-12'>\n"+
	"            <!-- Start Single Service -->\n"+
	"            <div class='single-service'>\n"+
	"                <i class='ti-lock'></i>\n"+
	"                <h4>Sucure Payment</h4>\n"+
	"                <p>100% secure payment</p>\n"+
	"            </div>\n"+
	"            <!-- End Single Service -->\n"+
	"        </div>\n"+
	"        <div class='col-lg-3 col-md-6 col-12'>\n"+
	"            <!-- Start Single Service -->\n"+
	"            <div class='single-service'>\n"+
	"                <i class='ti-tag'></i>\n"+
	"                <h4>Best Peice</h4>\n"+
	"                <p>Guaranteed price</p>\n"+
	"            </div>\n"+
	"            <!-- End Single Service -->\n"+
	"        </div>\n"+
	"    </div>\n"+
	"</div>\n";
	$(".shop-services").html(content);
}

/*====================================
	load product list
======================================*/

function loadProducts(type){
	var queryData ="type="+type;
	$.ajax({
		type: 'GET',
		url: '/getProduct',
		dataType:"text",
		data: queryData,
		success: function(data) {
			let req = JSON.parse(data);
			let products = req.res;
			var content = "";
			products.forEach(product => {
				let price = parseFloat(product.price).toFixed(2);
				content +=
				"<div class='col-xl-3 col-lg-4 col-md-4 col-12'>\n"+
				"	<div class='single-product'>\n"+
				"		<div class='product-img'>\n"+
				"			<a href='product-details.html'>\n"+
				"				<img class='default-img' src='" + product.img + "' alt='" + product.name + "'>\n"+
				"				<img class='hover-img' src='" + product.img + "' alt='" + product.name + "'>\n"+
				"			</a>\n"+
				"			<div class='button-head'>\n"+
				"				<div class='product-action'>\n"+
				"					<a data-toggle='modal' data-target='#exampleModal' title='View Product Detail' href='#'><i class=' ti-eye'></i><span>View Product Detail</span></a>\n"+
				"				</div>\n"+
				"				<div class='product-action-2'>\n"+
				"					<a title='Add to Wishlist' onclick=\"addToWishlist('" + product._id + "')\">Add to Wishlist</a>\n"+
				"				</div>\n"+
				"			</div>\n"+
				"		</div>\n"+
				"		<div class='product-content'>\n"+
				"			<h3><a href='product-details.html'>" + product.name + "</a></h3>\n"+
				"			<div class='product-price'>\n"+
				"				<span>HKD$" + price + "</span>\n"+
				"			</div>\n"+
				"		</div>\n"+
				"	</div>\n"+
				"</div>\n";
			});
			
			$("#" + type + " > .tab-single > .row").html(content);

		}
	});
}

/*====================================
	signup
======================================*/

function handleSignup(){
	var errorExsit = false; 
	var name = $("#name").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var repassword = $("#repassword").val();
	var token = $("#token").val();

	$("#nameError").html("");
	$("#passwordError").html("");
	$("#emailError").html("");
	if(name == ""){
		$("#nameError").html("Please enter Name");
		errorExsit = true;
	}
	if(email == ""){
		$("#emailError").html("Please enter Email");
		errorExsit = true;
	}
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email && !re.test(email.toLowerCase())){
		$("#emailError").html("Please enter a vaild email");
		errorExsit = true;
	}
	if(password == ""){
		$("#passwordError").html("Please enter Password");
		errorExsit = true;
	}
	if(repassword == ""){
		$("#repasswordError").html("Please enter Retype Password");
		errorExsit = true;
	}
	const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(password && !password.match(decimal)){
		$("#passwordError").html("The password you entered didn't match our requirement <ul><li>The password should bt 6 to 20 characters</li><li>Contain at least one lowercase letter, one uppercase letter, one numeric digit</li></ul>");
		errorExsit = true;
	}
	else if(password != repassword){
		$("#passwordError").html("Password not match with Retype Password");
		$("#repasswordError").html("Password not match with Retype Password");
		errorExsit = true;
	}
	
	if(email == ""){
		$("#emailError").html("Please enter your Email Address");
		errorExsit = true;
	}
	
	if(errorExsit){
		return false;
	}
	
	var queryData ="name="+name+"&password="+password+"&email="+email+"&token="+token;
	$.ajax({
		type: 'POST',
		url: '/handleSignup',
		dataType:"text",
		data:queryData,
		success: function(data) {
			let req = JSON.parse(data);
			alert(req.message);
			if(req.status === 200){
				window.location.href = "/login";
			}
		}
	});
}

function checkSignupEmail(){
	var email = $("#email").val();
	var queryData ="email="+email;
	$.ajax({
		type: 'GET',
		url: '/checkSignupEmail',
		dataType:"text",
		data:queryData,
		success: function(data) {
			let req = JSON.parse(data);
			$("#emailError").html("");
			if(req.status !== 200){
				$("#emailError").html("Email has been used");
			}
		}
	});
}

/*====================================
	login
======================================*/

function handleLogin(){
	var errorExsit = false; 
	var email = $("#email").val();
	var password = $("#password").val();
	var token = $("#token").val();

	$("#loginError").html("");
	if(email == "" || password == ""){
		$("#loginError").html("Please enter Email and Password to login");
		errorExsit = true;
	}
	
	if(errorExsit){
		return false;
	}
	
	var queryData ="email="+email+"&password="+password+"&token="+token;
	$.ajax({
		type: 'POST',
		url: '/handleLogin',
		dataType:"text",
		data:queryData,
		success: function(data) {
			let req = JSON.parse(data);
			console.log(req);
			if(req.status === 200){
				let userInfo = req.data;
				setCookie("name", userInfo.name);
				setCookie("userId", userInfo._id);
				window.location.href = "/";
			} else{
				$("#loginError").html(req.message);
			}
		}
	});
}

/*====================================
	logout
======================================*/

function handleLogout(){
	deleteCookie("name");
	deleteCookie("userId");
	window.location.href = "/";
}

/*====================================
	wishlist
======================================*/

function addToWishlist(productId){
	if(!isLogined()){
		alert("Please login first");
		window.location.href = "/";
		return false;
	}

	var queryData ="productId="+productId+"&userId="+getCookie('userId');
	$.ajax({
		type: 'POST',
		url: '/addToWishlist',
		dataType:"text",
		data:queryData,
		success: function(data) {
			let req = JSON.parse(data);
			if(req.status === 200){
				alert(req.message);
			}
		}
	});
}

function getWishlist(productId){
	if(!isLogined()){
		alert("Please login first");
		window.location.href = "/";
		return false;
		
	}

	var queryData ="userId="+getCookie('userId');
	$.ajax({
		type: 'GET',
		url: '/getWishlist',
		dataType:"text",
		data:queryData,
		success: function(data) {
			let req = JSON.parse(data);
			if(req.status === 200){
				let wishlists = req.res;
				console.log(wishlists);
				var content = "";
				wishlists.forEach(wishlist => {
					console.log(wishlist);
					let productDetail = wishlist.productDetails[0];
					let price = parseFloat(productDetail.price).toFixed(2);
					content +=
					"<tr id='" + wishlist['_id'] + "_col'>\n"+
					"    <td class='image' data-title='No'><img src='" + productDetail.img + "' alt='#'></td>\n"+
					"    <td class='product-des' data-title='Description'>\n"+
					"        <p class='product-name'><a href='#'>" + productDetail.name + "</a></p>\n"+
					"        <p class='product-des'>" + productDetail.desc + "</p>\n"+
					"    </td>\n"+
					"    <td class='price' data-title='Price'><span>HKD$" + price + "</span></td>\n"+
					"    <td class='action' data-title='Remove'><a onclick=\"deleteWishlist('" + wishlist['_id'] + "')\"><i class='ti-trash remove-icon'></i></a></td>\n"+
					"</tr>\n";
				});

				$(".wishlist").html(content);
			}
		}
	});
}

function deleteWishlist(wishlistId){
	var queryData ="wishlistId="+wishlistId;
	$.ajax({
		type: 'DELETE',
		url: '/deleteWishlist',
		dataType:"text",
		data:queryData,
		success: function(data) {
			let req = JSON.parse(data);
			if(req.status === 200){
				let res = req.res;
				if(res.deletedCount > 0){
					$("#"+wishlistId+"_col").remove();
				}
			}
		}
	});
}

/*====================================
	covid
======================================*/

function getCovidData(productId){
	var queryData ="userId="+getCookie('userId');
	$.ajax({
		type: 'GET',
		url: 'https://api.covid19api.com/summary',
		dataType:"text",
		data: queryData,
		success: function(data) {
			let req = JSON.parse(data);
			console.log(req);
			if(req){
				let countries = req.Countries;
				let global = req.Global;
				var content = "";
				countries.forEach(country => {
					console.log(country);
					content +=
					"<tr>\n"+
					"    <td>" + country.Country + "</td>\n"+
					"    <td>" + country.NewConfirmed + "</td>\n"+
					"    <td>" + country.NewDeaths + "</td>\n"+
					"    <td>" + country.NewRecovered + "</td>\n"+
					"    <td>" + country.TotalConfirmed + "</td>\n"+
					"    <td>" + country.TotalDeaths + "</td>\n"+
					"    <td>" + country.TotalRecovered + "</td>\n"+
					"</tr>\n";
				});

				content +=
					"<tr class='global'>"+
					"    <td>Global</td>\n"+
					"    <td>" + global.NewConfirmed + "</td>\n"+
					"    <td>" + global.NewDeaths + "</td>\n"+
					"    <td>" + global.NewRecovered + "</td>\n"+
					"    <td>" + global.TotalConfirmed + "</td>\n"+
					"    <td>" + global.TotalDeaths + "</td>\n"+
					"    <td>" + global.TotalRecovered + "</td>\n"+
					"</tr>\n";



				$(".covid").html(content);
			}
		}
	});
}

/*====================================
	captcha
======================================*/
function captchaVerify(token) {
	$("#token").val(token);
  	$(".action").show();
}

function captchaExpired(){
	$(".action").hide();
}

/*====================================
	cookies
======================================*/

function isLogined(){
	if(getCookie('userId')){
		return true;
	}
	return false;
}

function setCookie(cname, cvalue, exdays=1) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
}

function deleteCookie(cname) {
	if(getCookie(cname)) {
	  document.cookie = cname + "=;expires=;path=/";
	}
  }