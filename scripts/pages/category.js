module.exports = function() {
	let $loader = $body.find("#AjaxLoading");
	let $bodyContentOuter = $body.find("#Outer");
	// let $shopByPrice = $body.find("#SideCategoryShopByPrice"); // Wrapper
	// let $shopByPriceContent = $shopByPrice.find(".BlockContent"); // Content
	let $shopByBrand = $body.find("#SideShopByBrand");
	let $shopByBrandContent = $shopByBrand.find(".BlockContent"); // Content
	let $categoryContent = $body.find("#CategoryContent");
	
	// Add/remove elements based on mobile mockup
	$body.addClass("mw-category");
	$loader.addClass("hidden-block");
	let $pageTitle = $(tag("h2", { class: "mw-main-title" }, "Misc"));
	$bodyContentOuter.find("#Header").html('').append($pageTitle);
	$bodyContentOuter.find("#CategoryBreadcrumb").remove();
	$bodyContentOuter.find(".Right").remove();
	$categoryContent.find(".ProductCompareButton").remove();
	$categoryContent.find(".CompareButton").remove();

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
	
	// Sort box styling
	let $sortBox = $body.find(".SortBox");
	$sortBox.parent().addClass("mw-menu-filter");
	$sortBox.parent().find("h2").remove();
	$sortBox.addClass("mw-headline-menu");
	
	// Content styling
	$categoryContent.find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");
	// let $productList = $categoryContent.find(".ProductList");
	// let $productListItem = $productList.find("li");
	// $productListItem.each(function(i, item) {
	// 	let $item = $("item");
	// 	let $productDescriptionWrapper = $(tag("div", { class: "mw-desc-wrapper" }));
	// 	$productDescriptionWrapper.append($item.contents());
	// 	$(item).append($productDescriptionWrapper);
	// });
};