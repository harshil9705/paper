(function(){
    emailjs.init("Apc_Rb_1MBPo0mHhc"); // Replace with your EmailJS User ID
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent form from reloading

    emailjs.sendForm("service_604a7er", "template_kngctol", "#contact-form")
    .then(function(response) {
        alert("Email sent successfully!");
        console.log("Email sent:", response);
    }, function(error) {
        alert("Failed to send email.");
        console.error("Error:", error);
    });
}