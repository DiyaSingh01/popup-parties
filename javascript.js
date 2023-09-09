const header = document.querySelector('header');

const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', this.window.scrollY > 0) 
})


function toggleMenu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}