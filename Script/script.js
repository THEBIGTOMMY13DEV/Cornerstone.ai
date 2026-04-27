function scrollToContact() {
    const contact = document.getElementById("contact");
    if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
    }
}

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = document.getElementById("formMessage");
        if (message) {
            message.textContent = "Message sent! I'll get back to you soon.";
        }
    });
}