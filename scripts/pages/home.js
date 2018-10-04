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

  $productContent.find(".Block").find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");

  // Create Uranium carousel
  let $productContentInner = $productContent.find(".BlockContent");
  let $productList = $productContentInner.find(".ProductList");
  $productContentInner.attr("data-ur-set", "carousel").attr("data-ur-infinite", "enabled").attr("data-ur-autoscroll", "enabled").attr("data-ur-fill", "1");
  let $productCarouselDots = $(tag("span")).attr("data-ur-carousel-component", "dots");
  let $carouselControlPrev = $(tag("a", { class: "mw-control mw-control-prev" })).attr("data-ur-carousel-component", "button").attr("data-ur-carousel-button-type", "prev");
  let $carouselControlNext = $(tag("a", { class: "mw-control mw-control-next" })).attr("data-ur-carousel-component", "button").attr("data-ur-carousel-button-type", "next");
  $productContentInner.prepend($carouselControlNext);
  $productContentInner.prepend($carouselControlPrev);
  $productContentInner.prepend($productCarouselDots);
  $productList.attr("data-ur-carousel-component", "scroll_container");
  $productList.find("li").attr("data-ur-carousel-component", "item");
};
