/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 50}); 
sr.reveal('.home__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 50}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 100}); 
sr.reveal('.about__text',{delay: 100}); 

/*SCROLL blog*/
sr.reveal('.blog__subtitle',{}); 
sr.reveal('.blog__text',{}); 
sr.reveal('.blog__data',{interval: 50}); 
sr.reveal('.blog__img',{delay: 100});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 50}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 50}); 



