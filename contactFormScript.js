function showForm() {
    document.querySelectorAll('[id^="General Inquiry"], [id^="Employment Inquiry"], [id^="Collaboration Inquiry"], [id^="Website Feedback"], [id^="Project Feedback"]').forEach(function (form) {
        form.style.display = 'none';
    });

    var selectedValue = document.getElementById('formSelector').value;
    if (selectedValue) {
        var formToShow = document.getElementById(selectedValue);
        if (formToShow) {
            formToShow.style.display = 'block';
        }
    }
}
