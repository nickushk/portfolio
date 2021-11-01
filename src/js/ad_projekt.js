"use strict";
// create variable
var ad_project_table = document.getElementById("ad_project_table");
var ad_about = document.getElementById("about");
var ad_project = document.getElementById("project");
var ad_image_link = document.getElementById("image_link");
var ad_link = document.getElementById("link");
var ad_project_btn = document.getElementById("project_addC");
var ed_project_btn = document.getElementById("editC_project");
var ed_project = document.getElementById("edit_project");
var ed_about = document.getElementById("edit_about");
var ed_image_link = document.getElementById("edit_image_link");
var ed_link = document.getElementById("edit_link");
var wId;

window.addEventListener("load", adGetProjects);

// with submit do it
ad_project_btn.addEventListener("click", function (e) {
    e.preventDefault();
    addProject();
});
// with submit do it
ed_project_btn.addEventListener("click", function (e) {
    e.preventDefault();
    updateProject(wId);
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
                <td> <button class="delete_btn" onClick="deleteP(${item.id})"> RADERA</button>
                </tr>`

            })
        })
}

// send element to API
function addProject() {
    let project = ad_project.value;
    let about = ad_about.value;
    let image_link = ad_image_link.value;
    let link = ad_link.value;

    let projectToAdd = { 'project': project, 'about': about, 'image_link': image_link, 'link': link };


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
function updateProject(wId) {
    let project = ed_project.value;
    let about = ed_about.value;
    let image_link = ed_image_link.value;
    let link = ed_link.value;
    


    let projectToAdd = { 'project': project, 'about': about, 'image_link': image_link, 'link': link, 'id': wId};
    console.log(JSON.stringify(projectToAdd));
    // connect to API,send method and body value to API
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects&id='+ wId, {
        method: 'PUT',
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
function deleteP(id) {
    console.log(id);
    fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects&id=' + id, {

        method: "DELETE",
    })
        .then(response => response.json())
        .then(data => {

            adGetProjects();

        }).catch((error) => {
            console.log("Error: ", error);
        })
}