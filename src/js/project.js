if (index_page === true) {
    // Create variable
    var projects_item = document.getElementById("projects_item");

    // louad the page
    window.addEventListener("load", getProjects);

    // contact to API and print JSON container
    function getProjects() {
        projects_item.innerHTML = "";
        let tempnr = 1;

        fetch('https://studenter.miun.se/~niku2001/writeable/webb3/api/api.php?table=projects')
            .then(response => response.json())
            .then(data => {

                data.forEach((item) => {
                    projects_item.innerHTML += `<div class="webbsite">
                <div class="web_info">
                    <h4>0${tempnr++}. ${item.project}</h4>

                    <p>${item.about}</p>
                    <a href="${item.link}">TILL WEBBPLATSEN<i class="fas fa-external-link-alt"></i></a>
                </div>
               
                <div class="web_img">
                    <img src="${item.image_link}" alt="">
                </div`

                })
            })
    }
}