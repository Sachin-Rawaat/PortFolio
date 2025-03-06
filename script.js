document.addEventListener("DOMContentLoaded", () => {
    // Navbar Toggle for Mobile View
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", () => {
            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        });

        // Close navbar when clicking on a link
        document.querySelectorAll(".navbar a").forEach(link => {
            link.addEventListener("click", () => {
                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");
            });
        });
    }

    // Typed.js Animation for Dynamic Text
    if (typeof Typed !== "undefined") {
        new Typed(".multiple-text", {
            strings: ["Web Developer", "Front-End Developer", "Back-End Developer"],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.warn("Typed.js library is missing. Please check your script inclusion.");
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


// EmailJS ko initialize karo apni public key ke saath
emailjs.init("xPtS5E_j7LJH56tAl");

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Form ka default submit action rok do

            // Ye object form ke data ko store karega
            const formData = {
                name: this.querySelector('input[placeholder="Full Name"]').value,
                email: this.querySelector('input[placeholder="Email"]').value,
                phone: this.querySelector('input[placeholder="Phone Number"]').value,
                subject: this.querySelector('input[placeholder="Subject"]').value,
                message: this.querySelector("textarea").value,
            };

            // EmailJS se form send karo
            emailjs
                .send("service_942xq2r", "template_74kf6z1", formData)
                .then(() => {
                    alert("Your message has been sent successfully!");
                    contactForm.reset(); // Form reset kar do
                })
                .catch((error) => {
                    alert("Oops! Something went wrong. Please try again.");
                    console.error("EmailJS Error:", error);
                });
        });
    }
});

