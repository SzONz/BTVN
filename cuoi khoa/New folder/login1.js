function buttonclick() {
    var username = document.getElementById('name').value;
    var pass = document.getElementById('password').value;


    if (username == ""||pass == "") {
        alert("All information must be filled in");
        return;
    }


    

    else {
        window.location.href = "http://127.0.0.1:5500/Home.html";
    }
}

function unavailable() {
    alert("N/A")
}

function darkthemetoggle() {
    document.body.classList.toggle("dark-theme-toggle")
}
