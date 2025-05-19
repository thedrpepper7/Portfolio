// const leongrant = document.querySelector("#name").textContent;

// for (let i=0; i < leongrant.length; i++){
//    (leongrant[i]).fadeIn(2000);
// }

function animateHeader(id){

    const letters = document.querySelectorAll(`#${id} span`);

    letters.forEach((span, index) => {
    span.style.opacity = "0";
    span.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        span.style.opacity = "1";
    }, index * 100); // 100ms delay between each
    })

};


// Leon Grant
animateHeader("name");
// Contact Me