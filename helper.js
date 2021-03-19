function render(container, entries, query) {
    //this is the query
    let queryArray = (query || "").toLowerCase()
                                   .split(/\s/)
                                   .filter(x => x);

    //declare var to keep track of APIs
    var n = 1;

    //add every API to APIs
    for (let igg of entries) {

        //this is the APIs value
        const text = (igg.API + " " + igg.Description).toLowerCase();
                //say number of APIs
                document.getElementById("APINumber").innerHTML = n - 1;

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
            para.innerHTML = n + ". " + igg.API + " - " + igg.Description + " - " + igg.Link;

            //append para to APIs.
            container.appendChild(para);

            //positively change API number
            n++;
        }
    }
}