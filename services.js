/*==================================================
SERVICES HERO ANIMATION
==================================================*/


const servicesHero = document.querySelector(".services-hero");


if(servicesHero){


    const heroElements = servicesHero.querySelectorAll(

        ".services-hero-content, .services-hero-image"

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
SERVICE CATEGORIES ANIMATION
==================================================*/


const serviceSection = document.querySelector(".service-categories");


if(serviceSection){


    const serviceElements = serviceSection.querySelectorAll(

        ".services-header, .service-card"

    );



    const serviceObserver = new IntersectionObserver(

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



    serviceElements.forEach((element,index)=>{


        element.classList.add("service-reveal");


        element.style.transitionDelay =

        `${index * 0.12}s`;



        serviceObserver.observe(element);


    });


}

/*==================================================
DETAILED SERVICES ANIMATION
==================================================*/


const detailedServices = document.querySelector(
    ".detailed-services"
);



if(detailedServices){


    const detailElements = detailedServices.querySelectorAll(

        ".detail-content, .detail-image"

    );



    const detailObserver = new IntersectionObserver(

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



    detailElements.forEach((element,index)=>{


        element.classList.add("detail-reveal");


        element.style.transitionDelay =

        `${index * 0.15}s`;



        detailObserver.observe(element);


    });


}

/*==================================================
WHY CHOOSE SECTION ANIMATION
==================================================*/


const whySection = document.querySelector(".why-section");


if(whySection){


    const whyElements = whySection.querySelectorAll(

        ".why-header, .why-card, .why-stats"

    );



    const whyObserver = new IntersectionObserver(

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



    whyElements.forEach((element,index)=>{


        element.classList.add("why-reveal");


        element.style.transitionDelay =

        `${index * 0.15}s`;



        whyObserver.observe(element);


    });


}