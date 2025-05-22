//selecting all boxes
const snippets = document.querySelectorAll('.example');
//color reset button
const resetbtn = document.querySelector('#colorreset');
//change colors
const colorbutton = document.querySelector('#changecolor');

function randomnumrgb() {
   let randomnum = Math.floor(Math.random() * 256);
   return randomnum;
}

function randomcolor() {
    let val1 = randomnumrgb();
    let val2 = randomnumrgb();
    let val3 = randomnumrgb();
    let val4 = 0.9;
    
    const backgroundcolor = `rgba(${val1}, ${val2}, ${val3}, ${val4})`;
    return (backgroundcolor);
}

colorbutton.addEventListener('click', ()=> {
    for (let i of snippets) {
    let coloring = randomcolor();
    i.style.backgroundColor = coloring;
}

});

resetbtn.addEventListener('click', () => {
    for (let i of snippets) {
        i.style.backgroundColor = '#f0f0f0';
    }
});
