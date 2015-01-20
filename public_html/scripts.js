/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("document").ready(function () {
    //sets background color for "why" div
    $(".why").css("background-color", "skyblue");

    $("div p:nth-child(3)").css("color", "yellow");
    
    //binds button to click and alert function
    $("#oneButton").bind("click", alertButtonClick);
    
    //binds picture to mouseover alert function
    $("#picture").bind("mouseover", pictureAlert);
    
    //binds button to click and add text function
    $("#addText").bind("click", addText);
    
    //binds button to click and remove text function
    $("#removeText").bind("click", removeText);
    
    //binds picture to click and hide image function
    $("#hideImage").bind("click", hideImage);
    
    //binds picture to click and show image function
    $("#showImage").bind("click", showImage);
    
    //binds picture to click and huge image function
    $("#hugeImage").bind("click", hugeImage);
    
    // makes "numbers" div into an accordian
    $("#numbers").accordion({header: "h4"});

    //binds button to click and hide accordian function
    $("#oneButton").bind("click", hideAccord);
    
    //binds button to click and show accordian function
    $("#removeText").bind("click", showAccord);

    //makes lightbox and lightbox animations
    $("a[rel=example_group]").fancybox({
        "transitionIn" : "fade",
        "transitionOut" : "elastic",
        "titleposition" : "over",
        "titleformat" : function(title, currentArray, currentIndex, current0pts)
        {
            return "<span id=fancy-box-title-over"
        }
    });
    // makes sortable tabbbed box
    $("#tabs").tabs();
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();
});
//alert for button
function alertButtonClick() {
    alert("You clicked a Button");
}
// alert for picture
function pictureAlert() {
    alert("You touched the picture");
}
//adds text
function addText() {
    $("#like").append("<p>wow look at that </p>");
}
// removes text
function removeText() {
    $("#like p:last").remove();
}
// hides image
function hideImage() {
    $("#picture").animate({opacity: 0, height: "50px"}, 2000, "linear");
}
// shows image
function showImage() {
    $("#picture").animate({opacity: 100, height: "300px"}, 2000, "linear");
}
//makes image huge
function hugeImage() {
    $("#picture").animate({opacity: 100, height: "800px"}, 2000, "linear");
}
//hides the accordian
function hideAccord() {
    $("#numbers").animate({opacity: 0, height: "50px"}, 2000, "linear");
}
//shows the accordian
function showAccord() {
    $("#numbers").animate({opacity: 100, height: "300px"}, 2000, "linear");
}