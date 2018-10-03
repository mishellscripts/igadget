module.exports = function() {
	$body.addClass("mw-product");

	// Add/remove elements based on mobile mockup
	$body.find("#AjaxLoading").addClass("hidden-block");
	let $bodyContentOuter = $body.find("#Outer");
	$bodyContentOuter.find("#Header").remove();
	$bodyContentOuter.find("#ProductBreadcrumb").remove();
	$bodyContentOuter.find(".Left").remove();
	$bodyContentOuter.find(".Right").remove();
	$bodyContentOuter.find("#ProductByCategory").remove();

	let $bodyContent = $bodyContentOuter.find(".BlockContent");
	$bodyContent.find(".AddThisButtonBox").remove();
	$bodyContent.find("h2").addClass("mw-main-title");
	$bodyContentOuter.find("h3").addClass("mw-section-title");	
	
	let $productReviews = $bodyContentOuter.find("#ProductReviews");
	let $reviewBtn = $productReviews.find("a");
	let $reviewDivider = $productReviews.find(".ProductSectionSeparator");
	$productReviews.append($reviewBtn);
	$productReviews.append($reviewDivider);
	
	let $similarProducts = $body.find("#SimilarProductsByCustomerViews");
	$similarProducts.find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");
};
