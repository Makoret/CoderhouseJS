$(document).ready(function () {
    $(".main").load("main.html");
});
var user = "";
setTimeout(function () {
    $(".name-button").click(function () {
        user = $("#name")[0].value;
        $("body").load("data.html");
    });
    // console.log(user);
}, 500);
// Aqui pienso incorporar mas acciones e informacion del usuario
