let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
};

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close nav menu on scroll
    menuIcon.classList.remove('fa-xmark');
    navBar.classList.remove('active');
};



// Web Development

let open1 = document.getElementById("open1");
let close1 = document.getElementById("close1");
let description1 = document.getElementById('description1');

open1.addEventListener("click", () => {
    description1.classList.remove("hide");
});

close1.addEventListener("click", function () {
    description1.classList.add("hide");
});

// UI/UX Designing

let open2 = document.getElementById("open2");
let close2 = document.getElementById("close2");
let description2 = document.getElementById('description2');

open2.addEventListener("click", () => {
    description2.classList.remove("hide");
});

close2.addEventListener("click", function () {
    description2.classList.add("hide");
});

// App Development

let open3 = document.getElementById("open3");
let close3 = document.getElementById("close3");
let description3 = document.getElementById('description3');

open3.addEventListener("click", () => {
    description3.classList.remove("hide");
});

close3.addEventListener("click", function () {
    description3.classList.add("hide");
});



// Scroll Reveal

ScrollReveal({
    distance: '50px',
    duration: 1500,
    delay: 0,
}); 

ScrollReveal().reveal('.home-content', { origin: 'bottom' });
ScrollReveal().reveal('.home-img, .service-container , .project-box, .contact, form, .second-heading', { origin: 'top' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

// Typing Effect

let type = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});