var showDesc = false;

function toggleDescription(targetDesc){
    var desc = document.getElementById(targetDesc);
    showDesc = !showDesc;

    if (showDesc) {
        desc.className = "job-tasks-visible";
    }
    else {
        desc.className = "job-tasks-hidden";
    }
    console.log(showDesc);
    console.log(desc.className);
}