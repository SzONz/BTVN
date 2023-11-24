function resetAndAnimateButton(button, formId) {
    var form = document.getElementById(formId);
    form.reset();

    button.classList.add("pressed");

    setTimeout(function () {
        button.classList.remove("pressed");
    }, 300);
}
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector(".overlay");

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        
        overlay.style.backgroundPosition = `center ${scrollPosition * 0.3}px`;
    });
});
