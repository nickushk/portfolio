if (admin_project === true) {
    // create variable
    var ad_project_table = document.getElementById("ad_project_table");
    var ad_project_form = document.getElementById("ad_project_form");
    var ed_project_form = document.getElementById("edit_project_form");
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
                    ad_project_table.innerHTML += `
                    <p></p>
                    <div>
                    <h4>Title</h4>
                    <i>${item.project}</i>
                    </div>
                    <div>
                    <h4>Plats</h4>
                    <i>${item.about}</i>
                    </div>
                    <div>
                    <h4>Startdatum</h4>
                    <i>${item.image_link}</i>
                    </div>
                    <div>
                    <h4>Slutdatum</h4>
                    <i> ${item.link}</i>
                    </div>
                    <div>
                    <h4>Admin</h4>
                    <div class="cub_btn">
                <button  class="edit_btn" onClick="setProjectId(${item.id})"><a href="#edit_project_form">REDIGERA</a> </button>
                <button class="delete_btn" onClick="deleteProject(${item.id})"><a href="#ad_project_table"> RADERA</a> </button>
                </div>`

                })
            })
    }

    // send element to API
    function addProject() {
        let project = ad_project.value;
        let about = ad_about.value;
        let image_link = ad_image_link.value;
        let link = ad_link.value;
        if (project === "" || about === "" || image_link === "" || link === "") {
            ad_project_form.innerHTML += " <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";

        } else {
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

            ad_project_form.innerHTML += " <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item lagras!</p>";
        }
    }

    // set Id as globale variable
    function setProjectId(id) {
        wId = id;
    }
    // send element to API
    function updateProject(wId) {
        let project = ed_project.value;
        let about = ed_about.value;
        let image_link = ed_image_link.value;
        let link = ed_link.value;

        if(project === "" || about === "" || image_link === "" || link === "" || wId==="") {
            ed_project_form.innerHTML += " <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";

        } else {

            let projectToAdd = { 'project': project, 'about': about, 'image_link': image_link, 'link': link, 'id': wId };
            console.log(JSON.stringify(projectToAdd));
            // connect to API,send method and body value to API
            fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects&id=' + wId, {
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

            ed_project_form.innerHTML += " <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item uppdateras!</p>";
        }
    }
    // contact to API and print JSON container
    function deleteProject(id) {
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
}