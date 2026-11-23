/*==================================================
CONTACT HERO ANIMATION
==================================================*/

const contactHero = document.querySelector(".contact-hero");

if (contactHero) {

    const heroElements = contactHero.querySelectorAll(

        ".contact-hero-content, .contact-hero-image"

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

    heroElements.forEach((element) => {

        heroObserver.observe(element);

    });

}

/*==================================================
CONTACT SECTION ANIMATION
==================================================*/

const contactSection = document.querySelector(".contact-section");

if (contactSection) {

    const contactElements = contactSection.querySelectorAll(

        ".contact-info, .contact-form, .contact-card"

    );

    const contactObserver = new IntersectionObserver(

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

    contactElements.forEach((element, index) => {

        element.classList.add("contact-reveal");

        element.style.transitionDelay = `${index * 0.12}s`;

        contactObserver.observe(element);

    });

}

/*==================================================
CONTACT FORM (TEMPORARY)
==================================================*/

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for contacting NextChapter Innovation! We'll get back to you as soon as possible.");

        contactForm.reset();

    });

}

/*==================================================
CONNECT WITH US ANIMATION
==================================================*/

const socialSection = document.querySelector(".social-section");

if (socialSection) {

    const socialElements = socialSection.querySelectorAll(

        ".social-header, .social-card"

    );

    const socialObserver = new IntersectionObserver(

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

    socialElements.forEach((element, index) => {

        element.classList.add("social-reveal");

        element.style.transitionDelay = `${index * 0.12}s`;

        socialObserver.observe(element);

    });

}

/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close all other FAQ items
        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        // Toggle current item
        item.classList.toggle("active");

    });

});



/*==================================================
FAQ SCROLL ANIMATION
==================================================*/

const faqSection = document.querySelector(".faq-section");

if (faqSection) {

    const faqElements = faqSection.querySelectorAll(

        ".faq-header, .faq-item"

    );

    const faqObserver = new IntersectionObserver(

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

    faqElements.forEach((element, index) => {

        element.classList.add("faq-reveal");

        element.style.transitionDelay = `${index * 0.1}s`;

        faqObserver.observe(element);

    });

}