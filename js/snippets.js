const animatedtext = {
    url: `img/animatedtext.png`,
    description: `How I animated the header`,
}

const mobilemenu = {
    url: `img/mobilemenu.png`,
    description: `The burger menu that appears on mobile`,
}

const contactmenu = {
    url: `img/contactmenu.png`,
    description: `my contact menu`,
}

const codesnippets = {
    url: `img/codesnippets.png`,
    description: `This whole page`,
}

const colorchangesnippet = {
    url: `img/colorchange.png`,
    description: `How the colors change`,
}

const objectupdate = {
    url: `img/objectupdate.png`,
    description: `Object updating`,
}

//where the image will appear
const codeimg = document.querySelector('#codeimage');

//description under 
const description = document.querySelector('#codedescription');

function find(id){
    found = document.querySelector(`#${id}`);
    return found;
} 


function addImg(which, btn) {
    btn.addEventListener('click', ()=> {
        codeimg.style.backgroundImage = `url(${which.url})`;
        description.innerHTML = which.description;
    })
}

const ab = find(`animatedtextsnippet`);
addImg(animatedtext, ab);

const mm = find(`mobilemenusnippet`);
addImg(mobilemenu, mm);

const cm = find(`contactmenusnippet`);
addImg(contactmenu, cm);

const cs = find(`codingexamplessnippet`);
addImg(codesnippets, cs);

const ccs = find(`colorchangesnippet`);
addImg(colorchangesnippet, ccs);

const ou = find(`objectupdatesnippet`);
addImg(objectupdate, ou);
