// Listen for a click event on the element with the id of "theme-toggle"
/*document.getElementById('theme-toggle').addEventListener('click', function() {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.toggle('dark-mode');
});
*/
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');

    // Function to toggle the theme
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        // Save theme preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    }

    // Event listener for the button
    toggleButton.addEventListener('click', toggleTheme);

    // Check localStorage for theme preference and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});