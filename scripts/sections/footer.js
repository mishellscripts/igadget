module.exports = function() {
  console.log("Starting scripts/sections/footer.js");

  let $footer = $body.find("#Footer");
  let $footerSprites = $(tag("div", { class: "sprites-moovweb" }));
  let $footerPoweredBy = $(tag("p")).text("powered by:");
  let $mwFooter = $(tag("footer", {
    class: "mw-footer"
  }));

  // Modifications to footer inner div
  let $footerText = $footer.find("p");
  $footerText.find("a").remove();
  let $footerSpan = $footerText.find("span");
  const lines = $footerText.text().split('|')[0].trim().split(/\s\s+/g);
  $footerText.text("All prices are in ");
  let $footerCopyright = $(tag("p")).text(lines[1]);
  $footerSpan.append($footerCopyright);
  $footerText.append($footerSpan);

  // Append to footer
  $body.append($mwFooter);
  $mwFooter.prepend($footer);
  $mwFooter.append($footerPoweredBy);
  $mwFooter.append($footerSprites);

  // This injects a snippet of code used locally with gulp live-reloading
  // Note: assert statements are ignored in production.
  fns.assert(true, function() {
    if (fns.layer("live-reload")) {
      require("/sections/browsersync.js")();
    }
  });
};
