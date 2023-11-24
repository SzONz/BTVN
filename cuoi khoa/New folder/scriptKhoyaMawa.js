document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        
        overlay.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
    });
});
