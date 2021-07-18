$(document).ready(function () {
    $(".main").load("main.html");
});
setTimeout(function () {
    // var user = "";

    $(".name-button").click(function () {
        // user += $("#name").val();
        $("body").load("data.html");
    });
    // console.log(user);
}, 500);
// Aqui pienso incorporar mas acciones e informacion del usuario
