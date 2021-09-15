document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("goods__nav-btn");
  const goodsNav = document.querySelector(".goods__nav-list");
  const goodsNavItems = document.querySelectorAll(".goods__nav-link");

  clickEventsHendler();
  swiperInit();

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
    // var menu = ["Slide 1", "Slide 2", "Slide 3"];

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
        clickable: true,
        renderBullet: function (index, className) {
          index++;
          return (
            '<img class="' +
            className +
            '" src="../images/window_' +
            index +
            '.png"  />'
          );
        },
      },
    });
  }
});

// swiper-slide-active
