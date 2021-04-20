$(document).ready(function(){
  
  /* *** Action on Scroll activation *** */
  AOS.init();

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

  tippy('#bill-wallace', {
    content: 'Bill "Superfoot" Wallace and Chuck Norris'
  });

  tippy('#miguel-angel-castellini', {
    content: 'Miguel Angel Castellini'
  });
});

tippy('#bowser', { 
  content: 'Random videogame villainy to convey gaming addiction'
});

tippy('#uncle-bob', { 
  content: 'Perhaps code resembles art because, like Uncle Bob says "You write code for your human teammates, not the computer."'
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

const togglers = Array.from(document.querySelectorAll('.toggler'))

togglers.forEach(toggler => {
  toggler.addEventListener('click', () =>{
    console.log('Toggler has been clicked');
    toggleMenu();
  })
});


/* *** Navbar transform after scrolling *** */
window.addEventListener('scroll', () =>{
  const header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 0);
});
