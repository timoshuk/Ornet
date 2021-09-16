document.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.getElementById("goods__nav-btn");
  const goodsNav = document.querySelector(".goods__nav-list");
  const goodsNavItems = document.querySelectorAll(".goods__nav-link");
  const popUp = document.getElementById("pop-up");
  const popUpForm = popUp.querySelector(".pop-up__form");
  const popUpBtn = document.querySelector(".btn--pop-up");

  clickEventsHendler();
  swiperInit();
  popUpHendler(popUp, popUpForm, popUpBtn);

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

  window.addEventListener("resize", function () {
    navBtn.classList.remove("goods__nav-btn--open");
    goodsNav.classList.remove("goods__nav-list--show");
  });

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

function popUpHendler(popUp, popUpForm, btn) {
  popUp.addEventListener("click", () => {
    popUp.classList.toggle("pop-up--open");
  });
  btn.addEventListener("click", () => {
    popUp.classList.toggle("pop-up--open");
  });

  popUpForm.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
