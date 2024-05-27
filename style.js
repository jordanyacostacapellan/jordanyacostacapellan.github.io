// Function to show/hide sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show about me section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('about');
});
