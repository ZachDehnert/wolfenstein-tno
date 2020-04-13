console.log("******* ******* Internal JS is connected ******* *******");

document.getElementById("chapter-two-holder").style.display = "none";
document.getElementById("chapter-three-holder").style.display = "none";
document.getElementById("chapter-four-holder").style.display = "none";
document.getElementById("chapter-five-holder").style.display = "none";
document.getElementById("chapter-six-holder").style.display = "none";
document.getElementById("chapter-seven-holder").style.display = "none";
document.getElementById("chapter-eight-holder").style.display = "none";
document.getElementById("chapter-nine-holder").style.display = "none";
document.getElementById("chapter-ten-holder").style.display = "none";
document.getElementById("chapter-eleven-holder").style.display = "none";
document.getElementById("chapter-twelve-holder").style.display = "none";
document.getElementById("chapter-thirteen-holder").style.display = "none";
document.getElementById("chapter-fourteen-holder").style.display = "none";
document.getElementById("chapter-fifteen-holder").style.display = "none";
document.getElementById("chapter-sixteen-holder").style.display = "none";


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

    // Navigation between chapters

    document.getElementById("ch01-left").addEventListener("click", chOne);
    document.getElementById("ch02-left").addEventListener("click", chTwo);
    document.getElementById("ch02-right").addEventListener("click", chTwo);
    document.getElementById("ch03-left").addEventListener("click", chThree);
    document.getElementById("ch03-right").addEventListener("click", chThree);
    document.getElementById("ch04-left").addEventListener("click", chFour);
    document.getElementById("ch04-right").addEventListener("click", chFour);
    document.getElementById("ch05-left").addEventListener("click", chFive);
    document.getElementById("ch05-right").addEventListener("click", chFive);
    document.getElementById("ch06-left").addEventListener("click", chSix);
    document.getElementById("ch06-right").addEventListener("click", chSix);
    document.getElementById("ch07-left").addEventListener("click", chSeven);
    document.getElementById("ch07-right").addEventListener("click", chSeven);
    document.getElementById("ch08-left").addEventListener("click", chEight);
    document.getElementById("ch08-right").addEventListener("click", chEight);
    document.getElementById("ch09-left").addEventListener("click", chNine);
    document.getElementById("ch09-right").addEventListener("click", chNine);
    document.getElementById("ch10-left").addEventListener("click", chTen);
    document.getElementById("ch10-right").addEventListener("click", chTen);
    document.getElementById("ch11-left").addEventListener("click", chEleven);
    document.getElementById("ch11-right").addEventListener("click", chEleven);
    document.getElementById("ch12-left").addEventListener("click", chTwelve);
    document.getElementById("ch12-right").addEventListener("click", chTwelve);
    document.getElementById("ch13-left").addEventListener("click", chThirteen);
    document.getElementById("ch13-right").addEventListener("click", chThirteen);
    document.getElementById("ch14-left").addEventListener("click", chFourteen);
    document.getElementById("ch14-right").addEventListener("click", chFourteen);
    document.getElementById("ch15-left").addEventListener("click", chFifteen);
    document.getElementById("ch15-right").addEventListener("click", chFifteen);
    // document.getElementById("ch16-left").addEventListener("click", chSixteen);
    document.getElementById("ch16-right").addEventListener("click", chSixteen);


    function chOne() {
        console.log("Chapter 1 is loaded");
        document.getElementById("chapter-one-holder").style.display = "block";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }
    
    function chTwo() {
        console.log("Chapter 2 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "block";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chThree() {
        console.log("Chapter 3 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "block";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chFour() {
        console.log("Chapter 4 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "block";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chFive() {
        console.log("Chapter 5 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "block";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chSix() {
        console.log("Chapter 6 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "block";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chSeven() {
        console.log("Chapter 7 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "block";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chEight() {
        console.log("Chapter 8 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "block";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chNine() {
        console.log("Chapter 9 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "block";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chTen() {
        console.log("Chapter 10 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "block";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chEleven() {
        console.log("Chapter 11 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "block";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chTwelve() {
        console.log("Chapter 12 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "block";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chThirteen() {
        console.log("Chapter 13 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "block";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chFourteen() {
        console.log("Chapter 14 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "block";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chFifteen() {
        console.log("Chapter 15 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "block";
        document.getElementById("chapter-sixteen-holder").style.display = "none";

    }

    function chSixteen() {
        console.log("Chapter 16 is loaded");
        document.getElementById("chapter-one-holder").style.display = "none";
        document.getElementById("chapter-two-holder").style.display = "none";
        document.getElementById("chapter-three-holder").style.display = "none";
        document.getElementById("chapter-four-holder").style.display = "none";
        document.getElementById("chapter-five-holder").style.display = "none";
        document.getElementById("chapter-six-holder").style.display = "none";
        document.getElementById("chapter-seven-holder").style.display = "none";
        document.getElementById("chapter-eight-holder").style.display = "none";
        document.getElementById("chapter-nine-holder").style.display = "none";
        document.getElementById("chapter-ten-holder").style.display = "none";
        document.getElementById("chapter-eleven-holder").style.display = "none";
        document.getElementById("chapter-twelve-holder").style.display = "none";
        document.getElementById("chapter-thirteen-holder").style.display = "none";
        document.getElementById("chapter-fourteen-holder").style.display = "none";
        document.getElementById("chapter-fifteen-holder").style.display = "none";
        document.getElementById("chapter-sixteen-holder").style.display = "block";

    }

    // Landscape mode on images

    function chpt1LandOpen() {
        document.getElementById("chpt1Land").style.display = "block";
    }

    function chpt1LandClose() {
        document.getElementById("chpt1Land").style.display = "none";
    }

    document.getElementById("chpt-1-img").addEventListener("click", chpt1LandOpen);
    document.getElementById("close-land").addEventListener("click", chpt1LandClose);