$(document).ready(function(){
  
  /* *** Action on Scroll activation *** */
  AOS.init();
  
  /* *** Navbar transform after scrolling *** */
  window.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
  
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  /* *** Owl Carousel *** */
  const
    responsiveCarousel = 
    {
      0:
      {
        items: 1
      }, 
      768:
      {
        items: 2
      },
      1068:       // Unofficial breakpoint, but 992 still has the cards overlapping each other
      {
        items: 3
      },
    };

  $('.owl-carousel').owlCarousel({
    loop:true,
    dots: false,
    nav: true,
    navText: [$('.owl-nav-prev'), $('.owl-nav-next')],
    responsive: responsiveCarousel
  });



  /* *** Tippy Tooltips *** */

  tippy('#bill_wallace', {
    content: 'Bill "Superfoot" Wallace and Chuck Norris'
  });

  tippy('#miguel_angel_castellini', {
    content: 'Miguel Angel Castellini'
  });
});

/* *** Navbar Hamburger Menu *** */

function toggleMenu()   // Function called in HTML onclick Attribute
{
  const 
    menu_toggle = document.querySelector('.menu_toggle'),
    navigation = document.querySelector('.navigation');

  menu_toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

/* *** Text to change when responsive pictures move *** */

const wallace_pic_location = document.querySelector('.wallace_pic_location');
let width = window.matchMedia("(min-width: 991px)");

function pictureLocation(width) {
  if (width.matches) { // If media query matches
    wallace_pic_location.innerText = '(Right)';
  } else {
    wallace_pic_location.innerText = '(Bottom)';
  }
}

pictureLocation(width)        // Call listener function at run time
window.onresize = (e) => {    // And call it on window resize
  pictureLocation(width);
}




