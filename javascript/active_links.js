var getLink = location.pathname;
var listOfSideBarLinks = document.getElementsByClassName("sidebar-link");

function setActiveLink() {
    var selectedLink = scrubHeader();
    /*
        Traverse through the header links and search for the active
        one; any non-active headers have the "activeHeader" class 
        removed.
    */
    for (var i = 0; i < listOfSideBarLinks.length; i++){
        if (listOfSideBarLinks[i].href.indexOf(selectedLink) > -1){
            listOfSideBarLinks[i].className += " activeHeader";
        }
        else {
            listOfSideBarLinks[i].className.replace(" activeHeader", "");
        }
    }
}


/*
    Returns the name of the page the user is on.
*/
function scrubHeader(){
    var splitLink = getLink.split("/");
    var pageName = splitLink[splitLink.length-1].replace(".html", "");

    if (pageName == "") {
        pageName = "index";
    }

    return pageName;
}