module.exports = function() {
  $body.addClass("mw-home");

  let $bodyContent = $body.find("#Container");
  let $bodyContentOuter = $bodyContent.find("#Outer");
  let $productWrapper = $bodyContentOuter.find("#Wrapper");
  let $productContent = $productWrapper.find(".Content");
  let $productContentTitle = $productContent.find(".Block").find("h2");

  // Remove elements
  fns.removeElements([
    $bodyContentOuter.find("#Header"),
    $productWrapper.find(".Left"),
    $productWrapper.find(".Right"),
    $productContentTitle.find(".FeedLink")
  ]);

  // Style elements
  $productContent.find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");
  $productContentTitle.addClass("mw-main-title text-center");

  // Initialize carousel
  let $productContentInner = $productContent.find(".BlockContent");
  let $productList = $productContentInner.find(".ProductList");
  $productContentInner.attr("data-ur-set", "carousel").attr("data-ur-infinite", "enabled").attr("data-ur-autoscroll", "enabled").attr("data-ur-fill", "2");
  let $productCarouselDots = $(tag("span")).attr("data-ur-carousel-component", "dots");
  let $carouselControlPrev = $(tag("a", { class: "mw-control mw-control-prev" })).attr("data-ur-carousel-component", "button").attr("data-ur-carousel-button-type", "prev");
  let $carouselControlNext = $(tag("a", { class: "mw-control mw-control-next" })).attr("data-ur-carousel-component", "button").attr("data-ur-carousel-button-type", "next");
  $productContentInner.prepend($carouselControlNext);
  $productContentInner.prepend($carouselControlPrev);
  $productContentInner.prepend($productCarouselDots);
  $productList.attr("data-ur-carousel-component", "scroll_container");
  $productList.find("li").attr("data-ur-carousel-component", "item");
};
