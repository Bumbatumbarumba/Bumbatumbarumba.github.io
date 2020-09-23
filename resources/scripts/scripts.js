$(document).ready(function() {
    $(".section-header").click(function() {
        var targetId = $(this).parent().attr("id")
        console.log(targetId)
        if ($(".toggle-section").attr(id) === targetId + "-show") {
            //$(".toggle-section#" + targetId + "-show").text("&#9650;")
            //$(".toggle-section").attr(id) = targetId + "-hide"
        }
        else if ($(".toggle-section").attr(id) === targetId + "-hide") {
            //$(".toggle-section#" + targetId + "-hide").text("&#9660;")
            //$(".toggle-section").attr(id) = targetId + "-show"
        }
    })
  });