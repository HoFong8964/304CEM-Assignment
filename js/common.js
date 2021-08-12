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

	$("#updateProfile").click(function() {
		handleUpdateProfile();
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
		"					<li><i class='ti-location-pin'></i> <a href='/store'>Store Locator</a></li>\n"+
		"					<li><i class='ti-settings'></i> <a href='/profile'>My Profile</a></li>\n"+
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
		"					<li><i class='ti-location-pin'></i> <a href='/store'>Store Locator</a></li>\n"+
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
	"				<a href='/'><img src='images/logo.png' alt='logo'></a>\n"+
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
	"					<form action='/products'>\n"+
	"						<input name='keyword' placeholder='Search Products Here.....' type='search'>\n"+
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
	"					<a href='/profile' class='single-icon'><i class='fa fa-user-circle-o' aria-hidden='true'></i></a>\n"+
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
	"                                    <li><a href='/products'>All Products</a></li>"+
	"                                    <li><a href='#'>Pages<i class='ti-angle-down'></i></a>"+
	"                                        <ul class='dropdown'>"+
	"                                            <li><a href='/covid'>COVID-19</a></li>"+
	"                                            <li><a href='/weather'>Weather</a></li>"+
	"                                        </ul>"+
	"                                    </li>"+
	"                                    <li><a href='/profile'>My Profile</a></li>"+
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
	load product list search box
======================================*/

function loadProductSearchBox(){
	const urlSearchParams = new URLSearchParams(window.location.search);
	const searchParams = Object.fromEntries(urlSearchParams.entries());
	searchParams.keyword = searchParams.keyword ? searchParams.keyword : '';
	searchParams.type = searchParams.type ? searchParams.type : '';
	var content = "";
	content +=
	"<form>"+
	"<!-- Single Widget -->"+
	"<div class='single-widget'>"+
	"    <h3 class='title'>Keyword</h3>"+
	"    <input name='keyword' placeholder='Search keyword' class='search-keyword' value='" + searchParams.keyword + "'>"+
	"</div>"+
	"<!--/ End Single Widget -->"+
	"<!-- Single Widget -->"+
	"<div class='single-widget category'>"+
	"    <h3 class='title'>Categories</h3>"+
	"    <ul class='check-box-list'>"+
	"        <li>"+
	"            <label class='checkbox-inline' for='all'><input name='type' id='all' value='' type='radio' " + (searchParams.type == '' ? 'checked' : '') + "> All</label>"+
	"        </li>"+
	"        <li>"+
	"            <label class='checkbox-inline' for='man'><input name='type' id='man' value='man' type='radio' " + (searchParams.type == 'man' ? 'checked' : '') + "> Man</label>"+
	"        </li>"+
	"        <li>"+
	"            <label class='checkbox-inline' for='women'><input name='type' id='women' value='women' type='radio' " + (searchParams.type == 'women' ? 'checked' : '') + "> Women</label>"+
	"        </li>"+
	"        <li>"+
	"            <label class='checkbox-inline' for='kid'><input name='type' id='kid' value='kid' type='radio' " + (searchParams.type == 'kid' ? 'checked' : '') + "> Kid</label>"+
	"        </li>"+
	"    </ul>"+
	"</div>"+
	"<!--/ End Single Widget -->"+
	"<!-- Shop By Price -->"+
	"<div class='single-widget range'>"+
	"    <h3 class='title'>Shop by Price</h3>"+
	"    <div class='price-filter'>"+
	"        <div class='price-filter-inner'>"+
	"            <div id='slider-range'></div>"+
	"                <div class='price_slider_amount'>"+
	"                <div class='label-input'>"+
	"                    <span>Range:</span><div id='amount' class='amount-range'></div>"+
	"                    <input type='hidden' name='min_amount' id='min_amount'>"+
	"                    <input type='hidden' name='max_amount' id='max_amount'>"+
	"                </div>"+
	"            </div>"+
	"        </div>"+
	"    </div>"+
	"</div>"+
	"<!--/ End Shop By Price -->"+
	"<div class='search-submit'>"+
	"	<input type='submit' class='btn' value='Apply'>"+
	"</div>"+
	"</form>";

	$(".search-box").html(content);
}

/*====================================
	load product list
======================================*/

function loadProducts(params){
	const urlSearchParams = new URLSearchParams(window.location.search);
	const searchParams = Object.fromEntries(urlSearchParams.entries());
	console.log(searchParams);
	var queryData = {};
	if(searchParams['keyword']){
		queryData["keyword"] = searchParams['keyword'];
	}
	if(searchParams['type']){
		queryData["type"] = searchParams['type'];
	}
	if(searchParams['min_amount']){
		queryData["min_amount"] = searchParams['min_amount'];
	}
	if(searchParams['max_amount']){
		queryData["max_amount"] = searchParams['max_amount'];
	}
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
				"<div class='col-lg-4 col-md-6 col-12'>\n"+
				"    <div class='single-product'>\n"+
				"        <div class='product-img'>\n"+
				"            <a href='#'>\n"+
				"                <img class='default-img' src='" + product.img + "' alt='#'>\n"+
				"                <img class='hover-img' src='" + product.img + "' alt='#'>\n"+
				"            </a>\n"+
				"            <div class='button-head'>\n"+
				"                <div class='product-action-2' id='" + product._id + "_action'>\n"+
				"                    <a title='Add to Wishlist' onclick=\"addToWishlist('" + product._id + "')\"><i class='fa fa-heart-o'></i> Add to Wishlist</a>\n\n"+
				"                </div>\n"+
				"            </div>\n"+
				"        </div>\n"+
				"        <div class='product-content'>\n"+
				"            <h3><a href='#'>" + product.name + "</a></h3>\n"+
				"            <div class='product-price'>\n"+
				"                <span>HKD$" + price + "</span>\n"+
				"            </div>\n"+
				"        </div>\n"+
				"    </div>\n"+
				"</div>\n";
			});
			
			$(".products").html(content);

			markProductsInWishlist();

		}
	});
}

