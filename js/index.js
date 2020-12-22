console.log('index.js loaded');

// hover over navigation bar
$('li').hover(function() {
    $(this).css("background-color","white");
    $(this).css("color","black");
}, function() {
    $(this).css("background-color","#373738");
    $(this).css("color","white");
})

$('button').hover(function() {
    $(this).css("background-color","white");
    $(this).css("color","black");
}, function() {
    $(this).css("background-color","#373738");
    $(this).css("color","white");
})

// buttons
$("#downloadButton").on("click", function() {
    console.log('download button clicked');
    window.open('https://www.linkedin.com/in/cheng-guo-07b336133/', '_blank');
});

$("#contactme").on("click", function() {
    window.open('https://www.linkedin.com/in/cheng-guo-07b336133/', '_blank');
});

const homePageLink = "https://kelsey-cheng.github.io/";

// navigation bar actions
$(".myworklink").on("click", function() {
    window.location.href = homePageLink + '/mywork.html';
});

$(".myskillslink").on("click", function() {
    window.location.href = homePageLink + '/myskills.html';
});

$(".aboutmelink").on("click", function() {
    window.location.href = homePageLink;
});

$(".contactme").on("click", function() {
    window.open('https://www.linkedin.com/in/cheng-guo-07b336133/', '_blank');
});

// hover over image
$('.myWorkPic').hover(function() {
    $(this).addClass('imageTransition');
}, function() {
    $(this).removeClass('imageTransition');
});

$('.mySkillCard').hover(function() {
    $(this).addClass('imageTransition');
}, function() {
    $(this).removeClass('imageTransition');
});