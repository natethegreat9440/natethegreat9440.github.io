// JS for Collapse/Expand details buttons on Tools page
document.addEventListener("DOMContentLoaded", () => {
    // Select all detail-toggle buttons
    const toggleButtons = document.querySelectorAll('.sub-discipline .detail-toggle');
    const toggleAllButtons = document.querySelectorAll('.tool-discipline .toggle-discipline');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            ToggleSubDiscipline(button);
        });
    });

    toggleAllButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the parent .tool-discipline of the clicked button
            ToggleDiscipline(button);
        });
    });
});


function ToggleDiscipline(button) {
    const toggleDiscipline = button.closest('.tool-discipline');
    if (toggleDiscipline) {
        // Find all .sub-discipline buttons within the same .tool-discipline
        const allToggleButtons = toggleDiscipline.querySelectorAll('.detail-toggle');
        // Update the button text only
        const isCollapsed = button.textContent === 'Expand all';
        button.textContent = isCollapsed ? 'Collapse all' : 'Expand all';

        if (allToggleButtons) {
            allToggleButtons.forEach(button => {
                if (isCollapsed) {
                    if (button.textContent === '>') {
                        ToggleSubDiscipline(button);
                    }
                }
                else {
                    if (button.textContent === 'v') {
                        ToggleSubDiscipline(button);
                    }
                }
            });
        }
    }
}

function ToggleSubDiscipline(button) {

    const subDiscipline = button.closest('.sub-discipline');
    if (subDiscipline) {
        // Find the <p> element within the same subDiscipline
        const toolLink = subDiscipline.querySelector('.tool-links');
        if (toolLink) {
            // Toggle the display property between 'none' and 'block'
            const isHidden = toolLink.style.display === 'none' || toolLink.style.display === '';
            toolLink.style.display = isHidden ? 'block' : 'none';

            // Update the button text
            button.textContent = isHidden ? 'v' : '>';
        }
    }
}
