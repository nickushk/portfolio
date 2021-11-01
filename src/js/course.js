

// // Create variable
// var studier_table= document.getElementById("courses_table");


// // louad the page
// window.addEventListener("load", getCourses);




// // contact to API and print JSON container
// function getCourses() {
//     studier_table.innerHTML = "";

//     fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses')
//         .then(response => response.json())
//         .then(data => {

//             data.forEach((item) => {
//                 studier_table.innerHTML += `<tr>
//                     <td>${item.course}</td>
//                     <td>${item.place}</td>
//                     <td>${item.start_date}</td>
//                     <td> ${item.end_date}</td>
                   
//                 </tr>`
//             })
//         })
// }

