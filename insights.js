/*==================================================
INSIGHTS HERO ANIMATION
==================================================*/

const insightsHero = document.querySelector(".insights-hero");

if (insightsHero) {

    const heroElements = insightsHero.querySelectorAll(

        ".section-tag, h1, p, .hero-buttons, .hero-tags"

    );

    const heroObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.2

        }

    );

    heroElements.forEach((element,index)=>{

        element.classList.add("hero-reveal");

        element.style.transitionDelay = `${index * 0.15}s`;

        heroObserver.observe(element);

    });

}

/*==================================================
FEATURED ARTICLE ANIMATION
==================================================*/

const featuredSection = document.querySelector(".featured-section");

if (featuredSection) {

    const featuredElements = featuredSection.querySelectorAll(

        ".featured-header, .featured-image, .featured-content"

    );

    const featuredObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold:0.2

        }

    );

    featuredElements.forEach((element,index)=>{

        element.classList.add("featured-reveal");

        element.style.transitionDelay = `${index * 0.2}s`;

        featuredObserver.observe(element);

    });

}

/*==================================================
EXPLORE KNOWLEDGE ANIMATION
==================================================*/

const knowledgeSection = document.querySelector(".knowledge-section");

if (knowledgeSection) {

    const knowledgeElements = knowledgeSection.querySelectorAll(

        ".knowledge-header, .knowledge-card"

    );

    const knowledgeObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    knowledgeElements.forEach((element, index) => {

        element.classList.add("knowledge-reveal");

        element.style.transitionDelay = `${index * 0.12}s`;

        knowledgeObserver.observe(element);

    });

}

/*==================================================
LATEST STORIES ANIMATION
==================================================*/

const storiesSection = document.querySelector(".stories-section");


if (storiesSection) {


    const storyElements = storiesSection.querySelectorAll(

        ".stories-header, .story-featured, .story-card, .stories-btn"

    );



    const storiesObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },

        {

            threshold:0.15

        }


    );



    storyElements.forEach((element,index)=>{


        element.classList.add("story-reveal");


        element.style.transitionDelay = `${index * 0.15}s`;


        storiesObserver.observe(element);


    });


}

/*==================================================
STORY CARD INTERACTION
==================================================*/


const storyCards = document.querySelectorAll(".story-card");


storyCards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.classList.add("active");


    });



    card.addEventListener("mouseleave",()=>{


        card.classList.remove("active");


    });



});

/*==================================================
NEWSLETTER ANIMATION
==================================================*/

const newsletterSection = document.querySelector(".newsletter-section");


if (newsletterSection) {


    const newsletterElements = newsletterSection.querySelectorAll(

        ".newsletter-container, .newsletter-content, .newsletter-form"

    );



    const newsletterObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach(entry=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("show");


                }


            });


        },

        {

            threshold:0.15

        }


    );



    newsletterElements.forEach((element,index)=>{


        element.classList.add("newsletter-reveal");


        element.style.transitionDelay = `${index * 0.15}s`;


        newsletterObserver.observe(element);


    });


}





/*==================================================
NEWSLETTER FORM HANDLER
==================================================*/

const newsletterForm = document.querySelector(".newsletter-form");


if(newsletterForm){


    newsletterForm.addEventListener("submit",(e)=>{


        e.preventDefault();



        const emailInput = newsletterForm.querySelector("input");



        if(emailInput.value !== ""){


            alert(

                "Thank you for subscribing! Updates from NextChapter are coming soon."

            );



            emailInput.value = "";


        }


    });


}

/*==================================================
FINAL CTA ANIMATION
==================================================*/

const insightsCTA = document.querySelector(".insights-cta");


if(insightsCTA){


    const ctaElements = insightsCTA.querySelectorAll(

        ".cta-content"

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

            threshold:0.2

        }


    );



    ctaElements.forEach(element=>{


        element.classList.add("cta-reveal");


        ctaObserver.observe(element);


    });


}