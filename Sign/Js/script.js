let register = document.getElementById('register');

register.addEventListener("submit", (event) =>{
    event.preventDefault();
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPassword');
    let emailRegex = /^[a-zA-Z0-9]+@(gmail)\.com$/
    let passRegex = /^[a-zA-Z0-9]/;
    if(!name.value){
        alert("???")
    }
    else if(!password.value || !passRegex.test(password.value)){
        alert("??")
    }
    else if(!email.value || !emailRegex.test(email.value)){
        alert("?")
    }
    else if(repeatPassword.value != password.value){
        alert("ko")
    }
    else{
        if(localStorage.user){
            let user = JSON.parse(localStorage.user)
            user.push(
                {
                    name: name.value.trim(),
                    email: email.value.trim(),
                    password: password.value.trim()
                }
            )
            localStorage.setItem("user", JSON.stringify(user))
        }
        else{
            localStorage.setItem("user", JSON.stringify(
                [
                    {
                        email: email.value.trim(),
                        password: password.value.trim()
                    }
                ]
            ))
        }
    }
})