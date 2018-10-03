module.exports = function() {
  console.log("Starting scripts/sections/header.js");

  let $mwHeader = $(tag("header", { class: "mw-header" }));
  let $mwHeaderTop = $(tag("div", { class: "mw-header-top" })); // Tag builds new element
  let $mwHeaderBottom = $(tag("div", { class: "mw-header-bottom" })); // Wrap new element with $() to access form Cheerio object w/ access to methods
  let $mwMenuBtn = $(tag("div", {class: "mw-menu-btn sprites-menu"}));
  let $menuIconList = $body.find("#TopMenu ul"); // Create variables expected to be used more than once
  let $menuIcons = $menuIconList.find("li");
  let $searchForm = $body.find("#SearchForm form");
  let $menu = $body.find("#Menu");

  // Initialize header
  $body.prepend($mwHeader);
  $mwHeader.append($mwHeaderTop);
  $mwHeader.append($mwHeaderBottom);
  $mwHeaderTop.append(fns.addClassToElement("#Logo", "mw-logo"));
  $mwHeaderTop.append($menuIconList);
  $mwHeaderBottom.append($mwMenuBtn);
  $mwHeaderBottom.append($searchForm);

  // Remove unwanted elements from the menu icons list
  $menuIcons.not(":contains(Account), :contains(Cart)").remove();
  $menuIcons.addClass("mw-header-icon-wrapper");
  $menuIcons.filter(":contains(Account)").find("a").addClass("mw-header-icon sprites-user").text("");
  $menuIcons.filter(":contains(Cart)").find("a").addClass("mw-header-icon sprites-cart").text("");

  // Modify search form - Assign placeholder to search input
  $searchForm.find("input[type=text]").attr("placeholder", "Search...");
  $searchForm.find("input[type=image]").wrap("div", {class: "mw-search-btn sprites-search"});

  // Move updated menu into header element
  $mwHeader.append($menu);
  $menu.append($body.find("#SideCategoryList"));
  $menu.find("a").addClass("mw-bar-menu");

  // Style menu
  $menu.addClass("mw-menu-filter");
  $menu.addClass("hidden");
  let $categoryList = $menu.find("#SideCategoryList");
  $categoryList.attr("data-ur-set", "toggler");
  let $categoryListContent = $categoryList.find(".BlockContent");
  $categoryListContent.attr("data-ur-toggler-component", "content");
  let $categoryListHeader = $categoryList.find("h2");
  $categoryListHeader.attr("data-ur-toggler-component", "button").addClass("mw-headline-menu mw-toggle");
};
