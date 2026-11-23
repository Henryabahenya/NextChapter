/*==================================================
PARTNERS HERO ANIMATION
==================================================*/

const partnersHero = document.querySelector(".partners-hero");

if (partnersHero) {

    const heroElements = partnersHero.querySelectorAll(
        ".partners-hero-content, .partners-hero-image"
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
            threshold: 0.2
        }

    );

    heroElements.forEach(element => {

        heroObserver.observe(element);

    });

}

/*==================================================
BUILDING OUR NETWORK ANIMATION
==================================================*/

const networkSection = document.querySelector(".network-section");

if (networkSection) {

    const networkElements = networkSection.querySelectorAll(

        ".network-header, .network-card"

    );

    const networkObserver = new IntersectionObserver(

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

    networkElements.forEach((element, index) => {

        element.classList.add("network-reveal");

        element.style.transitionDelay = `${index * 0.15}s`;

        networkObserver.observe(element);

    });

}

/*==================================================
WHY PARTNER ANIMATION
==================================================*/

const whyPartnerSection = document.querySelector(".why-partner-section");

if (whyPartnerSection) {

    const whyElements = whyPartnerSection.querySelectorAll(

        ".why-partner-header, .why-card"

    );

    const whyObserver = new IntersectionObserver(

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

    whyElements.forEach((element, index) => {

        element.classList.add("why-reveal");

        element.style.transitionDelay = `${index * 0.15}s`;

        whyObserver.observe(element);

    });

}

/*==================================================
PARTNERSHIP PROCESS ANIMATION
==================================================*/

const processSection = document.querySelector(".process-section");

if (processSection) {

    const processElements = processSection.querySelectorAll(

        ".process-header, .process-step"

    );

    const processObserver = new IntersectionObserver(

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

    processElements.forEach((element, index) => {

        element.classList.add("process-reveal");

        element.style.transitionDelay = `${index * 0.15}s`;

        processObserver.observe(element);

    });

}

/*==================================================
PARTNERSHIP OPPORTUNITIES ANIMATION
==================================================*/

const opportunitiesSection = document.querySelector(".opportunities-section");

if (opportunitiesSection) {

    const opportunityElements = opportunitiesSection.querySelectorAll(

        ".opportunities-header, .opportunity-card"

    );

    const opportunityObserver = new IntersectionObserver(

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

    opportunityElements.forEach((element, index) => {

        element.classList.add("opportunity-reveal");

        element.style.transitionDelay = `${index * 0.15}s`;

        opportunityObserver.observe(element);

    });

}