const menuEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');



menuEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
    console.log('Click');
    deskMenu.classList.toggle('inactive');
}
