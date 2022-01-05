const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

/* start animations for sections */
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
})
/* end animations for sections */

/* start scroll up btn */
const scrollUpBtn = document.querySelector('.scrollUpBtn');

const scrollToTop = () => {
    scrollUpBtn.classList.add('hidden');
    window.scrollTo(0,0);
  }

const init= ()=> {
    scrollUpBtn.classList.add('hidden');
}

const upBtnHandeler = ()=> {
if(window.scrollY >= 70) {
    scrollUpBtn.classList.remove('hidden');
}else{
    scrollUpBtn.classList.add('hidden');

  }
}

window.addEventListener('load', init);   
window.addEventListener('scroll', ()=> {
    upBtnHandeler();
  });

/* start nav bar fixed issues */
 const navLinks = document.querySelectorAll('.nav-link')
 const menuToggle = document.getElementById('navbarNavDropdown')
 
 const menu = ()=> {
    const bsCollapse = new bootstrap.Collapse(menuToggle);
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    })
 }

//  window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });
//  menuToggle.addEventListener('click', menu);