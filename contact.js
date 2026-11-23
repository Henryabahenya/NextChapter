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
CONTACT FORM
==================================================*/

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    let contactStatus = contactForm.querySelector(".form-status");

    if (!contactStatus) {

        contactStatus = document.createElement("p");

        contactStatus.className = "form-status";

        contactStatus.setAttribute("role", "status");

        contactStatus.setAttribute("aria-live", "polite");

        contactForm.appendChild(contactStatus);

    }

    contactForm.addEventListener("submit", async function(e){

        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');

        const formData = new FormData(contactForm);

        const payload = {

            type: "contact",

            fullName: formData.get("fullName"),

            email: formData.get("email"),

            organization: formData.get("organization") || "",

            subject: formData.get("subject") || "",

            message: formData.get("message")

        };

        submitButton.disabled = true;

        submitButton.textContent = "Sending...";

        contactStatus.textContent = "Sending your message...";

        contactStatus.className = "form-status loading";

        try {

            const response = await fetch("/api/enquiries", {

                method: "POST",

                headers: { "Content-Type": "application/json" },

                body: JSON.stringify(payload)

            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {

                throw new Error(data.message || "Unable to send your message. Please try again.");

            }

            contactStatus.textContent = data.message || "Thank you. Your message has been received.";

            contactStatus.className = "form-status success";

            contactForm.reset();

        } catch (error) {

            contactStatus.textContent = error.message || "Unable to send your message. Please try again.";

            contactStatus.className = "form-status error";

        } finally {

            submitButton.disabled = false;

            submitButton.textContent = "Send Message";

        }

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