function loadProductsByType(type){
	var queryData ="type="+type+"&limit=4";
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
				"			<a href='#'>\n"+
				"				<img class='default-img' src='" + product.img + "' alt='" + product.name + "'>\n"+
				"				<img class='hover-img' src='" + product.img + "' alt='" + product.name + "'>\n"+
				"			</a>\n"+
				"			<div class='button-head'>\n"+
				"				<div class='product-action-2' id='" + product._id + "_action'>\n"+
				"					<a title='Add to Wishlist' onclick=\"addToWishlist('" + product._id + "')\"><i class='fa fa-heart-o'></i> Add to Wishlist</a>\n"+
				"				</div>\n"+
				"			</div>\n"+
				"		</div>\n"+
				"		<div class='product-content'>\n"+
				"			<h3><a href='#'>" + product.name + "</a></h3>\n"+
				"			<div class='product-price'>\n"+
				"				<span>HKD$" + price + "</span>\n"+
				"			</div>\n"+
				"		</div>\n"+
				"	</div>\n"+
				"</div>\n";
			});
			
			$("#" + type + " > .tab-single > .row").html(content);

			markProductsInWishlist();

		}
	});
}

function markProductsInWishlist(){
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
				wishlists.forEach(wishlist => {
					$("#"+wishlist.productObjId+"_action").addClass("inWishlist");
					$("#"+wishlist.productObjId+"_action a").html("<i class='fa fa-heart-o'></i> Already in Wishlist");
					console.log($("#"+wishlist.productObjId+"_action a"));
				});
			}
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
	const decimal = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(password && !password.match(decimal)){
		$("#passwordError").html("The password you entered didn't match our requirement <ul><li>The password should bt 6 to 20 characters</li><li>Contain at least one lowercase letter, one uppercase letter, one numeric digit, one special symbol</li></ul>");
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
			} else{
				grecaptcha.reset();
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
				grecaptcha.reset();
			}
		}
	});
}

/*====================================
	profile
======================================*/

function handleUpdateProfile(){
	var errorExsit = false;
	var name = $("#name").val();
	var oldpassword = $("#oldpassword").val();
	var newpassword = $("#newpassword").val();
	var repassword = $("#repassword").val();
	var token = $("#token").val();

	$("#loginError").html("");
	if(name == ""){
		$("#loginError").html("Please enter name to update");
		errorExsit = true;
	}
	if(oldpassword || newpassword || repassword){
		if(!(oldpassword && newpassword && repassword)){
			$("#loginError").html("In order to update your password, please enter Old Password, New Password and Retype New Password");
			errorExsit = true;
		}
		const decimal = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(newpassword && !newpassword.match(decimal)){
			$("#loginError").html("The password you entered didn't match our requirement <ul><li>The password should bt 6 to 20 characters</li><li>Contain at least one lowercase letter, one uppercase letter, one numeric digit, one special symbol</li></ul>");
			errorExsit = true;
		}
		else if(newpassword != repassword){
			$("#loginError").html("Password not match with Retype Password");
			errorExsit = true;
		}
	}
	
	if(errorExsit){
		return false;
	}
	
	var queryData = "userId="+getCookie('userId')+"&name="+name+"&oldpassword="+oldpassword+"&newpassword="+newpassword+"&token="+token;
	$.ajax({
		type: 'PUT',
		url: '/handleUpdateProfile',
		dataType:"text",
		data: queryData,
		success: function(data) {
			let req = JSON.parse(data);
			console.log(req);
			if(req.status === 200){
				let autoLogout = req.autoLogout;
				if(autoLogout){
					alert("Your have updated your password, please login again");
					handleLogout();
				}
				else{
					setCookie("name", name);
					alert("Your profile have been updated");
					window.location.href = "/profile";
				}
				
			} else{
				$("#loginError").html(req.message);
				grecaptcha.reset();
			}
		}
	});
}

