setTimeout(function () {
    var array = [3000000, 800000, 800000, 25000, 48000, 130000, 90000, 10000, 90000, 80000, 4800, 14400];

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

    function refreshData() {
        $("#costo").text(0);
        let newVal = 0;
        Object.keys(localStorage).forEach((key) => {
            newVal += parseInt(localStorage.getItem(key));
        });
        $("#costo").text(newVal);
    }
}, 500);
