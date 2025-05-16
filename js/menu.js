const menubutton = document.querySelector('.burgerbutton');
const menu = document.querySelector('.nav')
console.log(menubutton);

menubutton.addEventListener('click', () => {
    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    
    const menuwidth = (menu.getBoundingClientRect().width) - 2;
    menubutton.style.left = `${menuwidth}px`;
});

