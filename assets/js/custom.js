(function() {
    emailjs.init({
      publicKey: "U-UEPa2lvHMMMeYN7",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const responseMessage = document.getElementById('response-message');
        responseMessage.textContent = ''; 
        emailjs.sendForm('service_fc9n23h', 'template_nmba6il', this)
            .then(() => {
                responseMessage.textContent = 'Email sent successfully!';
                responseMessage.style.color = 'green';
            }, (error) => {
                responseMessage.textContent = 'Failed to send email. Please try again later.';
                responseMessage.style.color = 'red';
            });
    });
}