module.exports = function() {
	$body.addClass("mw-category");
	
	let $bodyContentOuter = $body.find("#Outer");
	// let $shopByPrice = $body.find("#SideCategoryShopByPrice"); // Wrapper
	// let $shopByPriceContent = $shopByPrice.find(".BlockContent"); // Content
	let $shopByBrand = $body.find("#SideShopByBrand");
	let $shopByBrandContent = $shopByBrand.find(".BlockContent"); // Content
	let $categoryContent = $body.find("#CategoryContent");
	
	// Add/remove elements based on mobile mockup
	let $pageTitle = $(tag("h2", { class: "mw-main-title" }, "Misc"));
	$bodyContentOuter.find("#Header").html('').append($pageTitle);
	
	fns.removeElements([
		$bodyContentOuter.find("#CategoryBreadcrumb"),
		$bodyContentOuter.find(".Right"),
		$categoryContent.find(".ProductCompareButton"),
		$categoryContent.find(".CompareButton")
	]);

	// Shop by price toggler
	// $shopByPrice.find("h2").attr("data-ur-toggler-component", "button").addClass("mw-headline-menu"); // Trigger
	// $shopByPriceContent.attr("data-ur-toggler-component", "content");
	// $shopByPriceContent.find("a").addClass("mw-bar-menu");
	// $shopByPrice.attr("data-ur-set", "toggler").addClass("mw-menu-filter");
	
	// Shop by brand toggler
	$shopByBrand.attr("data-ur-set", "toggler").addClass("mw-menu-filter");
	$shopByBrand.find("h2").attr("data-ur-toggler-component", "button").addClass("mw-headline-menu mw-toggle");
	$shopByBrandContent.attr("data-ur-toggler-component", "content");
	$shopByBrandContent.find("a").addClass("mw-bar-menu");
	
	// Elements styling
	let $sortBox = $body.find(".SortBox");
	$sortBox.parent().addClass("mw-menu-filter");
	$sortBox.parent().find("h2").remove();
	$sortBox.addClass("mw-headline-menu");
	$categoryContent.find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");
};