function showForm() {
    document.querySelectorAll("#general-inquiry, #employment-inquiry, #collab-inquiry, #site-feedback, #project-feedback").forEach(function (form) {
        form.style.display = "none";
    });

    var selectedValue = document.getElementById('formSelector').value;
    if (selectedValue) {
        var formToShow = document.getElementById(selectedValue);
        if (formToShow) {
            formToShow.style.display = 'block';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("b7i3vqXUE4HJoWvlA"); // Replace with your EmailJS public key

    document.querySelectorAll("form:not(#selectionForm)").forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            //const currentForm = event.target.closest('form'); // Ensure we get the form element
            const formData = new FormData(form);
            const formObject = Object.fromEntries(formData.entries());
            const formName = form.getAttribute("name");

            let templateId;
            switch (formName) {
                case "general-inquiry":
                    templateId = "template_74ci1w3";
                    break;
                case "employment-inquiry":
                    templateId = "template_axgujk4";
                    break;
                case "collab-inquiry":
                    templateId = "template_axgujk4"; //Reuses the General-Inquiry template since Email.js only allows up to 2 templates for free
                    break;
                case "site-feedback":
                    templateId = "template_74ci1w3"; //Reuses the General-Inquiry template since Email.js only allows up to 2 templates for free
                    break;
                case "project-feedback":
                    templateId = "template_74ci1w3"; //Reuses the General-Inquiry template since Email.js only allows up to 2 templates for free
                    break;
                default:
                    alert("Something unexpected happened. Unhandled form type submitted for:" + formName + ". Please contact support.");
                    return;
            }

            emailjs.send("service_y1pwwvc", templateId, formObject) // Service ID and Template IDs are from Email.js account
                .then(() => {
                    alert("Your message has been sent successfully!");
                })
                .catch((error) => {
                    console.error("Email sending failed:", error);
                    alert("There was an error sending your " + formName + " message. Please try again.");
                });
        });
    });
});
