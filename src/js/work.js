
// // Create variable
// var works_table= document.getElementById("works_table");



// // louad the page
// window.addEventListener("load", getWorks);

// // contact to API and print JSON container
// function getWorks() {
//     works_table.innerHTML = "";

//     fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works')
//         .then(response => response.json())
//         .then(data => {

//             data.forEach((item) => {
//                 works_table.innerHTML += `<tr>
//                     <td>${item.work}</td>
//                     <td>${item.place}</td>
//                     <td>${item.start_date}</td>
//                     <td> ${item.end_date}</td>
                   
//                 </tr>`
//             })
//         })
// }