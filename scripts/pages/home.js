module.exports = function() {
  let $bodyContent = $body.find("#Container");
  let $loader = $bodyContent.find("#AjaxLoading"); // Show when ajax is actually loading
  let $bodyContentOuter = $bodyContent.find("#Outer");
  let $productWrapper = $bodyContentOuter.find("#Wrapper");
  let $productContent = $productWrapper.find(".Content");

  $body.addClass("mw-home");
  $loader.addClass("hidden-block");
  $bodyContentOuter.find("#Header").remove();
  $productWrapper.find(".Left").remove();
  $productWrapper.find(".Right").remove();

  let $productContentTitle = $productContent.find(".Block").find("h2");
  $productContentTitle.find(".FeedLink").remove();
  $productContentTitle.addClass("mw-main-title text-center");

  // $productContent.find(".Block").find(".ProductList").find("li").find(".ProductActionAdd").addClass("mw-btn-go");
  $productContent.find(".Block").find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");

};
