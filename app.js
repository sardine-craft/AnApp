fetch("https://api.publicapis.org/entries")
.then(response => response.json())
.then(getTheAPIs);

function getTheAPIs(arkgs) {
    //log Agks
    console.log(arkgs);
    //add a handle to the-stuff (APIs)
    let APIs = document.getElementById("the-stuff");

    //say number of APIs
    document.getElementById("APINumber").innerHTML = arkgs.count;
 
    //declare var to keep track of APIs
    var n = 1;

    //add every API to APIs
    for (let igg of arkgs.entries) {
        //declare variables
        let para = document.createElement("a");
        let breack = document.createElement("br");

        //add a break
        APIs.appendChild(breack);

        //give para attributes
        para.setAttribute("href", igg.Link);
        para.setAttribute("target", "_none");

        //add html to para
        para.innerHTML = n + ". " + igg.API + " - " + igg.Description + " - Base link: " + igg.Link;

        //append para to APIs.
        APIs.appendChild(para);

        //positively change API number
        n++;
    }

}