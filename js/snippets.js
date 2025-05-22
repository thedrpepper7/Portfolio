//where the image will appear
const codeimg = document.querySelector('#codeimage');

//the panel of buttons 
const codeselect = document.querySelector('#codeselect');

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
        codeimg.style.paddingBottom = '0px';
        description.style.height = 'auto';
      
    })
}

function find(id){
    let found = document.querySelector(`#${id}`);
    return found;
} 


const animatedtext = {
    html:       [`img/animatedtexthtml.png`, 
                `The HTML was quite simple, adding <span> tags to each letter allowing seperate animation 
                resulting in looking like a wave as each letter fades in.`,],
    javascript: [`img/animatedtextjs.png`,
                `The JavaScript, also quite simple having a forEach loop go through each <span> tag and setting
                the opacity back to 1 with a delay based on the index of the current span tag.`,],
}


const mobilemenu = {
    css:        [`img/mobilemenucss.png`, 
                `The CSS to this mobile "burger" menu is first set to display:none and only becomes visible
                (display:block) when the screen is no larger than 768px, when the display is most likely phone/tablet sized,
                also setting the content and images to span across the whole screen replacing the missing nav
                ensuring a less cluttered screen. Other styling features simply putting it top left in a fixed position using
                and 'icomoon' based symbol.`,],
    javascript: [`img/mobilemenujs.png`, 
                `The JavaScript for the mobile menu button, simply selecting the button (that only appears when the screen is small)
                and selecting the nav (which at this point should be display:none). The button has an event listener watching for clicks
                and upon clicking it, the button checks if the nav has "block" display or "none" display, flipping it from either condition
                it's currently on - ensuring the menu can be toggled instead of a one way press.`,],
}

const contactmenu = {
    html:       [`img/contactmenuhtml.png`, 
                `With the HTML, setting the input tags within "contactgrid" to make into grid display with three individual "blocks" in them
                also taking on the grid display. The placeholders will later be swapped via JavaScript depending on what is entered/not entered.
                Lastly, a sumbit button which will be the decider on what to do to each input box.`,],
    css:        [`img/contactmenucss.png`, 
                `Previously mentioned in the HTML description, this is setting three grids inside of the main grid to order things nicely. Media
                queries adjusting the amount of template-colums to ensure no overflow by stacking them on top of eachother if needed.`,],
    javascript: [`img/contactmenujs.png`, 
                `With the JavaScript, everything is checked once the submit button is clicked. The contents get checked and if there isnt a 
                value inside of the required fields, the placeholder is changed to display that and the boxes are highlighted red to indicate 
                that to the user. Another interesting check is the Regex check making sure that even if an email value is given, it has to be 
                a valid email address, again, indicating with a red outline and placeholder text.`,],
}

const codesnippets = {
    html:       [`img/codingexampleshtml.png`, 
                `For the HTML here, I have the three grid cells, the one containing the panel of buttons and two empty cells which will fill with the JavaScript, 
                each of them having an id which will be selected for JavaScript.`,],
    javascript: [`img/codingexamplesjs.png`,
                `With the JavaScript, at the start I find the areas I will be updating with the content, an empty cell below for the description (this) 
                and the cell on the right for the screenshot of the code. Then instead of writing document.querySelector for everything, I write a small 
                function to find it based on the value (the elements id) passed. Next, I have the addImg function which has three values passed to it, the object
                to choose from, the location of where to put the image or description and the last value, is the language the snippet is based on, running through
                the object picking the right image relative to the button (HTML, CSS, JS) pressed.`,],
}

const colorchange = {
    javascript: [`img/colorchange.png`, 
                `With the colorchanging JavaScript, I select all the p element to later edit their background color, the reset button specifically to reset the coloring
                of all the p elements and lastly I watch the color change button to run the function. After that, I have the random number multiplied by 256 and .floor function
                applied to it to ensure a range of 1-255. In the randomcolor function, I have the randomnumber ran on three different values then just have the last value set to
                0.9 for opacity and then returning the string rgba containing the three randomly generated numbers. Lastly the for of loop goes through every p element and assigns
                the style.backgroundColor randomly.`,]
}

const objectupdate = {
    javascript: [`img/objectupdate.png`, 
                `With the object updater, I made a template object with some information and an empty list assigned to "pets", through if statements on a prompt
                I am able to make a while loop which asks the user to enter a pet name, ending the loop once "no" is entered. The inputted values are then placed inside of the
                list. At the end you will notice a console.log which, depending on the number of values in the list, will output a different thing. For example one pet 
                is simply "I have a pet called", two pets is "I have two pets x and x" and finally, anything about 2 is turned into a list with the last item being taken out
                with pop and stored as a variable to ensure that the list ends with "and".`,]
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
addImg(codesnippets, cejs, `js`);

const ccjs = find('colorchangejs');
addImg(colorchange, ccjs, `js`);


const oujs = find(`objectupdate`);
addImg(objectupdate, oujs, `js`);
