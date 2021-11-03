// Abre e fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

//links do menu
const links = document.querySelectorAll('nav ul li a');

for(const element of toggle ){
  element.addEventListener('click', function(){
    nav.classList.toggle('show');
  });
}

for(const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  });
}

// alterar o header da página

function changeHeaderWhenScroll(){
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll')
  
  }

}

const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
 pagination: {
   el: '.swiper-pagination'
 },
 mousewheel: true,
 keyboard: true,
 breakpoints: {
   767: {
     slidesPerView: 2,
     setWrapperSize: true
   }
 }
});

// back to top

function backToTop(){
  const backToTopButton = document.querySelector('.back-to-top'); 
  if( window.scrollY >= 560){
    backToTopButton.classList.add('show');
  }else{
    backToTopButton.classList.remove('show');
  }

}




/* menu ativo conforme a página */

const sections = document.querySelectorAll('main section[id]');
function ativateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for(const section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd) {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.add('active');
    }else {
      document.querySelector(`nav ul li a[href*=${sectionId}]`).classList.remove('active');
    }
  }

}

window.addEventListener('scroll', function(){
  changeHeaderWhenScroll();
  backToTop();
  ativateMenuAtCurrentSection();
});
