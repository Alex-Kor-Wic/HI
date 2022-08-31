const HeaderHumb = document.querySelector('#hamb');
const NavBarMenu = document.querySelector('#nav-links-header');
const PopupHeader = document.querySelector('.header__poppup');

NavBarMenu.cloneNode(1);

HeaderHumb.addEventListener('click', OpenPopup);

function OpenPopup(e) {
    e.preventDefault();
    PopupHeader.classList.toggle('open');
    RenderLink();

}
function RenderLink() {
    PopupHeader.append(NavBarMenu);
}