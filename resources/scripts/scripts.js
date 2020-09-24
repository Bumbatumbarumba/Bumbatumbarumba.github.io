function toggleSection(sectionId) {
    $(".toggle-direction").each(function(index){
        if ($(this).attr("id") === sectionId + "-show") {
            $(this).text("\u25B2") 
            $(this).attr("id", sectionId + "-hide")
            $(".section-content#" + sectionId).show(400)
        }
        else if ($(this).attr("id") === sectionId + "-hide") {
            $(this).text("\u25BC") 
            $(this).attr("id", sectionId + "-show")
            $(".section-content#" + sectionId).hide(400)
        }
    })
}