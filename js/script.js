/* ================= toggle icon navbar ==================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ================= scroll reveal assets ==================*/



/* ===== html code =====*/
<script src="https://unpkg.com/scrollreveal"></script>


/* ===== script =====*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'})


/* ================= Typed js assets ==================*/


/* ===== html code =====*/
<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>


/* ===== script =====*/
const typed = new Typed('.multiple-text', {
    strings: ['ICT Student', 'Video Editor', 'Graphic Designer', ],
    typeSpeed: 100,
    backSpeed: 100,
    delaySpeed: 1000,
    loop: true
})





