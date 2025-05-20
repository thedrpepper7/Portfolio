const animatedtext = {
    url: `img/animatedtext.png`,
    description: `Testing it lois`,
}

const mobilemenu = {
    url: `img/mobilemenu.png`,
    description: `the descrtiptpotns`,
}

const contactmenu = {
    url: `img/contactmenu.png`,
    description: `my contact menu`,
}


//animated text button
const animatedbutton = document.querySelector('#animatedtextsnippet');

//mobile menu button
const mobilemenubutton = document.querySelector('#mobilemenusnippet');

//contact menu button
const contactmenubutton = document.querySelector('#contactmenusnippet');

//where the image will appear
const codeimg = document.querySelector('#codeimage');

//description under 
const description = document.querySelector('#codedescription');

function addImg (which, btn) {
    btn.addEventListener('click', ()=> {
        codeimg.style.backgroundImage = `url(${which.url})`;
        description.innerHTML = which.description;
    })
}

addImg(animatedtext, animatedbutton);
addImg(mobilemenu, mobilemenubutton)
addImg(contactmenu, contactmenubutton);
