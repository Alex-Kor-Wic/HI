const PrevBtn =document.querySelector('#prevBtn');
const NextBtn =document.querySelector('#nextBtn');

const Slides = document.querySelectorAll('.slide');

let SlideIndex = 0;

PrevBtn.addEventListener('click', PrevSide);
NextBtn.addEventListener('click', NextSide);


function activeSlide(n){
    for (let index = 0; index < Slides.length; index++) {
        const el = Slides[index];
        el.classList.remove('active');
        Slides[n].classList.add('active')
    }
}

function PrevSide(){
    if(SlideIndex == Slides.length - 1){
        SlideIndex = 0;
        activeSlide(SlideIndex);
    } else {
        SlideIndex++;
        activeSlide(SlideIndex);
    }
}

function NextSide(){
    if(SlideIndex == 0){
        SlideIndex =Slides.length - 1;
        activeSlide(SlideIndex);
    } else {
        SlideIndex--;
        activeSlide(SlideIndex);
    }
}

setInterval(()=>{
    NextSide()
}, 5000)