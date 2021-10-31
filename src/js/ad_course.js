"use strict";
// create variable
var ad_studier_table = document.getElementById("ad_courses_table");
var ad_course_place = document.getElementById("place");
var ad_course = document.getElementById("course");
var ad_course_start = document.getElementById("start");
var ad_course_end = document.getElementById("end");
var ad_course_btn = document.getElementById("addC");

var admin = false;

window.addEventListener("load", adGetCourses);

// with submit do it
ad_course_btn.addEventListener("click", function (e) {
    e.preventDefault();
    addCourse();
});

// contact to API and print JSON container for admin
function adGetCourses() {
    ad_studier_table.innerHTML = "";

    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses')
        .then(response => response.json())
        .then(data => {

            data.forEach((item) => {
                ad_studier_table.innerHTML += `<tr>
                <td>${item.course}</td>
                <td>${item.place}</td>
                <td>${item.start_date}</td>
                <td> ${item.end_date}</td>
                <td> <button class="edit_btn" onClick="updateCourse(${item.id})"><a href="#add_edit_course"> REDIGERA</a> </button>
                <td> <button class="delete_btn" onClick="deleteEl(${item.id})"> RADERA</button>
                </tr>`

            })
        })
}

// send element to API
function addCourse() {
    let course = ad_course.value;
    let place = ad_course_place.value;
    let start = ad_course_start.value;
    let end = ad_course_end.value;

    let coursToAdd = { 'course': course, 'place': place, 'start_date': start, 'end_date': end };

    // connect to API,send method and body value to API
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coursToAdd)

    })
        .then((response) => {

            response.json();
        })
        .then(data => {
            adGetCourses();

        }).catch((error) => {

            console.log('Fetch Error!!', error);
        })


}


// send element to API
function updateCourse(id) {
    let course = ad_course.value;
    let place = ad_course_place.value;
    let start = ad_course_start.value;
    let end = ad_course_end.value;
  

    let coursToAdd = { 'course': course, 'place': place, 'start_date': start, 'end_date': end , 'id': id};

    // connect to API,send method and body value to API
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coursToAdd)

    })
        .then((response) => {

            response.json();
        })
        .then(data => {
            adGetCourses();

        }).catch((error) => {

            console.log('Fetch Error!!', error);
        })


}
// contact to API and print JSON container
function deleteEl(id) {


    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses&id=' + id, {


        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {

            adGetCourses();

        }).catch((error) => {
            console.log("Error: ", error);
        })
}