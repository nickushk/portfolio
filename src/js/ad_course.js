
// create variable
var edit_form = document.getElementById("edit_course_form");
var formInput = document.getElementsByClassName("form_input");
var ad_studier_table = document.getElementById("ad_courses_table");
var ad_course_place = document.getElementById("place");
var ad_course = document.getElementById("course");
var ad_course_start = document.getElementById("start");
var ad_course_form = document.getElementById("add_course");
var ad_course_end = document.getElementById("end");
var ad_course_btn = document.getElementById("addCourse");
var ed_course_place = document.getElementById("edit_place");
var ed_course = document.getElementById("edit_course");
var ed_course_start = document.getElementById("edit_start");
var ed_course_end = document.getElementById("edit_end");
var ed_course_btn = document.getElementById("editC");
var idEl;

var admin = false;

window.addEventListener("load", adGetCourses);

// with submit first run the function do it
ad_course_btn.addEventListener("click", function (e) {
    e.preventDefault();
    addCourse();
});
// with submit first run the function do it
ed_course_btn.addEventListener("click", function (e) {
    e.preventDefault();
    updateCourse(idEl);
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
                <td> <button  class="edit_btn" onClick="setId(${item.id})"><a href="#edit_course"> REDIGERA</a> </button>
                <td> <button class="delete_btn" onClick="deleteCourse(${item.id})"> RADERA</button>
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
    if (course === "" || place === "") {
        ad_course_form.innerHTML += " <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";

    } else {
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




}

function setId(id) {
    idEl = id;
}
// send element to API
function updateCourse(idEl) {


    let course = ed_course.value;
    let place = ed_course_place.value;
    let start = ed_course_start.value;
    let end = ed_course_end.value;
    if (course === "" || place === "" || idEl==="") {
        ad_course_form.innerHTML += " <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";

    } else {

        console.log(course + "--" + place + "--" + start + "--" + idEl + "--");



        let courseToAdd = { 'course': course, 'place': place, 'start_date': start, 'end_date': end, 'id': idEl };
        console.log(JSON.stringify(courseToAdd));
        // connect to API,send method and body value to API
        fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses&id=' + idEl, {
            method: 'PUT',
            body: JSON.stringify(courseToAdd)

        })
            .then((response) => {

                response.json();
            })
            .then(data => {
                adGetCourses();

            }).catch((error) => {

                console.log("Error: ", error);
            })

    }
}
// contact to API and print JSON container
function deleteCourse(id) {


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
function unvis_form() {
    edit_form.classList.remove('form_visible');
}