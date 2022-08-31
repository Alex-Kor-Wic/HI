const skillsBanner = document.querySelectorAll('.skills__item');
const CloseBtnPopap = document.querySelectorAll('.popup-skills__close-popup');


if (skillsBanner.length > 0) {
    for (let index = 0; index < skillsBanner.length; index++) {
        const el = skillsBanner[index];
        el.addEventListener('click', function (e) {
            e.preventDefault();
            const namePopap = el.getAttribute('href').replace('#', '');
            const currentPopap = document.getElementById(namePopap);
            openPopup(currentPopap);

        })

    }

}
if(CloseBtnPopap.length > 0){
    for (let index = 0; index < CloseBtnPopap.length; index++) {
        const el = CloseBtnPopap[index];
        el.addEventListener('click', function(e){
            e.preventDefault();
            closePopup(el.closest('.popup-skills'))
        })
    }
}

function openPopup(popup) {
    document.body.style.overflowY = "hidden";
    popup.classList.add('open');
}

function closePopup(popup){
    popup.classList.remove('open');
    document.body.style.overflowY = "visible";

}