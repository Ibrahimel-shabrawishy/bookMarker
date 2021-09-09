"use strict";
let siteNameInput = document.getElementById("siteName");
let siteUrlInput = document.getElementById("siteUrl");
let errorNameInput = document.getElementById("errorName").style.display = "none";
let errorUrlInput = document.getElementById("errorUrl").style.display = "none";



let element;

if (localStorage.getItem("urlList") == null) {
    element = [];
} else {
    element = JSON.parse(localStorage.getItem("urlList"));
    display();
}


let btn = document.querySelector("#btn");

btn.addEventListener("click",
    function addSite() {

        let str = "";
        if (validation() == true) {
            let Sites = {
                name: siteNameInput.value,
                url: siteUrlInput.value,
            }
            element.push(Sites);
            localStorage.setItem("urlList", JSON.stringify(element));
            display();
            clearSites();
        } else {

            if (siteNameInput.value == "" && siteUrlInput.value == "") {
                document.getElementById("errorName").style.display = "block";
                document.getElementById("errorUrl").style.display = "block";

            } else if (siteUrlInput.value == "") {
                document.getElementById("errorUrl").style.display = "block";

            } else if (siteNameInput.value = "") {
                document.getElementById("errorName").style.display = "block";
            }
        }
    })





function clearSites() {
    siteNameInput.value = "";
    siteUrlInput.value = "";
}





function display() {
    var cartonaa = "";
    for (var i = 0; i < element.length; i++) {
        cartonaa += ` 
       <div class="content">
<h2 class="d-flex fs-1 text-light">${element[i].name}</h2>

<a class="btn btn-primary " href="http://${element[i].url}"target="_blank">Visit</a>

<button class="btn btn-danger" onclick="deleteItem(${i})">Delete</button>

       </div>
`
    }
    document.getElementById("bookmarkList").innerHTML = cartonaa;
}






function validation() {
    if (siteName.value != "" && siteUrl.value != "") {
        return true;
    } else {
        return false;
    }
}







function deleteItem(index) {
    element.splice(index, 1)
    localStorage.setItem("urlList", JSON.stringify(element));
    display();
}