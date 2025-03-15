document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links
    document.querySelectorAll(".navbar ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hero section button animation
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
        });
        ctaButton.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    }

    // Form submission handling
    document.querySelectorAll(".signup-container form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for signing up! We will contact you soon.");
            form.reset();
        });
    });
});
