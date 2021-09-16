"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var navBtn = document.getElementById("goods__nav-btn");
  var goodsNav = document.querySelector(".goods__nav-list");
  var goodsNavItems = document.querySelectorAll(".goods__nav-link");
  var popUp = document.getElementById("pop-up");
  var popUpForm = popUp.querySelector(".pop-up__form");
  var popUpBtn = document.querySelector(".btn--pop-up");
  clickEventsHendler();
  swiperInit();
  popUpHendler(popUp, popUpForm, popUpBtn); // Show mobile nav

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

  window.addEventListener("resize", function () {
    navBtn.classList.remove("goods__nav-btn--open");
    goodsNav.classList.remove("goods__nav-list--show");
  });

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
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function renderBullet(index, className) {
          index++;
          return '<img class="' + className + '" src="../images/window_' + index + '.png"  />';
        }
      }
    });
  }
});

function popUpHendler(popUp, popUpForm, btn) {
  popUp.addEventListener("click", function () {
    popUp.classList.toggle("pop-up--open");
  });
  btn.addEventListener("click", function () {
    popUp.classList.toggle("pop-up--open");
  });
  popUpForm.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}