document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading delay
    setTimeout(function () {
        // Get the preloader element
        const preloader = document.querySelector('.preloader');

        // Add the fade-out class to start the fade-out animation
        preloader.classList.add('fade-out');

        // Remove the preloader from the DOM after the animation completes
        preloader.addEventListener('animationend', function () {
            preloader.style.display = 'none';
        });
    }, 3000); // Adjust the delay time (in milliseconds) as needed
});

function redirectToProjects(){
    window.location.href = "projects.html";
}