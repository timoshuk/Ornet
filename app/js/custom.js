"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navBtn = document.getElementById("goods__nav-btn");
  var goodsNav = document.querySelector(".goods__nav-list");
  var goodsNavItems = document.querySelectorAll(".goods__nav-link");
  clickEventsHendler(); // Show mobile nav

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
        el: ".swiper-pagination"
      }
    });
  }

  swiperInit();
}); // swiper-slide-active