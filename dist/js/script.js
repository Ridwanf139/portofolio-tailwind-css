// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed');
    }
}
//Hambuger
const Hambuger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

Hambuger.addEventListener('click', function() {
    Hambuger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});