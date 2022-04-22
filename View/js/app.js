const btnMobile = document.getElementById('btn-mobile');

function toogleMenu() {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toogleMenu);
btnMobile.addEventListener('touchstart', toogleMenu);


const btnMenuDrop = document.getElementById('seta-drop');

function toogleMenuDrop() {
    if (event.type === 'touchstart') event.preventDefault();
    const menuDrop = document.getElementById('nav-submenu');
    menuDrop.classList.toggle('active');
}

btnMenuDrop.addEventListener('click', toogleMenuDrop);
btnMenuDrop.addEventListener('touchstart', toogleMenuDrop);