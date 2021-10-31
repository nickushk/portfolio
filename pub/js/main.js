"use strict";var idEl,edit_form=document.getElementById("edit_course_form"),ad_studier_table=document.getElementById("ad_courses_table"),ad_course_place=document.getElementById("place"),ad_course=document.getElementById("course"),ad_course_start=document.getElementById("start"),ad_course_end=document.getElementById("end"),ad_course_btn=document.getElementById("addC"),ed_course_place=document.getElementById("edit_place"),ed_course=document.getElementById("edit_course"),ed_course_start=document.getElementById("edit_start"),ed_course_end=document.getElementById("edit_end"),ed_course_btn=document.getElementById("editC"),admin=!1;function adGetCourses(){ad_studier_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses").then((e=>e.json())).then((e=>{e.forEach((e=>{ad_studier_table.innerHTML+=`<tr>\n                <td>${e.course}</td>\n                <td>${e.place}</td>\n                <td>${e.start_date}</td>\n                <td> ${e.end_date}</td>\n                <td> <button  class="edit_btn" onClick="setId(${e.id})"><a href="#edit_course"> REDIGERA</a> </button>\n                <td> <button class="delete_btn" onClick="deleteCourse(${e.id})"> RADERA</button>\n                </tr>`}))}))}function addCourse(){let e={course:ad_course.value,place:ad_course_place.value,start_date:ad_course_start.value,end_date:ad_course_end.value};fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json()})).then((e=>{adGetCourses()})).catch((e=>{console.log("Fetch Error!!",e)}))}function setId(e){idEl=e}function updateCourse(e){let t=ed_course.value,n=ed_course_place.value,d=ed_course_start.value,o=ed_course_end.value;console.log(t+"--"+n+"--"+d+"--"+e+"--"),edit_form.classList.add("form_visible");let r={course:t,place:n,start_date:d,end_date:o,id:e};console.log(JSON.stringify(r)),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses&id="+e,{method:"PUT",body:JSON.stringify(r)}).then((e=>{e.json()})).then((e=>{adGetCourses()})).catch((e=>{console.log("Error: ",e)}))}function deleteCourse(e){fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses&id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{adGetCourses()})).catch((e=>{console.log("Error: ",e)}))}function unvis_form(){edit_form.classList.remove("form_visible")}window.addEventListener("load",adGetCourses),ad_course_btn.addEventListener("click",(function(e){e.preventDefault(),addCourse()})),ed_course_btn.addEventListener("click",(function(e){e.preventDefault(),updateCourse(idEl)}));var ad_project_table=document.getElementById("ad_project_table"),ad_project_place=document.getElementById("project_place"),ad_project=document.getElementById("project"),ad_image_link=document.getElementById("project_start"),ad_project_end=document.getElementById("project_end"),ad_project_btn=document.getElementById("project_addC"),ed_project_place=document.getElementById("edit_place_project"),ed_project=document.getElementById("edit_project"),ed_image_link=document.getElementById("edit_start_project"),ed_project_end=document.getElementById("edit_end_project"),ed_project_btn=document.getElementById("editC_project");function adGetProjects(){ad_project_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects").then((e=>e.json())).then((e=>{e.forEach((e=>{ad_project_table.innerHTML+=`<tr>\n                <td>${e.project}</td>\n                <td>${e.about}</td>\n                <td>${e.image_link}</td>\n                <td> ${e.link}</td>\n                <td> <button class="edit_btn" onClick="setProjectId(${e.id})"><a href="#edit_project_form"> REDIGERA</a> </button>\n                <td> <button class="delete_btn" onClick="deleteEl(${e.id})"> RADERA</button>\n                </tr>`}))}))}function addProject(){let e={project:ad_project.value,place:ad_project_place.value,start_date:ad_image_link.value,end_date:ad_project_end.value};fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json()})).then((e=>{adGetProjects()})).catch((e=>{console.log("Fetch Error!!",e)}))}function setProjectId(e){wId=e}function updateproject(e){ed_work.value;let t=ed_work_place.value,n=ed_work_start.value,d=ed_work_end.value,o={project:project,place:t,start_date:n,end_date:d,id:e};console.log(JSON.stringify(o)),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id="+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>{e.json()})).then((e=>{adGetProjects()})).catch((e=>{console.log("Error: ",e)}))}function deleteEl(e){fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{adGetWorks()})).catch((e=>{console.log("Error: ",e)}))}window.addEventListener("load",adGetProjects),ad_project_btn.addEventListener("click",(function(e){e.preventDefault(),adGetProjects()})),editC_project.addEventListener("click",(function(e){e.preventDefault(),updateproject(wId)}));ad_project_table=document.getElementById("ad_works_table"),ad_project_place=document.getElementById("work_place");var wId,ad_work=document.getElementById("work"),ad_work_start=document.getElementById("work_start"),ad_work_end=document.getElementById("work_end"),ad_work_btn=document.getElementById("work_addC"),ed_work_place=document.getElementById("edit_place_work"),ed_work=document.getElementById("edit_work"),ed_work_start=document.getElementById("edit_start_work"),ed_work_end=document.getElementById("edit_end_work"),ed_work_btn=document.getElementById("editC_work");function adGetWorks(){ad_project_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works").then((e=>e.json())).then((e=>{e.forEach((e=>{ad_project_table.innerHTML+=`<tr>\n                <td>${e.work}</td>\n                <td>${e.place}</td>\n                <td>${e.start_date}</td>\n                <td> ${e.end_date}</td>\n                <td> <button class="edit_btn" onClick="setWorkId(${e.id})"><a href="#edit_work_form"> REDIGERA</a> </button>\n                <td> <button class="delete_btn" onClick="deleteEl(${e.id})"> RADERA</button>\n                </tr>`}))}))}function addWork(){let e={work:ad_work.value,place:ad_project_place.value,start_date:ad_work_start.value,end_date:ad_work_end.value};fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.json()})).then((e=>{adGetWorks()})).catch((e=>{console.log("Fetch Error!!",e)}))}function setWorkId(e){wId=e}function updateWork(e){let t={work:ed_work.value,place:ed_work_place.value,start_date:ed_work_start.value,end_date:ed_work_end.value,id:e};console.log(JSON.stringify(t)),fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id="+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>{e.json()})).then((e=>{adGetWorks()})).catch((e=>{console.log("Error: ",e)}))}function deleteEl(e){fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id="+e,{method:"DELETE"}).then((e=>e.json())).then((e=>{adGetWorks()})).catch((e=>{console.log("Error: ",e)}))}window.addEventListener("load",adGetWorks),ad_work_btn.addEventListener("click",(function(e){e.preventDefault(),addWork()})),editC_work.addEventListener("click",(function(e){e.preventDefault(),updateWork(wId)}));var studier_table=document.getElementById("courses_table");function getCourses(){studier_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses").then((e=>e.json())).then((e=>{e.forEach((e=>{studier_table.innerHTML+=`<tr>\n                    <td>${e.course}</td>\n                    <td>${e.place}</td>\n                    <td>${e.start_date}</td>\n                    <td> ${e.end_date}</td>\n                   \n                </tr>`}))}))}function errorForm(){var e=document.forms.forms.fname.value;if(""==e||null==e)return alert("Inkorrekt input!"),!1}window.addEventListener("load",getCourses);var user=document.getElementById("username").value,pass=document.getElementById("pass").value,form=document.getElementById("form"),log_btn=document.getElementById("log_btn"),corect_info=!1;function getUser(){form.innerHTML="";fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=user").then((e=>e.json())).then((e=>{e.forEach((e=>{console.log(e.user===user&&e.pass===pass)}))}))}window.addEventListener("load",getUser),log_btn.addEventListener("click",(function(e){e.preventDefault(),getUser()}));const menu_btn=document.querySelector(".menu_btn");let menu_open=!1;const nav_list=document.querySelector(".navbar_mob");menu_btn.addEventListener("click",(function(){menu_open?(menu_btn.classList.remove("open"),nav_list.classList.remove("visible"),menu_open=!1):(menu_btn.classList.add("open"),nav_list.classList.add("visible"),menu_open=!0)}));var projects_item=document.getElementById("projects_item");function getProjects(){projects_item.innerHTML="";let e=1;fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects").then((e=>e.json())).then((t=>{t.forEach((t=>{projects_item.innerHTML+=`<div class="webbsite">\n                <div class="web_info">\n                    <h4>0${e++}. ${t.project}</h4>\n\n                    <p>${t.about}</p>\n                    <a href="${t.link}">TILL WEBBPLATSEN<i class="fas fa-external-link-alt"></i></a>\n                </div>\n               \n                <div class="web_img">\n                    <img src="${t.image_link}" alt="">\n                </div`}))}))}window.addEventListener("load",getProjects);var works_table=document.getElementById("works_table");function getWorks(){works_table.innerHTML="",fetch("https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works").then((e=>e.json())).then((e=>{e.forEach((e=>{works_table.innerHTML+=`<tr>\n                    <td>${e.work}</td>\n                    <td>${e.place}</td>\n                    <td>${e.start_date}</td>\n                    <td> ${e.end_date}</td>\n                   \n                </tr>`}))}))}window.addEventListener("load",getWorks);
//# sourceMappingURL=main.js.map