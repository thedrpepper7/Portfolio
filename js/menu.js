const menubutton = document.querySelector('.burgerbutton');
const menu = document.querySelector('.nav')
const wrap = document.querySelector('.wrap');

menubutton.addEventListener('click', () => {
    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
        menu.style.position = 'fixed';
        menu.style.width = '15vw';
        menu.style.zIndex = '99';
    }
    
    const menuwidth = (menu.getBoundingClientRect().width) - 2;
    menubutton.style.left = `${menuwidth}px`;
});

