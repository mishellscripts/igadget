module.exports = function() {
	let $shopByPrice = $body.find("#SideCategoryShopByPrice"); // Wrapper
	let $shopByPriceContent = $shopByPrice.find(".BlockContent"); // Content
	let $shopByBrand = $body.find("#SideShopByBrand");
	let $shopByBrandContent = $shopByBrand.find(".BlockContent"); // Content
	
	$body.addClass("mw-category");

	$shopByPrice.attr("data-ur-set", "toggler").addClass("mw-menu-filter");
	$shopByBrand.attr("data-ur-set", "toggler").addClass("mw-menu-filter");
	$shopByPrice.find("h2").attr("data-ur-toggler-component", "button").addClass("mw-headline-menu"); // Trigger
	$shopByBrand.find("h2").attr("data-ur-toggler-component", "button").addClass("mw-headline-menu");
	$shopByPriceContent.attr("data-ur-toggler-component", "content");
	$shopByPriceContent.find("a").addClass("mw-bar-menu");
	$shopByBrandContent.attr("data-ur-toggler-component", "content");
	$shopByBrandContent.find("a").addClass("mw-bar-menu");
};