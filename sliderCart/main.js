let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prv-btn');
let nextBtn = document.querySelector('.next-btn');

let currentSlide = 0 ;

let slideCount = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide < slideCount - 1 ? currentSlide++ : currentSlide = 0;
    updateSlider();
}

function prevSlide() {
    currentSlide > 0 ? currentSlide-- : currentSlide = slideCount - 1;
    updateSlider();
}

nextBtn.addEventListener('click', throttle(nextSlide,1000));
prevBtn.addEventListener('click', throttle(prevSlide,1000));

function throttle(func,limit) {
    let  inThrottle;

    return function executeFunction (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true

            setTimeout(() => {
                inThrottle = false;
            },limit)
        }
    }
}


