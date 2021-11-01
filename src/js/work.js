if (index_page === true) {

    // Create variable
    var works_table = document.getElementById("works_table");

    // louad the page
    window.addEventListener("load", getWorks);

    // contact to API and print JSON container
    function getWorks() {
        works_table.innerHTML = "";

        fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=works')
            .then(response => response.json())
            .then(data => {

                data.forEach((item) => {
                    works_table.innerHTML += ` <p></p>
                    <div>
                    <h4>Title</h4>
                    <i>${item.work}</i>
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
                    </div>>`
                })
            })
    }
}