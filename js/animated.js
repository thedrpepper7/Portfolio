function animateHeader(id){

    const letters = document.querySelectorAll(`#${id} span`);

    letters.forEach((span, index) => {
    span.style.opacity = "0";
    span.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        span.style.opacity = "1";
    }, index * 100); 
    })

};


// Leon Grant
animateHeader("name");
