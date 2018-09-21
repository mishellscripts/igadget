mw.igadget.base = function() {

  function initialize() {
    var $mwHeader = $(".mw-header");
    $mwHeader.find(".mw-menu-btn").on("click", function() {
        $mwHeader.find("#Menu").toggle();
    });
    $(".modalContainer").DOMNodeAppear(function() {
      $(this).css("top", window.pageYOffset + 15);
    });
  }

  return {
    init: initialize,
    name: "mw-global"
  };
}();
