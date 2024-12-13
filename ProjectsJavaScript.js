

// JS for Collapse/Expand discipline buttons on Projects page
document.addEventListener("DOMContentLoaded", () => {
    // Select all detail-toggle buttons
    const toggleButtons = document.querySelectorAll('.project-bio .detail-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent .project-bio of the clicked button
            const projectBio = button.closest('.project-bio');
            if (projectBio) {
                // Find the .bio-details element within the same .project-bio
                const bioDetails = projectBio.querySelector('.bio-details');
                if (bioDetails) {
                    // Toggle the display property between 'none' and 'block'
                    const isHidden = bioDetails.style.display === 'none' || bioDetails.style.display === '';
                    bioDetails.style.display = isHidden ? 'block' : 'none';

                    // Update the button text
                    button.textContent = isHidden ? 'Collapse details' : 'Expand details';
                }
            }
        });
    });
});

