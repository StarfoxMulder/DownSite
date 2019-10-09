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

    // For mobile nav animation
    $("#mobileNavTopMenu").click(function (e) {
        $("#sideNavContMobileTop").show();
        $("#navPlaceholderMobileTop").hide();
        $("#closeSideNavMobileNav").show();
        document.getElementById("sideNavContMobileTop").classList.add("activeSideNav");
        console.log("width 100vw");
    });

    $("#closeSideNavMobileNav img").click(function (e) {
        document.getElementById("sideNavContMobileTop").classList.remove("activeSideNav");
        $("#sideNavContMobileTop").hide();
        $("#closeSideNavMobileNav").hide();
        $("#navPlaceholderMobileTop").show();
        console.log("width 0");
    });

    function addFadeIn(parentID) {
        var num = document.querySelectorAll('#' + parentID + ' .fadeInText').length;
        var children = document.querySelectorAll('#' + parentID + ' .fadeInText');

        $('#' + parentID + ' .fadeInText').each(function (i) {
            t = i + 0.5;
            $(this).css({
                "animation-delay": t + "s"
            })
        });
    }
    addFadeIn("tagline");

});

//Add class FadeIn to each child element of parent element w/ special identifier
// delayed by 0.X seconds per each iteration of loop
/*  1) Pass in ID of parent div
    2) count number of relevant children by class .fadeTextIn = F
    3) Run loop until i == F, starting i at 1
    4) loop goes through child.fadeTextIn(i) adding class fadeIn; setTimeout(500ms)
    5) ***Execute page specific functions on load, javascript
    
function addFadeIn (parentID) {
    var num = document.querySelectorAll('#'+parentID+' .fadeTextIn').length;
    var children = document.querySelectorAll('#'+parentID+' .fadeTextIn');

    for (i=1; i=num; i++){
        setTimeout(fadeIn(children, i), 500);
    }
}
function fadeIn(children, i){
    i2 = i-1;
    children[i2].classList.add("fadeIn");
}
*/

//    function addFadeIn(parentID) {
//     var num = document.querySelectorAll('#' + parentID + ' .fadeInText').length;
//     var children = document.querySelectorAll('#' + parentID + ' .fadeInText');
//     var t = [];
//     console.log("num == " + num);
//     console.log("children == " + children);

//     for (i = 1; i <= num; i++) {
//         console.log("loop run #" + i);

//         t[i] = setTimeout(fadeIn(children, i), 4200);
//         console.log(t);
//     }
// }

// function fadeIn(children, i) {
//     console.log(children);
//     console.log("fadeIn i == " + i)
//     i2 = i - 1;
//     console.log("i2 == " + i2);
//     console.log(children[i2]);
//     children[i2].classList.add("fadeIn");
// }

// addFadeIn("tagline");