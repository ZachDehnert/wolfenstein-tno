console.log("******* ******* Internal JS is connected ******* *******");

var chapterNum = 1;

for (i = 0; i < 16; i++) {
    let chapterHolder = "chapter-" + (chapterNum + i) + "-holder"; // chapter-1-holder
    //console.log(chapterHolder);
    document.getElementById(chapterHolder).style.display = "none";
    document.getElementById("chapter-1-holder").style.display = "block";
}

// 
// Drop Down Menu: Start
//
// This is for the three-line button that rolls out the drop down
// with items like Chapter Selection
// 

    function btnHighLight() {

        document.getElementById("btn-1").style.display = "none";
        document.getElementById("btn-1-a").style.display = "block";
        document.getElementById("drop-down-container").style.display = "block";

    }

    function btnHighLightA() {

        document.getElementById("btn-1").style.display = "block";
        document.getElementById("btn-1-a").style.display = "none";
        document.getElementById("drop-down-container").style.display = "none";

    }

    document.getElementById("btn-1").addEventListener("click", btnHighLight);
    document.getElementById("btn-1-a").addEventListener("click", btnHighLightA);

// 
// Drop Down Menu: End
//

//
// Chapter 1 Content
//

    // Spoilers

    function spoilerChapterOneShow() {
        console.log("Spoiler chapter one is connected");
        document.getElementById("chapter-one-spoiler").style.display = "block";
        document.getElementById("spoilerChapterOneShow").style.display = "none";
    }

    function spoilerChapterOneHide() {
        console.log("Spoiler chapter one is connected");
        document.getElementById("chapter-one-spoiler").style.display = "none";
        document.getElementById("spoilerChapterOneShow").style.display = "block";
    }

    document.getElementById("spoilerChapterOneShow").addEventListener("click", spoilerChapterOneShow);
    document.getElementById("spoilerChapterOneHide").addEventListener("click", spoilerChapterOneHide);

// ===================================================================================================================================
//
// New Chapter Nav Function
//
// ===================================================================================================================================

function chapterSelectLeft() {

    for (i = 1; i < 17; i++) {
        let chapterHolder = "chapter-" + i + "-holder";
        document.getElementById(chapterHolder).style.display = "none";
    }

    chapterNum -= 1;
    document.getElementById("chapter-" + chapterNum + "-holder").style.display = "block";
}

function chapterSelectRight() {

    for (i = 1; i < 17; i++) {
        let chapterHolder = "chapter-" + i + "-holder";
        document.getElementById(chapterHolder).style.display = "none";
    }

    chapterNum += 1;
    document.getElementById("chapter-" + chapterNum + "-holder").style.display = "block";
}

// END OF New Chapter Nav Function

    // Landscape mode on images

    function chpt1LandOpen() {
        document.getElementById("chpt1Land").style.display = "block";
    }

    function chpt1LandClose() {
        document.getElementById("chpt1Land").style.display = "none";
    }

    document.getElementById("chpt-1-img").addEventListener("click", chpt1LandOpen);
    document.getElementById("close-land").addEventListener("click", chpt1LandClose);