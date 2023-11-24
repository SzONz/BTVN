function buttonclick() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var passconfirm = document.getElementById('passwordconfirm').value;
    //var male = document.getElementById('male')
    //var female = document.getElementById('female');
    //var other = document.getElementById('other');
    //var gender = ""


    if (firstname == "" ||lastname == "" ||email == ""||pass == "") {
        alert("All information must be filled in");
        return;
    }

    if (passconfirm == "") {
        alert("You must confirm your password");
        return
    } else if (passconfirm != pass) {
        alert("Your password was written incorrectly");
        return
    }

    //if (!male.checked && !female.checked && !other.checked) {
    //    alert("No gender?")
    //    return
    //} else if (male.checked==true) {
    //    gender = male.value;
    //} else if (female.checked==true) {
    //    gender = female.value;
    //} else{
    //    gender = "other"
    //}
    confirminfo = confirm("Confirm your info\n" + "your username is: " + firstname + " " + lastname + "\n" + "your email is: " + email + "\n" + "your password is: " + pass);
    if (confirminfo == 1) {
        alert("Succeed!")
        location.href = 'http://127.0.0.1:5500/Home.html' //điền trang chính vào đây
    }
}

function unavailable() {
    alert("N/A")
}

function darkthemetoggle() {
    //var darkmode = document.getElementsByClassName('modeimg')
    document.body.classList.toggle("dark-theme-toggle")
    //if (document.body.classList.contains("dark-theme-toggle")) {
    //    darkmode.src = "/images/sun_icon.png"
    //} else{
    //    darkmode.src = "/images/moon_icon.png"
    //}
}