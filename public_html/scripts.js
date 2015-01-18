/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("document").ready(function () {
    $(".why").css("background-color", "skyblue");

    $("div p:nth-child(3)").css("color", "yellow");

    $("#oneButton").bind("click", alertButtonClick);

    $("#picture").bind("mouseover", pictureAlert);

    $("#addText").bind("click", addText);

    $("#removeText").bind("click", removeText);

    $("#hideImage").bind("click", hideImage);

    $("#showImage").bind("click", showImage);

    $("#hugeImage").bind("click", hugeImage);

    $("#numbers").accordion({header: "h4"});

    $("#oneButton").bind("click", hideAccord);

    $("#removeText").bind("click", showAccord);

    $("a[rel=example_group]").fancybox({
        "transitionIn" : "fade",
        "transitionOut" : "elastic",
        "titleposition" : "over",
        "titleformat" : function(title, currentArray, currentIndex, current0pts)
        {
            return "<span id=fancy-box-title-over"
        }
    });
    
    $("#tabs").tabs();
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();
});

function alertButtonClick() {
    alert("You clicked a Button");
}

function pictureAlert() {
    alert("You touched the picture");
}
function addText() {
    $("#like").append("<p>wow look at that </p>");
}
function removeText() {
    $("#like p:last").remove();
}
function hideImage() {
    $("#picture").animate({opacity: 0, height: "50px"}, 2000, "linear");
}

function showImage() {
    $("#picture").animate({opacity: 100, height: "300px"}, 2000, "linear");
}
function hugeImage() {
    $("#picture").animate({opacity: 100, height: "800px"}, 2000, "linear");
}
function hideAccord() {
    $("#numbers").animate({opacity: 0, height: "50px"}, 2000, "linear");
}

function showAccord() {
    $("#numbers").animate({opacity: 100, height: "300px"}, 2000, "linear");
}