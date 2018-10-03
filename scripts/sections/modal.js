module.exports = function() {
    let $modalContainer = $body.find("#ModalContainer");
    $modalContainer.find(".ModalTitle").addClass("mw-section-title text-center");
    // $(".modalContainer").DOMNodeAppear(function() {
    //   $(this).css("top", window.pageYOffset + 15);
    // });
    $body.onclick = function() {
        if (e.target.id !== 'ModalContainer') {
            $("#modalContainer").addClass("hidden");
            $("#ModalOverlay").addClass("hidden");
        }
    };
};