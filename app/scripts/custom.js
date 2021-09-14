document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("goods__nav-btn");
  const goodsNav = document.querySelector(".goods__nav-list");
  const goodsNavItems = document.querySelectorAll(".goods__nav-link");

  clickEventsHendler();

  // Show mobile nav
  function showNav() {
    navBtn.classList.toggle("goods__nav-btn--open");
    goodsNav.classList.toggle("goods__nav-list--show");
  }

  function clickEventsHendler() {
    navBtn.addEventListener("click", () => {
      showNav();
    });

    goodsNavItems.forEach((itemLink) => {
      itemLink.addEventListener("click", () => {
        showNav();
      });
    });
  }

  function swiperInit() {
    const swiper = new Swiper(".swiper", {
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
      },
    });
  }

  swiperInit();
});

// swiper-slide-active
