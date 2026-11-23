/*==================================================
AIJAMII SAFARI MOBILE MENU
==================================================*/


const aiMenuBtn = document.querySelector(".ai-menu-btn");

const aiNavLinks = document.querySelector(".ai-nav-links");



if(aiMenuBtn){


    aiMenuBtn.addEventListener("click",()=>{


        aiNavLinks.classList.toggle("active");



        aiMenuBtn.innerHTML = aiNavLinks.classList.contains("active")

        ? '<i class="fa-solid fa-xmark"></i>'

        : '<i class="fa-solid fa-bars"></i>';



    });


}





/*==================================================
CLOSE MENU AFTER CLICK
==================================================*/


const aiLinks = document.querySelectorAll(".ai-nav-links a");



aiLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        aiNavLinks.classList.remove("active");



        if(aiMenuBtn){


            aiMenuBtn.innerHTML =

            '<i class="fa-solid fa-bars"></i>';


        }



    });



});







/*==================================================
HEADER SCROLL EFFECT
==================================================*/


const aiHeader = document.querySelector(".ai-header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        aiHeader.classList.add("scrolled");


    }

    else{


        aiHeader.classList.remove("scrolled");


    }



});

/*==================================================
AIJAMII HERO REVEAL ANIMATION
==================================================*/


const aiHeroElements = document.querySelectorAll(

    ".ai-hero-content > *, .ai-hero-image"

);



window.addEventListener("load",()=>{


    aiHeroElements.forEach((element,index)=>{


        element.style.opacity = "0";


        element.style.transform = "translateY(40px)";


        element.style.transition = 
        "all .8s ease";



        setTimeout(()=>{


            element.style.opacity = "1";


            element.style.transform = "translateY(0)";



        }, index * 150);



    });


});

/*==================================================
AI FLOATING CARDS EFFECT
==================================================*/


const aiCards = document.querySelectorAll(

    ".ai-floating-card"

);



aiCards.forEach((card,index)=>{


    let position = 0;


    setInterval(()=>{


        position += 0.02;


        card.style.transform =

        `translateY(${Math.sin(position + index) * 8}px)`;


    },50);



});

/*==================================================
AI IMAGE PARALLAX EFFECT
==================================================*/


const aiImage = document.querySelector(

    ".ai-hero-image img"

);



if(aiImage){


    document.addEventListener(

        "mousemove",

        (e)=>{


            const x =

            (window.innerWidth / 2 - e.clientX) / 50;



            const y =

            (window.innerHeight / 2 - e.clientY) / 50;



            aiImage.style.transform =

            `translate(${x}px,${y}px)`;


        }


    );


}

/*==================================================
DISCOVER SECTION REVEAL ANIMATION
==================================================*/


const discoverSection = document.querySelector(
    ".discover-section"
);



if(discoverSection){


    const discoverElements = discoverSection.querySelectorAll(

        ".discover-image, .discover-content, .discover-card"

    );



    const discoverObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach((entry)=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "show"
                    );


                }


            });


        },

        {

            threshold:0.15

        }


    );





    discoverElements.forEach((element,index)=>{


        element.classList.add(
            "discover-reveal"
        );



        element.style.transitionDelay =

        `${index * 0.12}s`;



        discoverObserver.observe(element);



    });



}

/*==================================================
INITIATIVES SECTION ANIMATION
==================================================*/


const initiativeCards = document.querySelectorAll(

    ".initiative-card"

);



if(initiativeCards.length){



    const initiativeObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach((entry)=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "show"
                    );


                }


            });


        },

        {

            threshold:.15

        }


    );






    initiativeCards.forEach((card,index)=>{


        card.classList.add(
            "initiative-reveal"
        );



        card.style.transitionDelay =

        `${index * 0.15}s`;



        initiativeObserver.observe(card);



    });



}

/*==================================================
COMMUNITY SECTION ANIMATION
==================================================*/


const communitySection = document.querySelector(
    ".community-section"
);



if(communitySection){



    const communityElements = communitySection.querySelectorAll(

        ".community-center, .community-item, .community-stats div"

    );





    const communityObserver = new IntersectionObserver(


        (entries)=>{


            entries.forEach((entry)=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "show"
                    );


                }


            });


        },


        {

            threshold:.15

        }


    );






    communityElements.forEach((element,index)=>{


        element.classList.add(
            "community-reveal"
        );



        element.style.transitionDelay =

        `${index * .15}s`;



        communityObserver.observe(element);



    });



}

/*==================================================
COMMUNITY CENTER FLOAT
==================================================*/


const communityCenter = document.querySelector(

    ".community-center"

);



if(communityCenter){


    let floatValue = 0;



    setInterval(()=>{


        floatValue += .03;



        communityCenter.style.transform =

        `translateY(${Math.sin(floatValue)*8}px)`;


    },50);


}

/*==================================================
JOIN MOVEMENT CTA ANIMATION
==================================================*/


const joinSection = document.querySelector(

    ".join-section"

);



if(joinSection){



    const joinElements = joinSection.querySelectorAll(

        ".join-content > *, .join-visual"

    );




    const joinObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach((entry)=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(
                        "show"
                    );


                }


            });


        },

        {

            threshold:.15

        }


    );






    joinElements.forEach((element,index)=>{


        element.classList.add(

            "join-reveal"

        );



        element.style.transitionDelay =

        `${index * .15}s`;



        joinObserver.observe(element);



    });


}

/*==================================================
AIJAMII FOOTER ANIMATION
==================================================*/


const footer = document.querySelector(

    ".aijamii-footer"

);



if(footer){



    const footerElements = footer.querySelectorAll(

        ".footer-brand, .footer-links, .footer-socials, .footer-bottom"

    );





    const footerObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach((entry)=>{


                if(entry.isIntersecting){


                    entry.target.classList.add(

                        "show"

                    );


                }


            });



        },


        {

            threshold:.15

        }


    );





    footerElements.forEach((element,index)=>{


        element.classList.add(

            "footer-reveal"

        );



        element.style.transitionDelay =

        `${index * .15}s`;



        footerObserver.observe(element);



    });



}

/*==================================================
JOIN FORM TEMP HANDLER
==================================================*/


const joinForm = document.querySelector(

    ".aijamii-form"

);



if(joinForm){


    joinForm.addEventListener(

        "submit",

        (e)=>{


            e.preventDefault();



            alert(

                "Thank you for joining AIJAMII SAFARI! We will connect with you soon."

            );



            joinForm.reset();



        }


    );


}