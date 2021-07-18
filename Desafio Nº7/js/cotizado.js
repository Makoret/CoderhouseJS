setTimeout(function () {
    console.log($(".image-container").html());
    var array = [3000000, 800000, 800000, 25000, 48000, 130000, 90000, 10000, 90000, 80000, 4800, 14400];
    var images = [
        `seguro_img_1.jpg`,
        `seguro_img_2.jpg`,
        `seguro_img_3.jpg`,
        `seguro_img_4.jpg`,
        `seguro_img_5.jpg`,
        `seguro_img_6.jpg`,
        `seguro_img_7.jpg`,
        `seguro_img_8.jpg`,
        `seguro_img_9.jpg`,
        `seguro_img_10.jpg`,
        `seguro_img_11.jpg`,
        `seguro_img_12.jpg`,
    ];

    refreshData();

    $(".reset").on("click", function () {
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
            console.log($(".image-container").text());
            $(".image-container").html(`
            <img src="images\\${images[$(".grid-item").index(this)]}">`);
        },
        function e() {
            $(".image-container").html(`
            <img src="images\\seguro_hogar.jpg">`);
        }
    );

    function refreshData() {
        $("#cost").text(0);
        let newVal = 0;
        Object.keys(localStorage).forEach((key) => {
            newVal += parseInt(localStorage.getItem(key));
        });
        $("#cost").text(newVal);
    }
}, 500);
