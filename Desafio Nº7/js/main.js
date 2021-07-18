$(document).ready(function () {
    $(".main").load("main.html");
});
setTimeout(function () {
    $(".name-button").click(function () {
        $("body").load("data.html");
    });
}, 500);
