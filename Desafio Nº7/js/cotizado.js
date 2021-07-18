setTimeout(function () {
    var array = [3000000, 800000, 800000, 25000, 48000, 130000, 90000, 10000, 90000, 80000, 4800, 14400];
    var images = [
        "imagesseguro_img_1.jpg",
        "imagesseguro_img_2.jpg",
        "imagesseguro_img_3.jpg",
        "imagesseguro_img_4.jpg",
        "imagesseguro_img_5.jpg",
        "imagesseguro_img_6.jpg",
        "imagesseguro_img_7.jpg",
        "imagesseguro_img_8.jpg",
        "imagesseguro_img_9.jpg",
        "imagesseguro_img_10.jpg",
        "imagesseguro_img_11.jpg",
        "imagesseguro_img_12.jpg",
    ];

    refreshData();

    $("#reset").on("click", function () {
        localStorage.clear();
        refreshData();
    });

    $(".grid-item").click(function (e) {
        e.preventDefault();
        let index = $(".grid-item").index(this);
        localStorage.setItem(`${index}`, `${array[index]}`);
        refreshData();
    });

    $(".grid-item").hover(
        function imageChanger() {
            console.log($(".grid-item").index(this));
            console.log($(".image-container").text);
        },
        function e() {
            $(".image-container").css("background-color", "#858585");
        }
    );

    function refreshData() {
        $("#costo").text(0);
        let newVal = 0;
        Object.keys(localStorage).forEach((key) => {
            newVal += parseInt(localStorage.getItem(key));
        });
        $("#costo").text(newVal);
    }
}, 500);
