// JavaScript Document

$(document).ready(function () {
  Wow.init();
  //mouse move parallax

  let velocity = 0.02;
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".para").forEach((layer) => {
      const speed = layer.dataset.speed;
      const xxx = (e.pageX - window.innerWidth / 2) * speed * velocity;
      const yyy =
        (e.pageY -
          document.documentElement.scrollTop -
          window.innerHeight / 2) *
        speed *
        velocity;

      layer.style.marginLeft = `${xxx}px`;
      layer.style.marginTop = `${yyy}px`;
    });
  }
});

// Wow
let Wow = (function () {
  "use strict";

  // Handle Wow
  let handleWow = function () {
    let wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // default
      mobile: true, // trigger animations on mobile devices (true is default)
      tablet: true, // trigger animations on tablet devices (true is default)
      live: true,
    });
    wow.init();
  };

  return {
    init: function () {
      handleWow(); // initial setup for counter
    },
  };
})();

window.onload = function () {
  //resizing();
};
$(window).on("load", function () {
  //rest of code
  //resizing();
});
