module.exports = function() {
    var $modifiedScript = $body.find("script[src*='test.js']");
    $modifiedScript.attr("src", fns.rewriteLink($modifiedScript.attr("src")));
};