const filmsWrapper = document.querySelector('.films'),
    buttonPrev = filmsWrapper.querySelector('.prev'),
    buttonNext = filmsWrapper.querySelector('.next'),
    filmsSlides = filmsWrapper.querySelectorAll('.slider > .slide');

let currentSlideIndex = 0;

buttonNext.addEventListener('click', function nextSlide() {
    filmsSlides[currentSlideIndex].classList.remove('active')
    if (filmsSlides.length > currentSlideIndex + 1) {
        currentSlideIndex ++;
    }else{
        currentSlideIndex = 0
    }
    filmsSlides[currentSlideIndex].classList.add('active')

})

buttonPrev.addEventListener('click', function prevSlide() {
    filmsSlides[currentSlideIndex].classList.remove('active')
    if (currentSlideIndex) {
        currentSlideIndex--;   
    }
    else{
        currentSlideIndex = filmsSlides.length - 1
    }
    filmsSlides[currentSlideIndex].classList.add('active')
})