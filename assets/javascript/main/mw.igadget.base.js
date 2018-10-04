mw.igadget.base = function() {

  function initialize() {
    let $mwHeader = $(".mw-header");
    let $menu = $mwHeader.find("#Menu");

    $mwHeader.find(".mw-menu-btn").on("click", function() {
        $menu.toggle();
    });
    
    $(".mw-home").find(".QuickViewBtn").remove();
    
    $(".modalContainer").DOMNodeAppear(function() {
      $(this).css("top", window.pageYOffset + 15);
      $(this).find(".ProductActionAdd a").addClass("mw-btn mw-btn-go");      
      $("h2").addClass("mw-main-title");
      $("h3").addClass("mw-section-title");
      $(this).find("#QuickViewShareLabel").remove();
    });
    
    $("body").on("click", function(e) {
        if ($(e.target).closest('#ModalContainer').length == 0) {
            $("#ModalContainer").addClass("hidden");
            $("#ModalOverlay").addClass("hidden");
        } else {
            $("#ModalContainer").removeClass("hidden");
            $("#ModalOverlay").removeClass("hidden");
        }
    });
  }

  return {
    init: initialize,
    name: "mw-global"
  };
}();
