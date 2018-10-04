module.exports = function() {
	$body.addClass("mw-product");

	// Add/remove elements based on mobile mockup
	let $bodyContentOuter = $body.find("#Outer");
	let $bodyContent = $bodyContentOuter.find(".BlockContent");
	
	fns.removeElements([
		$bodyContentOuter.find("#Header"),
		$bodyContentOuter.find("#ProductBreadcrumb"),
		$bodyContentOuter.find(".Left"),
		$bodyContentOuter.find(".Right"),
		$bodyContentOuter.find("#ProductByCategory"),
		$bodyContent.find(".AddThisButtonBox"),
		$bodyContent.find("#ImageScrollPrev"),
		$bodyContent.find("#ImageScrollNext")
	]);
	
	// Style elements	
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
