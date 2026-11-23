/* ==========================================
SCROLL REVEAL
========================================== */


const revealItems = document.querySelectorAll(

`
.section-heading,
.capability-card,
.project-card,
.process-list div,
.studio-content,
.testimonial-card,
.cta
`

);



const revealObserver = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


}


});


},

{

threshold:0.15

}

);




revealItems.forEach(item=>{


item.classList.add("reveal");


revealObserver.observe(item);


});

/* ==========================================
HERO IMAGE MOVEMENT
========================================== */


const heroImage = document.querySelector(

".hero-visual img"

);



if(heroImage){


window.addEventListener(

"mousemove",

(e)=>{


const x = 

(e.clientX / window.innerWidth - .5) * 20;



const y = 

(e.clientY / window.innerHeight - .5) * 20;



heroImage.style.transform =

`scale(1.05) translate(${x}px,${y}px)`;



}


);


}

/* ==========================================
HEADER EFFECT
========================================== */


const header = document.querySelector(

".header"

);



window.addEventListener(

"scroll",

()=>{


if(window.scrollY > 50){


header.style.background =

"rgba(5,5,5,.85)";


header.style.backdropFilter =

"blur(15px)";


}

else{


header.style.background =

"transparent";


}


}

);

/* ==========================================
PROJECT HOVER
========================================== */


const projects = document.querySelectorAll(

".project-card"

);



projects.forEach(project=>{


project.addEventListener(

"mouseenter",

()=>{


project.style.transform =

"translateY(-10px)";


}

);



project.addEventListener(

"mouseleave",

()=>{


project.style.transform =

"translateY(0)";


}

);


});

/* ==========================================
BUTTON MOVEMENT
========================================== */


const buttons = document.querySelectorAll(

".primary-btn, .header-btn, .cta a"

);



buttons.forEach(button=>{


button.addEventListener(

"mousemove",

(e)=>{


const rect = button.getBoundingClientRect();



const x = e.clientX - rect.left - rect.width/2;


const y = e.clientY - rect.top - rect.height/2;



button.style.transform =

`translate(${x*0.15}px,${y*0.15}px)`;


}



);



button.addEventListener(

"mouseleave",

()=>{


button.style.transform="translate(0,0)";


}


);


});