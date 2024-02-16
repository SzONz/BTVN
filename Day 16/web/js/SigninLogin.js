document.querySelector("#signinButton").addEventListener("click", function(){
    document.querySelector(".popupSignin").classList.add("active");
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = 'hidden'
})
document.querySelector(".popupSignin .closeButton").addEventListener("click", function(){
    document.querySelector(".popupSignin").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = 'auto'
})



document.querySelector("#loginButton").addEventListener("click", function(){
    document.querySelector(".popupLogin").classList.add("active");
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = 'hidden'
})
document.querySelector(".popupLogin .closeButton").addEventListener("click", function(){
    document.querySelector(".popupLogin").classList.remove("active");
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = 'auto'
})



document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("userLoggedIn")) {
        let loginButton = document.getElementById('loginButton');
        let signinButton = document.getElementById('signinButton');
        loginButton.style.display = "none";
        signinButton.style.display = "none";
        let accounts = document.getElementsByClassName('account');
        for (let i = 0; i < accounts.length; i++) {
            accounts[i].style.display = "flex";
            accounts[i].style.visibility = "visible";
        }
        let overlays = document.getElementsByClassName('overlay');
        for (let i = 0; i < overlays.length; i++) {
            overlays[i].style.display = "none";
        }
        let popupLogins = document.getElementsByClassName('popupLogin');
        for (let i = 0; i < popupLogins.length; i++) {
            popupLogins[i].style.visibility = "hidden";
            popupLogins[i].style.display = "none";
        }
        let popupSignins = document.getElementsByClassName('popupSignin');
        for (let i = 0; i < popupSignins.length; i++) {
            popupSignins[i].style.visibility = "hidden";
            popupSignins[i].style.display = "none";
        }
        document.getElementById("logoutButton").addEventListener("click", function() {
            localStorage.removeItem("userLoggedIn");
            localStorage.removeItem("userLoggedInFirstTime");
            window.location.href = "/web/html/Home.html";
        })
    }
});



let register = document.getElementById('register');
register.addEventListener("submit", (event) =>{
    event.preventDefault();
    let name = document.getElementById('nameSignin');
    let email = document.getElementById('emailSignin');
    let password = document.getElementById('passwordSignin');
    let phone = document.getElementById('numberSignin');
    let TOScheck = document.getElementById('TOSScheck');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passRegex = /^[a-zA-Z0-9]/;
    document.getElementById('nameWarningSigning').style.display = 'none';
    document.getElementById('emailWarningSigning').style.display = 'none';
    document.getElementById('phoneWarningSigning').style.display = 'none';
    document.getElementById('passwordWarningSigning').style.display = 'none';
    document.getElementById('tosWarningSigning').style.display = 'none';
    if (!name.value) {
        document.getElementById('nameWarningSigning').style.display = 'block';
    } else if (!email.value || !emailRegex.test(email.value)) {
        document.getElementById('emailWarningSigning').style.display = 'block';
    } else if (!phone.value) {
        document.getElementById('phoneWarningSigning').style.display = 'block';
    } else if (!password.value || !passRegex.test(password.value)) {
        document.getElementById('passwordWarningSigning').style.display = 'block';
    } else if (!TOScheck.checked) {
        document.getElementById('tosWarningSigning').style.display = 'block';
    } else {
        localStorage.setItem("userLoggedIn", true);
        if (!localStorage.getItem("userLoggedInFirstTime")) {
            localStorage.setItem("userLoggedInFirstTime", true);
            window.location.reload();
        }
        if (localStorage.user) {
            let user = JSON.parse(localStorage.user);
            user.push({
            name: name.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
            phone: phone.value.trim()
        });
        localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.setItem("user", JSON.stringify([{
                name: name.value.trim(),
                email: email.value.trim(),
                password: password.value.trim(),
                phone: phone.value.trim()
            }]));
        }
    }
});



let login = document.getElementById('login');
login.addEventListener("submit", (event)=>{
    event.preventDefault();
    let email = document.getElementById('emailLogin');
    let password = document.getElementById('passwordLogin');
    let emailRegex = /^[a-zA-Z0-9]+@(gmail)\.com$/;
    let passRegex = /^[a-zA-Z0-9]/;
    document.getElementById('emailWarningLogin').style.display = 'none';
    document.getElementById('passwordWarningLogin').style.display = 'none';
    if (!email.value || !emailRegex.test(email.value)) {
        document.getElementById('emailWarningLogin').style.display = 'block';
    } else if (!password.value || !passRegex.test(password.value)) {
        document.getElementById('passwordWarningLogin').style.display = 'block';
    } else {
        localStorage.setItem("userLoggedIn", true);
        if (!localStorage.getItem("userLoggedInFirstTime")) {
            localStorage.setItem("userLoggedInFirstTime", true);
            window.location.reload();
        }
        if(localStorage.user){
            let account = JSON.parse(localStorage.user)
            for(let i = 0; i < account.length; i++){ 
                if(email.value.trim() == account[i].email && password.value.trim() == account[i].password){
                    localStorage.setItem("userLoggedIn", true);
                    return
                }
                else{
                    return
                }
            }
        }
    }
});

