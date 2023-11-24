document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        
        overlay.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
    });
});

document.getElementById("redirectRecipe").addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/Menu.html";
});

document.getElementById("redirectAboutUs").addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/About.html";
});