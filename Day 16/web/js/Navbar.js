document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        if (nav) {
            nav.classList.toggle("sticky", window.scrollY > 0);
        }
    });
    const accountButton = document.querySelector(".account");
    if (accountButton) {
        accountButton.addEventListener("click", function() {
            const accountDrop = document.querySelector(".accountDrop");
            if (accountDrop) {
                accountDrop.classList.toggle("pressed");
            }
        });
    }
});


let userDataString = localStorage.getItem('user');
if (userDataString) {
    let userData = JSON.parse(userDataString);
    let userName = userData[0].name;
    let navTextElement = document.querySelector('.navText'); 
    let navTextItem = document.querySelector('.accountDropText');
    if (navTextElement) {
        navTextElement.innerHTML = 'Hello <span>' + userName + '</span>!';
    }
    if(navTextItem){
        navTextItem.textContent = userName;
    }
}

