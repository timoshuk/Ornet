"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    }
  });
});