setTimeout(function () {
  var array = [3000000, 800000, 800000, 25000, 48000, 130000, 90000, 10000, 90000, 80000, 4800, 14400];
  var log = [];
  var costo = document.getElementById("costo");
  var reset = document.getElementById("reset");
  var valor_temp = 0;

  refreshData(valor_temp);

  reset.addEventListener("click", function () {
    localStorage.clear();
    refreshData(valor_temp);
  });

  var gridItem = document.getElementsByClassName("grid-item");
  console.log(gridItem.length);
  for (let index = 0; index < gridItem.length; index++) {
    gridItem[index].addEventListener("click", function () {
      localStorage.setItem(`${index}`, `${array[index]}`);
      refreshData(valor_temp);
    });
  }

  function refreshData(value) {
    costo.innerHTML = 0;
    Object.keys(localStorage).forEach((key) => {
      value += parseInt(localStorage.getItem(key));
      costo.innerHTML = value;
    });
  }
}, 500);
