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
  $mwHeaderTop.append($body.find("#Logo"));
  $mwHeaderTop.append($menuIconList);
  $mwHeaderBottom.append($mwMenuBtn);
  $mwHeaderBottom.append($searchForm);

  // Remove unwanted elements from the menu icons list
  $menuIcons.not(":contains(Account), :contains(Cart)").remove();

  // Modify search form - Assign placeholder to search input
  $searchForm.find("input[type=text]").attr("placeholder", "Search...");
  $searchForm.find("input[type=image]").wrap("div", {class: "mw-search-btn sprites-search"});

  // Move updated menu into header element
  $mwHeader.append($menu);
  $menu.append($body.find("#SideCategoryList"));
  $menu.find("li").addClass("mw-bar-menu");
};
