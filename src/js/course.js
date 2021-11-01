if (index_page === true) {

    // Create variable
    var studier_table = document.getElementById("courses_table");


    // louad the page
    window.addEventListener("load", getCourses);

    // contact to API and print JSON container
    function getCourses() {
        studier_table.innerHTML = "";
        let item_nr = 0;

        fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=courses')
            .then(response => response.json())
            .then(data => {

                data.forEach((item) => {
                    studier_table.innerHTML += `
                    <p></p>
                    <div>
                    <h4>Namn</h4>
                    <i>${item.course}</i>
                    </div>
                    <div>
                    <h4>Plats</h4>
                    <i>${item.place}</i>
                    </div>
                    <div>
                    <h4>Startdatum</h4>
                    <i>${item.start_date}</i>
                    </div>
                    <div>
                    <h4>Slutdatum</h4>
                    <i> ${item.end_date}</i>
                    </div>`
                
                })
            })
    }
}
