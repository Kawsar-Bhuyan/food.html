
/*
------------------------------------
Header Area JS
------------------------------------
*/
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// }
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}




/*sticky header*/
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}




/*
------------------------------------
Banner Area JS
------------------------------------
*/
const banner = new Swiper(".mybanner", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper_button_next",
    prevEl: ".swiper_button_prev",
  },
});






/*
-------------------------------------------------------------
  Special Products Area  JS
-------------------------------------------------------------.
*/
const Recent_slider = new Swiper(".slide-img", {
  slidesPerView: 5,
  spaceBetween: 20,
  sliderPerGroup: 5,
  loop: true,
  autoplay: true,
  centerSlide: "true",
  fade: "true",
  // grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});




/*
----------------------------------------------
 Products Categories Area JS
----------------------------------------------
*/
let z = document.getElementById('product_categories')
let display = 0;

function categories() {
  if (display == 1) {
    z.style.display = "block";
    display = 0;
  }

  else {
    z.style.display = "none";
    display = "1";
  }
}





/*
----------------------------------------------
 Clients Say Area JS
----------------------------------------------
*/
const swiper = new Swiper(".mytestimonial", {
  slidesPerView: 1,
  grabCursor: true,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




/*
----------------------------------------------
 Single Page Image Area JS
----------------------------------------------
*/

/*----------- iMAGE Change Of Click  ----------*/
let bigImg = document.querySelector('.big_image img');
function showImg(pic) {
  bigImg.src = pic;
}

/*----------- iMAGE Active Of Click  ----------*/
var activeimage = document.getElementById("smallimages");

var btns = activeimage.getElementsByClassName("smallimg");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });

}

// zooming image start
document.querySelectorAll('.big_image').forEach(elem => {
  let x, y, width, height;
  elem.onmouseenter = () => {
    const size = elem.getBoundingClientRect();

    x = size.x;
    y = size.y;

    width = size.width;
    height = size.height;
  };

  elem.onmousemove = e => {
    const horizontal = (e.clientX - x) / width * 100;
    const vertical = (e.clientY - y) / height * 100;

    elem.style.setProperty('--x', horizontal + '%');
    elem.style.setProperty('--y', vertical + '%');
  };
});
// zooming image end





/*-------------- QUANTITY JS ------------*/
const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");


let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});


minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});




/*-------- Checkout Page Area Js ------*/
function toggleElement() {
  var m = document.getElementById("myElement");
  if (m.style.display === "none") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }
}



