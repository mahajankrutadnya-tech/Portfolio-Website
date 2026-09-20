(function () {
    emailjs.init({
        publicKey: "qDntZ96ODUyhgkunH"
    });
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_473tgee",
        "template_7sgf7dp",
        this
    )
    .then(function() {

        alert("Message sent successfully!");

        document.getElementById("contact-form").reset();

    })
    .catch(function(error) {

        alert("Failed to send message. Please try again.");

        console.log("EmailJS Error:", error);

    });

});