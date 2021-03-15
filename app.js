fetch("https://api.publicapis.org/entries")
.then(response => response.json())
.then(getTheAPIs);

function getTheAPIs(arkgs) {
    console.log(arkgs);
    let APIs = document.getElementById("the-stuff");
    for (let igg of arkgs.entries) {
        let para = document.createElement("a");
        let breack = document.createElement("br");
        APIs.appendChild(breack);
        para.setAttribute("href", igg.Link);
        para.setAttribute("target", "_none");
        para.innerHTML = igg.API + " - " + igg.Description;
        APIs.appendChild(para);
    }

}