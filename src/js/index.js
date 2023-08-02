window.addEventListener("scroll", function () {
    const header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});


const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});