/*====================================
	logout
======================================*/

function handleLogout(){
	if(getCookie("loginWithGoogle")){
		console.log(gapi);
		var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
    	  console.log('Google User signed out.');
    	});
	}
	deleteCookie("name");
	deleteCookie("userId");
	deleteCookie("loginWithGoogle");
	window.location.href = "/";
}

/*====================================
	profile
======================================*/

function getProfileData(){
	var errorExsit = false; 
	var userId = getCookie("userId");
	var loginWithGoogle = getCookie("loginWithGoogle");
	
	if(!userId || loginWithGoogle){
		window.location.href = "/";
		return false;
	}

	var queryData = {};
	if(userId){
		queryData["userId"] = userId;
	}
	$.ajax({
		type: 'GET',
		url: '/getProfile',
		dataType:"text",
		data: queryData,
		success: function(data) {
			let req = JSON.parse(data);
			let userInfo = req.res;
			console.log(userInfo);
			$("#email").val(userInfo.email);
			$("#name").val(userInfo.name);

		}
	});
}

/*====================================
	wishlist
======================================*/

function addToWishlist(productId){
	if(!isLogined()){
		window.location.href = "/login";
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
				markProductsInWishlist()
			}
		}
	});
}

function getWishlist(productId){
	if(!isLogined()){
		window.location.href = "/login";
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
	$.ajax({
		type: 'GET',
		url: 'https://api.covid19api.com/summary',
		success: function(data) {
			console.log(data);
			let req = data;
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
	weather
======================================*/

function getWeatherData(){
	var lang = $("#weather-lang").val();
	var queryData ="dataType=fnd&lang="+lang;
	$.ajax({
		type: 'GET',
		url: 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php',
		dataType:"text",
		data:queryData,
		success: function(req) {
			const res = JSON.parse(req);

			console.log(res);
			if(res){
				let generalSituation = res.generalSituation;
				let weatherForecast = res.weatherForecast;
				console.log(weatherForecast);
				totalDays = weatherForecast.length;
				var content = "";
				
				// header
				content +=
					"<thead>\n"+
					"    <tr class='main-hading'>";
				for(let i=0; i< totalDays; i++){
					content += "    <th>" + weatherForecast[i].forecastDate + "<br>" + weatherForecast[i].week + "</th>\n";
				}
				content +=
					"	</tr>\n"+
					"</thead>\n";
			

				// body
				content += "<tbody>\n";

				// icon
				content += "<tr>\n";
				for(let i=0; i< totalDays; i++){
					content += "    <td><img src='http://www.hko.gov.hk/images/HKOWxIconOutline/pic" + weatherForecast[i].ForecastIcon + ".png' alt='" + weatherForecast[i].forecastWeather + "' style='width: 50px; height: 50px; margin: 6px; border-radius: 10px;'></td>\n";
				}
				content += "</tr>\n";

				// min / max temp
				content += "<tr>\n";
				for(let i=0; i< totalDays; i++){
					content += "    <td>" + weatherForecast[i].forecastMintemp.value + " | " + weatherForecast[i].forecastMaxtemp.value + " °C <br> " + weatherForecast[i].forecastMinrh.value + "-" + weatherForecast[i].forecastMaxrh.value + "%</td>\n";
				}
				content += "</tr>\n";

				content += "<tr>\n";
				for(let i=0; i< totalDays; i++){
					content += "    <td>" + weatherForecast[i].forecastWind + "</td>\n";
				}
				content += "</tr>\n";

				content += "<tr>\n";
				for(let i=0; i< totalDays; i++){
					content += "    <td>" + weatherForecast[i].forecastWeather + "</td>\n";
				}
				content += "</tr>\n";


				content += "</tbody>\n";
				

				$(".weather-generalSituation").html(generalSituation);
				$(".weather").html(content);
			}
		}
	});
}

/*====================================
	store locator
======================================*/
function getStoreData(){
	const uluru = { lat: 22.278419040409517, lng: 114.18207068126713 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<strong>Causeway Bay - Times Square</strong>' +
    '<div id="bodyContent">' +
    "<p>Times Square Basement 1, Causeway Bay</p>" +
	"<p><i>Business Hours</i> <br> <span>10:30am - 10:00pm (Sun - Thu)<br>10:30am - 10:30pm (Fri -Sat , Eve of Public Holiday)</span></p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 200,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Causeway Bay - Times Square",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
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

/*====================================
	google login
======================================*/
function googleSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	setCookie("name", profile.getName());
	setCookie("userId", profile.getId());
	setCookie("loginWithGoogle", true);
	window.location.href = "/";
}

function googleRenderButton() {
	gapi.signin2.render('google-signin-btn', {
	  'scope': 'profile email',
	  'width': 240,
	  'height': 50,
	  'longtitle': true,
	  'theme': 'dark',
	  'onsuccess': googleSignIn
	});
  }

function onLoad() {
	gapi.load('auth2', function() {
	  gapi.auth2.init();
	});
}