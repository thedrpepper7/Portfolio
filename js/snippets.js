//where the image will appear
const codeimg = document.querySelector('#codeimage');

//description under 
const description = document.querySelector('#codedescription');

function addImg(which, btn, lang) {
    btn.addEventListener('click', ()=> {
        if (lang === `html`) {
            codeimg.style.backgroundImage = `url(${which.html[0]})`;
            description.innerHTML = which.html[1];
        } else if (lang === `css`) {
            codeimg.style.backgroundImage = `url(${which.css[0]})`;
            description.innerHTML = which.css[1];
        } else if (lang === `js`) {
            codeimg.style.backgroundImage = `url(${which.javascript[0]})`;
            description.innerHTML = which.javascript[1];
        }
      
    })
}

function find(id){
    let found = document.querySelector(`#${id}`);
    return found;
} 


const animatedtext = {
    html:       [`img/animatedtexthtml.png`, `how i made the html`,],
    javascript: [`img/animatedtextjs.png`,`How i made the js`,],
}


const mobilemenu = {
    css:        [`img/mobilemenucss.png`, `how i made the css`,],
    javascript: [`img/mobilemenujs.png`, `How i made the js`,],
}

const contactmenu = {
    html:       [`img/contactmenuhtml.png`, `how i made the html`,],
    css:        [`img/contactmenucss.png`, `how i made the css`,],
    javascript: [`img/contactmenujs.png`, `How i made the js`,],
}

const codesnippets = {
    html:       [`img/animatedtexthtml.png`, `how i made the html`,],
    css:        [`img/contactme.jpg`, `how i made the css`,],
    javascript: [`img/codesnippets.png`,`How i made the js`,],
}

const colorchange = {
    javascript: [`img/colorchange.png`, `How i made the js`,]
}

const objectupdate = {
    javascript: [`img/objectupdate.png`, `How i made the js`,]
}


const athtml = find('animatedtexthtml');
const atjs = find(`animatedtextjs`);
addImg(animatedtext, athtml, `html`);
addImg(animatedtext, atjs, `js`);

const mmcss = find('mobilemenucss');
const mmjs = find(`mobilemenujs`);
addImg(mobilemenu, mmcss, `css`);
addImg(mobilemenu, mmjs, `js`);

const cmhtml = find(`contactmenuhtml`)
const cmcss = find(`contactmenucss`);
const cmjs = find(`contactmenujs`);
addImg(contactmenu, cmhtml, `html`);
addImg(contactmenu, cmcss, `css`);
addImg(contactmenu, cmjs, `js`);

const cehtml = find(`codingexampleshtml`)
const cecss = find(`codingexamplescss`);
const cejs = find(`codingexamplesjs`);
addImg(codesnippets, cehtml, `html`);
addImg(codesnippets, cecss, `css`);
addImg(codesnippets, cejs, `js`);

const ccjs = find('colorchangejs');
addImg(colorchange, ccjs, `js`);


const oujs = find(`objectupdate`);
addImg(objectupdate, oujs, `js`);
