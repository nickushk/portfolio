
if (login_page === true &&  sessionStorage.getItem('login') != 1) {
  var user = document.getElementById("username");
  var pass = document.getElementById("pass");
  var login_form = document.getElementById("login_form");
  var log_btn = document.getElementById("log_btn");
  var correct_info = false;
  var login_url =
    "https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?login=login";
  var test;

  // with submit do it

  log_btn.addEventListener("click", function (e) {
    e.preventDefault();
    sendLogin();
    setTimeout(() => location.reload(), 1500);
    console.log("----" + localStorage.getItem('login'));
  });

  function sendLogin() {
    let loginInfo = { user: user.value, pass: pass.value };
console.log(loginInfo);
    // if its is empy 
    if (user.value === "" || pass.value === "") {
 
      login_form.innerHTML =
        " <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";
    } else {
      fetch(login_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => {
            setTimeout(() => location.reload(), 1500);
          getChecking();
        })
        .catch((error) => {
          console.log("Fetch Error!!", error);
        });
    }
  }

  // return login results
  function getChecking() {
    fetch(login_url)
      .then((response) => response.json())
      .then((data) => {
        // convert obj to array and get value of it
        Object.entries(data).forEach(([key, myValue]) => {

            // if user and pass i correct save in sessionStorage
          if (myValue === "yes") {

            sessionStorage.setItem('login', "1");
            window.location.replace = "admin.html";
            
            
          } else {
            console.log(myValue);
            sessionStorage.setItem("login", "0");
            login_form.innerHTML =
            " <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Fel lösenord/användarnamn!</p>";
            // if not send a message to user
            setTimeout(() => location.reload(), 1500);
    
          }
         
        });
      });
  }
}
else if( (login_page === true &&  sessionStorage.getItem('login') == 1)) {
    window.location.href = "https://studenter.miun.se/~niku2001/writeable/webb3/portfolio/admin.html";
}