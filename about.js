/*==================================================
ABOUT HERO ANIMATION
==================================================*/


const aboutHero = document.querySelector(".about-hero");


if(aboutHero){


    const aboutElements = aboutHero.querySelectorAll(
        ".section-tag, h1, p"
    );


    const aboutObserver = new IntersectionObserver(

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



    aboutElements.forEach((element,index)=>{


        element.classList.add("about-reveal");


        element.style.transitionDelay = 
        `${index * 0.2}s`;



        aboutObserver.observe(element);


    });


}

/*==================================================
OUR STORY ANIMATION
==================================================*/


const storySection = document.querySelector(".story");


if(storySection){


    const storyElements = storySection.querySelectorAll(

        ".story-image, .story-content, .story-badge, .story-points div"

    );



    const storyObserver = new IntersectionObserver(

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



    storyElements.forEach((element,index)=>{


        element.classList.add("story-reveal");


        element.style.transitionDelay = 
        `${index * 0.15}s`;



        storyObserver.observe(element);


    });


}

/*==================================================
MISSION & VISION ANIMATION
==================================================*/


const missionSection = document.querySelector(".mission");


if(missionSection){


    const missionCards = missionSection.querySelectorAll(
        ".mission-card"
    );


    const missionObserver = new IntersectionObserver(

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



    missionCards.forEach((card,index)=>{


        card.classList.add("mission-reveal");


        card.style.transitionDelay =
        `${index * 0.2}s`;



        missionObserver.observe(card);


    });


}

/*==================================================
OUR APPROACH ANIMATION
==================================================*/


const approachSection = document.querySelector(".approach");


if(approachSection){


    const approachElements = approachSection.querySelectorAll(

        ".approach-header, .approach-item"

    );



    const approachObserver = new IntersectionObserver(

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



    approachElements.forEach((element,index)=>{


        element.classList.add("approach-reveal");


        element.style.transitionDelay = 
        `${index * 0.15}s`;



        approachObserver.observe(element);


    });


}

/*==================================================
OUR VALUES ANIMATION
==================================================*/


const valuesSection = document.querySelector(".values");


if(valuesSection){


    const valuesElements = valuesSection.querySelectorAll(

        ".values-header, .value-card"

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


        element.classList.add("value-reveal");


        element.style.transitionDelay = 
        `${index * 0.12}s`;



        valuesObserver.observe(element);


    });


}

/*==================================================
TEAM SECTION ANIMATION
==================================================*/


const teamSection = document.querySelector(".team");


if(teamSection){


    const teamElements = teamSection.querySelectorAll(

        ".team-header, .team-card"

    );



    const teamObserver = new IntersectionObserver(

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



    teamElements.forEach((element,index)=>{


        element.classList.add("team-reveal");


        element.style.transitionDelay =
        `${index * 0.15}s`;



        teamObserver.observe(element);


    });


}