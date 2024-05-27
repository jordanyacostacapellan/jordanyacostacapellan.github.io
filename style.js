document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    // Hide all sections except the home page initially
    sections.forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });

    // Function to show the selected section
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            }
