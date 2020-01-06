const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.dot')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let slideIndex = 0

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

changeSlide(slideIndex)

function changeSlide(n) {
    n > slides.length - 1? slideIndex = 0 : 1
    n < 0 ? slideIndex = slides.length - 1 : 1
    slides.forEach(slide => {
        slide.style.opacity = 0
    })
    slides[slideIndex].style.opacity = 1
    revertDot()
    dots[slideIndex].classList.add('active')
    dots[slideIndex].style.opacity = 1
}


function nextSlide() {
    slideIndex += 1
    changeSlide(slideIndex)
}

function prevSlide() {
    slideIndex -= 1
    changeSlide(slideIndex)
}

function revertDot(){
    dots.forEach(dot => {
        dot.classList.remove('active')
        dot.style.opacity = 0.6
    })
}

(function changeAutomatically(){
    slideIndex++
    changeSlide(slideIndex)
    setTimeout(changeAutomatically, 5000) 
})()