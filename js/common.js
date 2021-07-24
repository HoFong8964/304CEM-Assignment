$(document).on('ready', function() {
	renderTopBar();
	renderMiddleInner();
	renderHeaderInner();
});
	
function renderTopBar(){
	var content =
	"<div class='container'>\n"+
	"	<div class='row'>\n"+
	"		<div class='col-lg-4 col-md-12 col-12'>\n"+
	"		</div>\n"+
	"		<div class='col-lg-8 col-md-12 col-12'>\n"+
	"			<div class='right-content'>\n"+
	"				<ul class='list-main'>\n"+
	"					<li><i class='ti-location-pin'></i> Store location</li>\n"+
	"					<li><i class='ti-alarm-clock'></i> <a href='#'>Daily deal</a></li>\n"+
	"					<li><i class='ti-user'></i> <a href='#'>My account</a></li>\n"+
	"					<li><i class='ti-power-off'></i><a href='login.html#'>Login</a></li>\n"+
	"				</ul>\n"+
	"			</div>\n"+
	"		</div>\n"+
	"	</div>\n"+
	"</div>";
	$(".topbar").html(content);
}

function renderMiddleInner(){
	var content = 
	"<div class='container'>\n"+
	"	<div class='row'>\n"+
	"		<div class='col-lg-2 col-md-2 col-12'>\n"+
	"			<!-- Logo -->\n"+
	"			<div class='logo'>\n"+
	"				<a href='index.html'><img src='images/logo.png' alt='logo'></a>\n"+
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
	"					<a href='#' class='single-icon'><i class='fa fa-heart-o' aria-hidden='true'></i></a>\n"+
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