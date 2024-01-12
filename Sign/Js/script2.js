let login = document.getElementById('login')

login.addEventListener("submit", (event)=>{
    event.preventDefault()
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if(localStorage.user){
        let account = JSON.parse(localStorage.user)
        for(let i = 0 ; account.length; i++){
            if(email.value.trim() == account[i].email && password.value.trim() == account[i].password){
                alert("ok")
                return
            }
        }
    }
})