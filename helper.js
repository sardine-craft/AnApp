function render(container, entries, query) {
    //this is the query
    let queryArray = (query || "").toLowerCase()
        .split(/\s/)
        .filter(x => x);

    //declare var to keep track of APIs
    var n = 0;

    //add every API to APIs
    for (let igg of entries) {

        //this is the APIs value
        const text = (igg.API + " " + igg.Description).toLowerCase();

        if (queryArray.length === 0 || queryArray.every(qa => text.indexOf(qa) > -1)) {

            //declare variables
            let para = document.createElement("a");
            let breack = document.createElement("br");

            //add a break
            container.appendChild(breack);

            //give para attributes
            para.setAttribute("href", igg.Link);
            para.setAttribute("target", "_none");

            //add html to para
            para.innerHTML = (n + 1) + ". " + igg.API + " - " + igg.Description + " - " + igg.Link;

            //append para to APIs.
            container.appendChild(para);

            //positively change API number
            n += 1;

            //say number of APIs
            document.getElementById("APINumber").innerHTML = n;
            
        } else if (n === 0) {
            document.getElementById("APINumber").innerHTML = "None found"
        }

    }

}

function loadPageContent () {
    let loadItem = document.getElementById("loadDisplay");
    loadItem.style.display = "none";
}

/**
 * @param {Event} e 
 */
function filterAccordionEventListener(e) {
    /**
     * @type {HTMLButtonElement}
     */
    const btn = e.target;

    /**
     * @type {HTMLDivElement}
     */
    const filters_container = document.getElementById("filters_container");

    if (btn.value === "⬇") {
        btn.value = "⬆";
        filters_container.className = "opened";
    } else {
        btn.value = "⬇"
        filters_container.className = "closed";
    }
}