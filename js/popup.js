//! простой вариант 
const LinkClose = document.querySelector('.close-popup'),
    PopupWindow = document.querySelector('.popup'),
    linkOpen = document.querySelector('.open-popup');

if (linkOpen) {
    linkOpen.addEventListener('click', OpenPopup);
}
if (LinkClose) {
    LinkClose.addEventListener('click', ClosePopup);

}

function OpenPopup(e) {
    e.preventDefault();
    document.body.style.overflowY = "hidden";
    PopupWindow.classList.add('open');

}
function ClosePopup(e) {
    e.preventDefault();
    document.body.style.overflowY = "";
    PopupWindow.classList.remove('open');

}



