$(document).ready(function () {

    console.log("script is loading");

    $(".menuIcon").click(function (e) {
        $("#sideNavCont").show();
        $(".navPlaceholder").hide();
        $("#closeSideNav").show();
        document.getElementById("sideNavCont").classList.add("activeSideNav");
        console.log("width 100vw");
    });

    $("#closeSideNav img").click(function (e) {
        document.getElementById("sideNavCont").classList.remove("activeSideNav");
        $("#sideNavCont").hide();
        $("#closeSideNav").hide();
        $(".navPlaceholder").show();
        console.log("width 0");
    });

});