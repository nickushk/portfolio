"use strict";
var user = document.getElementById("username").value;
var pass = document.getElementById("pass").value;
var form = document.getElementById("form")
var log_btn = document.getElementById("log_btn");
var corect_info = false;

// louad the page
window.addEventListener("load", getUser);

// with submit do it
log_btn.addEventListener("click", function (e) {
    e.preventDefault();
    getUser();
});
// contact to API and print JSON container
function getUser() {
    form.innerHTML = "";
    let tempnr = 1;

    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=user')
        .then(response => response.json())
        .then(data => {

            data.forEach((item) => {
                console.log(item.user === user && item.pass === pass);
           

            })
        })
}