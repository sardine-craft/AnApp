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
    //render
    render(APIs, arkgs.entries);

    var input = document.getElementById("searchBar");

    input.addEventListener("keyup", function (e) {
        APIs.innerHTML = "";
        render(APIs, arkgs.entries, e.target.value);
    });


}