"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navBtn = document.getElementById("goods__nav-btn");
  var goodsNav = document.querySelector(".goods__nav-list");
  var goodsNavItems = document.querySelectorAll(".goods__nav-link");
  clickEventsHendler();
  swiperInit(); // Show mobile nav

  function showNav() {
    navBtn.classList.toggle("goods__nav-btn--open");
    goodsNav.classList.toggle("goods__nav-list--show");
  }

  function clickEventsHendler() {
    navBtn.addEventListener("click", function () {
      showNav();
    });
    goodsNavItems.forEach(function (itemLink) {
      itemLink.addEventListener("click", function () {
        showNav();
      });
    });
  }

  function swiperInit() {
    // var menu = ["Slide 1", "Slide 2", "Slide 3"];
    var swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "vertical",
      loop: true,
      slidesPerView: 1,
      spaceBetween: 200,
      centeredSlidesBounds: true,
      effect: "slide",
      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          index++;
          return '<img class="' + className + '" src="../images/window_' + index + '.png"  />';
        }
      }
    });
  }
}); // swiper-slide-active