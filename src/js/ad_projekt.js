"use strict";
// create variable
var ad_project_table = document.getElementById("ad_project_table");
var ad_project_place = document.getElementById("project_place");
var ad_project = document.getElementById("project");
var ad_image_link = document.getElementById("project_start");
var ad_project_end = document.getElementById("project_end");
var ad_project_btn = document.getElementById("project_addC");
var ed_project_place = document.getElementById("edit_place_project");
var ed_project = document.getElementById("edit_project");
var ed_image_link = document.getElementById("edit_start_project");
var ed_project_end = document.getElementById("edit_end_project");
var ed_project_btn = document.getElementById("editC_project");
var wId;

window.addEventListener("load", adGetProjects);

// with submit do it
ad_project_btn.addEventListener("click", function (e) {
    e.preventDefault();
    adGetProjects();
});
// with submit do it
editC_project.addEventListener("click", function (e) {
    e.preventDefault();
    updateproject(wId);
});

// contact to API and print JSON container for admin
function adGetProjects() {
    ad_project_table.innerHTML = "";

    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects')
        .then(response => response.json())
        .then(data => {

            data.forEach((item) => {
                ad_project_table.innerHTML += `<tr>
                <td>${item.project}</td>
                <td>${item.about}</td>
                <td>${item.image_link}</td>
                <td> ${item.link}</td>
                <td> <button class="edit_btn" onClick="setProjectId(${item.id})"><a href="#edit_project_form"> REDIGERA</a> </button>
                <td> <button class="delete_btn" onClick="deleteEl(${item.id})"> RADERA</button>
                </tr>`

            })
        })
}

// send element to API
function addProject() {
    let project = ad_project.value;
    let place = ad_project_place.value;
    let start = ad_image_link.value;
    let end = ad_project_end.value;

    let projectToAdd = { 'project': project, 'place': place, 'start_date': start, 'end_date': end };
   

    // connect to API,send method and body value to API
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectToAdd)

    })
        .then((response) => {

            response.json();
        })
        .then(data => {
            adGetProjects();

        }).catch((error) => {

            console.log('Fetch Error!!', error);
        })


}

// set Id as globale variable
function setProjectId(id){
    wId = id;
}
// send element to API
function updateproject(wId) {
    let work = ed_work.value;
    let place = ed_work_place.value;
    let start = ed_work_start.value;
    let end = ed_work_end.value;
    


    let projectToAdd = { 'project': project, 'place': place, 'start_date': start, 'end_date': end, 'id': wId};
    console.log(JSON.stringify(projectToAdd));
    // connect to API,send method and body value to API
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id='+ wId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectToAdd)

    })
        .then((response) => {

            response.json();
        })
        .then(data => {
            adGetProjects();

        }).catch((error) => {

            console.log("Error: ", error);
        })


}
// contact to API and print JSON container
function deleteEl(id) {
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id=' + id, {

        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {

            adGetWorks();

        }).catch((error) => {
            console.log("Error: ", error);
        })
}