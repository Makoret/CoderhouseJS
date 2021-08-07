setTimeout(function () {
    console.log($(".image-container").html());
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
        $(".grid-item").removeClass("grid-item-selected");
        refreshData();
    });

    $(".save").on("click", function () {
        let dataToSend = $("#cost").text();
        console.log(`${user}`);
        console.log(`${dataToSend}`);
        $("body").load("send.html");
    });

    $(".grid-item").click(function (e) {
        e.preventDefault();
        let index = $(".grid-item").index(this);
        console.log($(this).children($(".subtitulo")).children($("h4")).children($("span")).text());
        $(this).toggleClass("grid-item-selected");
        if (this.classList.contains("grid-item-selected")) {
            localStorage.setItem(
                `${index}`,
                `${$(this).children($(".subtitulo")).children($("h4")).children($("span")).text()}`
            );
        } else {
            localStorage.removeItem(`${index}`);
        }
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
