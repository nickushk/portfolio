
var user = document.getElementById("username").value;
var pass = document.getElementById("pass").value;
var login_form = document.getElementById("login_form")
var log_btn = document.getElementById("log_btn");
var corect_info = false;


// with submit do it
log_btn.addEventListener("click", function (e) {
    e.preventDefault();
    getUser();
});

// contact to API and print JSON container
function getUser() {
    login_form.innerHTML = "";
    let tempnr = 1;
    let _user = user.value;
    let _pass = pass.value;
    if (_user === "" || _pass === "") {
        login_form.innerHTML += "<p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt användarnamn/lösenord!</p>";

    } else {

        let userInfo = { "user": _user, "pass": _pass };


        fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?login=login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)

        })

            .then(response => response.json())
            .then(data => {
                login_form.innerHTML += " <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Du är inloggad!</p>";

              
            })
    }
}