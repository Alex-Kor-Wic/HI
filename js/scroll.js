const ElementsToShow = document.querySelectorAll('._anim-items');

if (ElementsToShow.length > 0) {
    window.addEventListener('scroll', AnimScroll)
    function AnimScroll() {
        for (let index = 0; index < ElementsToShow.length; index++) {
            const ElementToShow = ElementsToShow[index],
                ElementToShowHeigth = ElementToShow.offsetHeight,
                ElementToShowOffset = offset(ElementToShow).top,
                animStart = 5;

            let animPoint = window.innerHeight - ElementToShowHeigth / animStart;
            if (ElementToShowHeigth > window.innerHeight) {
                let animPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > ElementToShowOffset - animPoint) && pageYOffset < (ElementToShowOffset + ElementToShowHeigth)) {
                ElementToShow.classList.add('_active');
            }
            else {
                ElementToShow.classList.remove('_active');

            }
        }
    }
    function offset(el) { //!позиция объекта
        const react = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: react.top + scrollTop }
    }
}

