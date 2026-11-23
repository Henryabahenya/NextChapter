/*==================================================
NEXTCHAPTER
script.js
==================================================*/

/*==================================================
MOBILE DROPDOWN MENU
==================================================*/


const dropdowns = document.querySelectorAll(".dropdown > a");


dropdowns.forEach(dropdown=>{


    dropdown.addEventListener("click",(e)=>{


        if(window.innerWidth <= 900){


            e.preventDefault();


            const parent = dropdown.parentElement;


            parent.classList.toggle("active");


        }


    });


});

/*==================================================
MOBILE NAVBAR TOGGLE
==================================================*/


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){


    menuBtn.addEventListener("click", ()=>{


        navLinks.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });


}


/*==================================================
DROPDOWN (Mobile)
==================================================*/

document.querySelectorAll(".dropdown > a").forEach(item => {

    item.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.preventDefault();

            this.parentElement.classList.toggle("active");

        }

    });

});


/*==================================================
HEADER ON SCROLL
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        header.style.padding = "0";

        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";

        header.style.background = "rgba(255,255,255,.95)";

    }

    else{

        header.style.boxShadow = "none";

        header.style.background = "rgba(255,255,255,.92)";

    }

});


/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/*==================================================
SCROLL REVEAL
==================================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});


document.querySelectorAll(".reveal").forEach(el=>{

    observer.observe(el);

});


/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==================================================
CURRENT YEAR
==================================================*/

const year=document.querySelector("#year");

if(year){

    year.textContent=new Date().getFullYear();

}

/*==================================================
OUR ECOSYSTEM REVEAL ANIMATION
==================================================*/

const ecosystemItems = document.querySelectorAll(
    ".ecosystem-intro, .ecosystem-card"
);


const ecosystemObserver = new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold:0.2
    }
);



ecosystemItems.forEach(item=>{

    item.classList.add("reveal");

    ecosystemObserver.observe(item);

});

/*==================================================
WHY WE EXIST SECTION ANIMATION
==================================================*/


const valuesSection = document.querySelector(".values");


if(valuesSection){


    const valuesElements = valuesSection.querySelectorAll(
        ".values-image, .values-content, .value-list > div"
    );


    const valuesObserver = new IntersectionObserver(
        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },
        {
            threshold:.15
        }

    );



    valuesElements.forEach((element,index)=>{


        element.classList.add("values-reveal");


        element.style.transitionDelay = `${index * 0.12}s`;


        valuesObserver.observe(element);


    });


}

/*==================================================
OUR FOCUS AREAS ANIMATION
==================================================*/


const focusSection = document.querySelector(".focus");


if(focusSection){


    const focusItems = focusSection.querySelectorAll(
        ".focus-header, .focus-item"
    );


    const focusObserver = new IntersectionObserver(
        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },
        {
            threshold:.15
        }

    );



    focusItems.forEach((item,index)=>{


        item.classList.add("focus-reveal");


        item.style.transitionDelay = `${index * 0.12}s`;


        focusObserver.observe(item);


    });


}

/*==================================================
FEATURED PROJECTS ANIMATION
==================================================*/


const projectsSection = document.querySelector(".projects");


if(projectsSection){


    const projectElements = projectsSection.querySelectorAll(
        ".projects-header, .project-image, .project-content"
    );


    const projectObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },

        {
            threshold:.15
        }

    );



    projectElements.forEach((element,index)=>{


        element.classList.add("project-reveal");


        element.style.transitionDelay = `${index * 0.15}s`;


        projectObserver.observe(element);


    });


}

/*==================================================
PARTNERS & COMMUNITY ANIMATION
==================================================*/


const partnersSection = document.querySelector(".partners");


if(partnersSection){


    const partnerElements = partnersSection.querySelectorAll(
        ".partners-content, .partners-image, .partner-card, .partner-values div"
    );


    const partnersObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },

        {
            threshold:.15
        }

    );



    partnerElements.forEach((element,index)=>{


        element.classList.add("partner-reveal");


        element.style.transitionDelay = `${index * 0.12}s`;


        partnersObserver.observe(element);


    });


}

/*==================================================
FINAL CTA ANIMATION
==================================================*/


const ctaSection = document.querySelector(".cta");


if(ctaSection){


    const ctaElements = ctaSection.querySelectorAll(
        ".section-tag, h2, p, .cta-buttons"
    );


    const ctaObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },

        {
            threshold:.2
        }

    );



    ctaElements.forEach((element,index)=>{


        element.classList.add("cta-reveal");


        element.style.transitionDelay = `${index * 0.15}s`;


        ctaObserver.observe(element);


    });


}

/*==================================================
1. MOBILE MENU
==================================================*/


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){


    menuBtn.addEventListener("click", ()=>{


        navLinks.classList.toggle("active");


        menuBtn.classList.toggle("open");


    });


}



/* CLOSE MOBILE MENU */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click", ()=>{


        navLinks.classList.remove("active");


    });


});

/*==================================================
NAVBAR SCROLL EFFECT
==================================================*/


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 50){


        navbar.classList.add("scrolled");


    }

    else{


        navbar.classList.remove("scrolled");


    }


});

/*==================================================
SMOOTH SCROLL
==================================================*/


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target=document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});

/*==================================================
ACTIVE NAVIGATION
==================================================*/


const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop=section.offsetTop-150;


        if(scrollY >= sectionTop){


            current=section.getAttribute("id");


        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#"+current){


            link.classList.add("active");


        }


    });



});