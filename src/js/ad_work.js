
// // create variable
// var ad_project_table = document.getElementById("ad_works_table");
// var ad_project_place = document.getElementById("work_place");
// var ad_work = document.getElementById("work");
// var ad_work_start = document.getElementById("work_start");
// var ad_work_end = document.getElementById("work_end");
// var ad_work_btn = document.getElementById("work_addC");
// var ed_work_place = document.getElementById("edit_place_work");
// var ed_work = document.getElementById("edit_work");
// var ed_work_start = document.getElementById("edit_start_work");
// var ed_work_end = document.getElementById("edit_end_work");
// var ed_work_btn = document.getElementById("editC_work");
// var wId;

// window.addEventListener("load", adGetWorks);

// // with submit do it
// ad_work_btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     addWork();
// });
// // with submit do it
// editC_work.addEventListener("click", function (e) {
//     e.preventDefault();
//     updateWork(wId);
// });

// // contact to API and print JSON container for admin
// function adGetWorks() {
//     ad_project_table.innerHTML = "";

//     fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works')
//         .then(response => response.json())
//         .then(data => {

//             data.forEach((item) => {
//                 ad_project_table.innerHTML += `<tr>
//                 <td>${item.work}</td>
//                 <td>${item.place}</td>
//                 <td>${item.start_date}</td>
//                 <td> ${item.end_date}</td>
//                 <td> <button class="edit_btn" onClick="setWorkId(${item.id})"><a href="#edit_work_form"> REDIGERA</a> </button>
//                 <td> <button class="delete_btn" onClick="deleteEl(${item.id})"> RADERA</button>
//                 </tr>`

//             })
//         })
// }

// // send element to API
// function addWork() {
//     let work = ad_work.value;
//     let place = ad_project_place.value;
//     let start = ad_work_start.value;
//     let end = ad_work_end.value;

//     let workToAdd = { 'work': work, 'place': place, 'start_date': start, 'end_date': end };
   

//     // connect to API,send method and body value to API
//     fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(workToAdd)

//     })
//         .then((response) => {

//             response.json();
//         })
//         .then(data => {
//             adGetWorks();

//         }).catch((error) => {

//             console.log('Fetch Error!!', error);
//         })


// }

// // set Id as globale variable
// function setWorkId(id){
//     wId = id;
// }
// // send element to API
// function updateWork(wId) {
//     let work = ed_work.value;
//     let place = ed_work_place.value;
//     let start = ed_work_start.value;
//     let end = ed_work_end.value;
    


//     let workToAdd = { 'work': work, 'place': place, 'start_date': start, 'end_date': end, 'id': wId};
//     console.log(JSON.stringify(workToAdd));
//     // connect to API,send method and body value to API
//     fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id='+ wId, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(workToAdd)

//     })
//         .then((response) => {

//             response.json();
//         })
//         .then(data => {
//             adGetWorks();

//         }).catch((error) => {

//             console.log("Error: ", error);
//         })


// }
// // contact to API and print JSON container
// function deleteEl(id) {
//     fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works&id=' + id, {

//         method: "DELETE",
//     })
//         .then(response => response.json())
//         .then(data => {

//             adGetWorks();

//         }).catch((error) => {
//             console.log("Error: ", error);
//         })
// }