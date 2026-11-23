/*==================================================
PROJECTS HERO ANIMATION
==================================================*/


const projectsHero = document.querySelector(".projects-hero");


if(projectsHero){


    const heroElements = projectsHero.querySelectorAll(

        ".projects-hero-content, .projects-hero-image"

    );



    const heroObserver = new IntersectionObserver(

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



    heroElements.forEach(element=>{


        heroObserver.observe(element);


    });


}

/*==================================================
INNOVATION SHOWCASE ANIMATION
==================================================*/


const showcaseSection = document.querySelector(
    ".showcase-section"
);



if(showcaseSection){


    const showcaseElements = showcaseSection.querySelectorAll(

        ".showcase-header, .showcase-card"

    );



    const showcaseObserver = new IntersectionObserver(

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



    showcaseElements.forEach((element,index)=>{


        element.classList.add("showcase-reveal");


        element.style.transitionDelay =

        `${index * 0.15}s`;



        showcaseObserver.observe(element);


    });


}

/*==================================================
PROJECT CATEGORY ANIMATION
==================================================*/


const categorySection = document.querySelector(
    ".project-category-section"
);



if(categorySection){


    const categoryElements = categorySection.querySelectorAll(

        ".category-header, .category-card"

    );



    const categoryObserver = new IntersectionObserver(

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



    categoryElements.forEach((element,index)=>{


        element.classList.add("category-reveal");


        element.style.transitionDelay =

        `${index * 0.15}s`;



        categoryObserver.observe(element);


    });


}

/*==================================================
FUTURE PROJECTS ANIMATION
==================================================*/


const futureSection = document.querySelector(
    ".future-section"
);



if(futureSection){


    const futureElements = futureSection.querySelectorAll(

        ".future-content, .future-card"

    );



    const futureObserver = new IntersectionObserver(

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



    futureElements.forEach((element,index)=>{


        element.classList.add("future-reveal");


        element.style.transitionDelay =

        `${index * 0.15}s`;



        futureObserver.observe(element);


    });


}