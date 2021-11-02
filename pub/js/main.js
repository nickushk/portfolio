if(!0===admin_course){var idEl,edit_form=document.getElementById("edit_course_form"),formInput=document.getElementsByClassName("form_input"),ad_studier_table=document.getElementById("ad_courses_table"),ad_course_place=document.getElementById("place"),ad_course=document.getElementById("course"),ad_course_start=document.getElementById("start"),ad_course_form=document.getElementById("add_course"),ad_course_end=document.getElementById("end"),ad_course_btn=document.getElementById("addCourse"),ed_course_place=document.getElementById("edit_place"),ed_course=document.getElementById("edit_course"),ed_course_start=document.getElementById("edit_start"),ed_course_end=document.getElementById("edit_end"),ed_course_btn=document.getElementById("editC"),admin=!1;function adGetCourses(){ad_studier_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses").then((e=>e.json())).then((e=>{e.forEach((e=>{ad_studier_table.innerHTML+=`<p></p>\n                    <div>\n                    <h4>Title</h4>\n                    <i>${e.course}</i>\n                    </div>\n                    <div>\n                    <h4>Plats</h4>\n                    <i>${e.place}</i>\n                    </div>\n                    <div>\n                    <h4>Startdatum</h4>\n                    <i>${e.start_date}</i>\n                    </div>\n                    <div>\n                    <h4>Slutdatum</h4>\n                    <i> ${e.end_date}</i>\n                    </div>\n                    <div>\n                    <h4>Admin</h4>\n                    <div class="cub_btn">\n                <button  class="edit_btn" onClick="setId(${e.id})"><a href="#edit_course">REDIGERA</a> </button>\n                <button class="delete_btn" onClick="deleteCourse(${e.id})"><a href="#edit_course"> RADERA</a> </button>\n                </div>\n                `}))}))}function addCourse(){let e=ad_course.value,t=ad_course_place.value,n=ad_course_start.value,d=ad_course_end.value;if(""===e||""===t)ad_course_form.innerHTML+=" <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";else{let o={course:e,place:t,start_date:n,end_date:d};fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>{e.json()})).then((e=>{adGetCourses()})).catch((e=>{console.log("Fetch Error!!",e)})),edit_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item lagras!</p>"}}function setId(e){idEl=e}function updateCourse(e){let t=ed_course.value,n=ed_course_place.value,d=ed_course_start.value,o=ed_course_end.value;if(""===t||""===n||""===e)edit_form.innerHTML+=" <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";else{console.log(t+"--"+n+"--"+d+"--"+e+"--");let i={course:t,place:n,start_date:d,end_date:o,id:e};console.log(JSON.stringify(i)),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses&id="+e,{method:"PUT",body:JSON.stringify(i)}).then((e=>{e.json()})).then((e=>{adGetCourses()})).catch((e=>{console.log("Error: ",e)})),edit_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item uppdateras!</p>"}}function deleteCourse(e){fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses&id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{adGetCourses()})).catch((e=>{console.log("Error: ",e)}))}function unvis_form(){edit_form.classList.remove("form_visible")}window.addEventListener("load",adGetCourses),ad_course_btn.addEventListener("click",(function(e){e.preventDefault(),addCourse()})),ed_course_btn.addEventListener("click",(function(e){e.preventDefault(),updateCourse(idEl)}))}if(!0===admin_project){var ad_project_table=document.getElementById("ad_project_table"),ad_project_form=document.getElementById("ad_project_form"),ed_project_form=document.getElementById("edit_project_form"),ad_about=document.getElementById("about"),ad_project=document.getElementById("project"),ad_image_link=document.getElementById("image_link"),ad_link=document.getElementById("link"),ad_project_btn=document.getElementById("project_addC"),ed_project_btn=document.getElementById("editC_project"),ed_project=document.getElementById("edit_project"),ed_about=document.getElementById("edit_about"),ed_image_link=document.getElementById("edit_image_link"),ed_link=document.getElementById("edit_link");function adGetProjects(){ad_project_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects").then((e=>e.json())).then((e=>{e.forEach((e=>{ad_project_table.innerHTML+=`\n                    <p></p>\n                    <div>\n                    <h4>Title</h4>\n                    <i>${e.project}</i>\n                    </div>\n                    <div>\n                    <h4>Plats</h4>\n                    <i>${e.about}</i>\n                    </div>\n                    <div>\n                    <h4>Startdatum</h4>\n                    <i>${e.image_link}</i>\n                    </div>\n                    <div>\n                    <h4>Slutdatum</h4>\n                    <i> ${e.link}</i>\n                    </div>\n                    <div>\n                    <h4>Admin</h4>\n                    <div class="cub_btn">\n                <button  class="edit_btn" onClick="setProjectId(${e.id})"><a href="#edit_project_form">REDIGERA</a> </button>\n                <button class="delete_btn" onClick="deleteProject(${e.id})"><a href="#ad_project_table"> RADERA</a> </button>\n                </div>`}))}))}function addProject(){let e=ad_project.value,t=ad_about.value,n=ad_image_link.value,d=ad_link.value;if(""===e||""===t||""===n||""===d)ad_project_form.innerHTML+=" <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";else{let o={project:e,about:t,image_link:n,link:d};fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>{e.json()})).then((e=>{adGetProjects()})).catch((e=>{console.log("Fetch Error!!",e)})),ad_project_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item lagras!</p>"}}function setProjectId(e){wId=e}function updateProject(e){let t=ed_project.value,n=ed_about.value,d=ed_image_link.value,o=ed_link.value;if(""===t||""===n||""===d||""===o||""===e)ed_project_form.innerHTML+=" <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";else{let i={project:t,about:n,image_link:d,link:o,id:e};console.log(JSON.stringify(i)),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects&id="+e,{method:"PUT",body:JSON.stringify(i)}).then((e=>{e.json()})).then((e=>{adGetProjects()})).catch((e=>{console.log("Error: ",e)})),ed_project_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item uppdateras!</p>"}}function deleteProject(e){console.log(e),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects&id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{adGetProjects()})).catch((e=>{console.log("Error: ",e)}))}window.addEventListener("load",adGetProjects),ad_project_btn.addEventListener("click",(function(e){e.preventDefault(),addProject()})),ed_project_btn.addEventListener("click",(function(e){e.preventDefault(),updateProject(wId)}))}if(!0===admin_work){var wId,ad_work_table=document.getElementById("ad_work_table"),ed_work_form=document.getElementById("edit_work_form"),ad_work_form=document.getElementById("add_work_form"),ad_work_place=document.getElementById("work_place"),ad_work=document.getElementById("work"),ad_work_start=document.getElementById("work_start"),ad_work_end=document.getElementById("work_end"),ad_work_btn=document.getElementById("work_addC"),ed_work_place=document.getElementById("edit_place_work"),ed_work=document.getElementById("edit_work"),ed_work_start=document.getElementById("edit_start_work"),ed_work_end=document.getElementById("edit_end_work"),ed_work_btn=document.getElementById("editC_work");const e="https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works";function adGetWorks(){ad_work_table.innerHTML="",fetch(e).then((e=>e.json())).then((e=>{e.forEach((e=>{ad_work_table.innerHTML+=`\n                    <p></p>\n                    <div>\n                    <h4>Title</h4>\n                    <i>${e.work}</i>\n                    </div>\n                    <div>\n                    <h4>Plats</h4>\n                    <i>${e.place}</i>\n                    </div>\n                    <div>\n                    <h4>Startdatum</h4>\n                    <i>${e.start_date}</i>\n                    </div>\n                    <div>\n                    <h4>Slutdatum</h4>\n                    <i> ${e.end_date}</i>\n                    </div>\n                    <div>\n                    <h4>Admin</h4>\n                    <div class="cub_btn">\n                <button  class="edit_btn" onClick="setWorkId(${e.id})"><a href="#edit_work_form">REDIGERA</a> </button>\n                <button class="delete_btn" onClick="deleteWork(${e.id})"><a href="#ad_work_table"> RADERA</a> </button>\n                </div>\n                    `}))}))}function addWork(){let t=ad_work.value,n=ad_work_place.value,d=ad_work_start.value,o=ad_work_end.value;if(""===t||""===n)ad_work_form.innerHTML+=" <p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";else{let i={work:t,place:n,start_date:d,end_date:o};fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>{e.json()})).then((e=>{adGetWorks()})).catch((e=>{console.log("Fetch Error!!",e)})),ad_work_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item lagras!</p>"}}function setWorkId(e){wId=e}function updateWork(e){let t=ed_work.value,n=ed_work_place.value,d=ed_work_start.value,o=ed_work_end.value;if(""===t||""===n||""===idEl)ed_work_form.innerHTML+="<p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt imatning!</p>";else{let i={work:t,place:n,start_date:d,end_date:o,id:e};console.log(JSON.stringify(i)),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id="+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>{e.json()})).then((e=>{adGetWorks()})).catch((e=>{console.log("Error: ",e)})),ed_work_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Item uppdateras!</p>"}}function deleteWork(e){fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{adGetWorks()})).catch((e=>{console.log("Error: ",e)}))}window.addEventListener("load",adGetWorks),ad_work_btn.addEventListener("click",(function(e){e.preventDefault(),addWork()})),editC_work.addEventListener("click",(function(e){e.preventDefault(),updateWork(wId)}))}if(!0===index_page){var studier_table=document.getElementById("courses_table");function getCourses(){studier_table.innerHTML="";fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses").then((e=>e.json())).then((e=>{e.forEach((e=>{studier_table.innerHTML+=`\n                    <p></p>\n                    <div>\n                    <h4>Namn</h4>\n                    <i>${e.course}</i>\n                    </div>\n                    <div>\n                    <h4>Plats</h4>\n                    <i>${e.place}</i>\n                    </div>\n                    <div>\n                    <h4>Startdatum</h4>\n                    <i>${e.start_date}</i>\n                    </div>\n                    <div>\n                    <h4>Slutdatum</h4>\n                    <i> ${e.end_date}</i>\n                    </div>`}))}))}window.addEventListener("load",getCourses)}var user=document.getElementById("username").value,pass=document.getElementById("pass").value,login_form=document.getElementById("login_form"),log_btn=document.getElementById("log_btn"),corect_info=!1;function getUser(){login_form.innerHTML="";let e=user.value,t=pass.value;if(""===e||""===t)login_form.innerHTML+="<p style='color: red ; font-size: 20px; padding: 1rem;'  >*Inkorrekt användarnamn/lösenord!</p>";else{let n={user:e,pass:t};fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?login=login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{login_form.innerHTML+=" <p style='color: green ; font-size: 20px; padding: 1rem;'  >*Du är inloggad!</p>"}))}}if(log_btn.addEventListener("click",(function(e){e.preventDefault(),getUser()})),!0===index_page){const e=document.querySelector(".menu_btn");let t=!1;const n=document.querySelector(".navbar_mob");e.addEventListener("click",(function(){t?(e.classList.remove("open"),n.classList.remove("visible"),t=!1):(e.classList.add("open"),n.classList.add("visible"),t=!0)}))}if(!0===index_page){var projects_item=document.getElementById("projects_item");function getProjects(){projects_item.innerHTML="";let e=1;fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects").then((e=>e.json())).then((t=>{t.forEach((t=>{projects_item.innerHTML+=`<div class="webbsite">\n                <div class="web_info">\n                    <h4>0${e++}. ${t.project}</h4>\n\n                    <p>${t.about}</p>\n                    <a href="${t.link}">TILL WEBBPLATSEN<i class="fas fa-external-link-alt"></i></a>\n                </div>\n               \n                <div class="web_img">\n                    <img src="${t.image_link}" alt="">\n                </div`}))}))}window.addEventListener("load",getProjects)}if(!0===index_page){var works_table=document.getElementById("works_table");function getWorks(){works_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works").then((e=>e.json())).then((e=>{e.forEach((e=>{works_table.innerHTML+=` <p></p>\n                    <div>\n                    <h4>Title</h4>\n                    <i>${e.work}</i>\n                    </div>\n                    <div>\n                    <h4>Plats</h4>\n                    <i>${e.place}</i>\n                    </div>\n                    <div>\n                    <h4>Startdatum</h4>\n                    <i>${e.start_date}</i>\n                    </div>\n                    <div>\n                    <h4>Slutdatum</h4>\n                    <i> ${e.end_date}</i>\n                    </div>>`}))}))}window.addEventListener("load",getWorks)}
//# sourceMappingURL=main.js.map