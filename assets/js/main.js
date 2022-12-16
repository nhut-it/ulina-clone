(function () {
  // menu toggle
  let iconShare = document.querySelector(".icon-share");
  let listSocial = document.querySelector(".social-share");

  iconShare.addEventListener("click", (e) => {
    e.preventDefault()
    listSocial.classList.toggle("active");
  });

  // sellects language
  let selects = document.querySelectorAll(".select");
  let iconArrowDown = document.querySelector(".icon-arrowDown");
  let listSL = document.querySelectorAll(".list-select");
  let countries = document.querySelectorAll(".list-select .country");
  let language = document.querySelector(".language");
  let currencys = document.querySelectorAll(".currency");
  let unit = document.querySelector(".unit");

  countries.forEach((country) => {
    country.addEventListener("click", (e) => {
      e.stopPropagation();
      language.textContent = e.target.textContent;

      countries.forEach((lq) => {
        lq.classList.remove("active");
      });

      country.classList.add("active");

      selects.forEach((sl) => {
        sl.classList.remove("active");
      });
    });
  });

  // currency
  currencys.forEach((currency) => {
    currency.addEventListener("click", (e) => {
      e.stopPropagation();

      unit.textContent = e.target.textContent;

      currencys.forEach((cr) => {
        cr.classList.remove("active");
      });

      currency.classList.add("active");

      selects.forEach((sl) => {
        sl.classList.remove("active");
      });
    });
  });

  selects.forEach((sl) => {
    sl.addEventListener("click", (e) => {
      e.stopPropagation();
      selects.forEach((item) => {
        item.classList.remove("active");
      });
      sl.classList.add("active");
    });
  });

  document.querySelector("body").addEventListener("click", () => {
    selects.forEach((sl) => {
      sl.classList.remove("active");
    });
  });

  // dorpdown menu
  const dropDown = document.querySelectorAll(".dropdown");
  const subDropdown = document.querySelectorAll(".sub-dropdown");

  dropDown.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      item.classList.toggle("active");
    });
  });
  subDropdown.forEach((sub) => {
    sub.addEventListener("click", (e) => {
      e.preventDefault();
      sub.classList.toggle("active");
    });
  });
  // collapse menu

  const btnMenu = document.querySelector(".menu-toggle");
  const mainMenu = document.querySelector(".mainMenu");
  btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    mainMenu.classList.toggle("show");
  });

  // popup search

  const popupSearch = document.querySelector(".popup-search-header");
  const popupClose = document.querySelector(".popup-close");
  const btnSearch = document.querySelector(".search");
  const overlayPopup = document.querySelector(".overlay-popup");
  btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("btn search");
    popupSearch.classList.add("show");
  });
  const closePopupSearch = () => {
    popupSearch.classList.remove("show");
  };
  popupClose.onclick = () => {
    closePopupSearch();
  };
  overlayPopup.onclick = () => {
    closePopupSearch();
  };

  // slider

  $(".slider-carousel").owlCarousel({
    loop: false,
    margin: 10,
    autoplay: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // arrival
  $(".arrival-carousel").owlCarousel({
    // loop:true,
    margin: 24,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  // category
  $(".category-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  // feadback
  $(".feadback-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  // follow
  $(".follow-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
  // brand
  $(".brand-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  const header = document.querySelector(".headerFixed");
  // fixed Header
  window.onscroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".headerFixed").classList.add("show");
    } else {
      document.querySelector(".headerFixed").classList.remove("show");
    }
  };

  // countDown
  // Set the date we're counting down to
  var countDownDate = new Date("December 6, 2022 13:34:30").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.querySelector(".featured-countDown").innerHTML =
    //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.querySelector(".day .number").innerHTML = days;
    document.querySelector(".hours .number").innerHTML = hours;
    document.querySelector(".minute .number").innerHTML = minutes;
    document.querySelector(".second .number").innerHTML = seconds;
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".featured-countDown").innerHTML = "EXPIRED";
    }
  }, 1000);

  //   tab popular
  const tabLink = document.querySelectorAll(".popular .nav-link");
  const tabPane = document.querySelectorAll(".tab-content .tab-item");

  tabLink.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      tabPane.forEach((item) => {
        item.classList.remove("active");
        // item.classList.remove('fade')
      });
      tabLink.forEach((item) => {
        item.classList.remove("active");
      });

      tabLink[index].classList.add("active");
      tabPane[index].classList.add("active");
      //    tabPane[index].classList.add('fade')
    });
  });

  // back to top

  window.onscroll = () => {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      document.querySelector(".back-to-top").classList.add("active");
      document
        .getElementById("header")
        .classList.add("fixedTop", "animate__fadeInDown");
    } else {
      document
        .getElementById("header")
        .classList.remove("fixedTop", "animate__fadeInDown");
      // document.getElementById('header').classList.add('animate__fadeInDown')
      document.querySelector(".back-to-top").classList.remove("active");
    }
  };
  //  document.querySelector('back-to-top').addEventListener('click',()=>{
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  //  })

  // popup product-detail

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    loop:true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
})();
