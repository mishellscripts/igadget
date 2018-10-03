mw.igadget.base = function() {

  function initialize() {
    let $mwHeader = $(".mw-header");
    let $menu = $mwHeader.find("#Menu");

    $mwHeader.find(".mw-menu-btn").on("click", function() {
        $menu.toggle();
    });
  }

  return {
    init: initialize,
    name: "mw-global"
  };
}();
