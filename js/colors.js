const snippets = document.querySelectorAll('.example');
const random = Math.random()
const colorbutton = document.querySelector('.colorchange');

function randomnumrgb() {
   let randomnum = Math.floor(Math.random() * 265);
   return randomnum;
}

function randomcolor() {
    let val1 = randomnumrgb();
    let val2 = randomnumrgb();
    let val3 = randomnumrgb();
    let val4 = randomnumrgb();
    
    const backgroundcolor = `rgba(${val1}, ${val2}, ${val3}, ${val4})`;
    return (backgroundcolor);
}

colorbutton.addEventListener('click', ()=> {
    for (let i of snippets) {
    let coloring = randomcolor();
    i.style.backgroundColor = coloring;
}

});
