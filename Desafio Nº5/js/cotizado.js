setTimeout(function () {
  var array = [3000000, 800000, 800000, 25000, 48000, 130000, 90000, 10000, 90000, 80000, 4800, 14400];
  var log = [];
  var costo = document.getElementById("costo");
  var reset = document.getElementById("reset");
  var valor_temp = 0;

  refreshData();

  reset.addEventListener("click", function () {
    localStorage.clear();
    alert(`Selecciones borradas!`);
    refreshData();
  });

  var gridItem = document.getElementsByClassName("grid-item");
  console.log(gridItem.length);
  for (let index = 0; index < gridItem.length; index++) {
    gridItem[index].addEventListener("click", function () {
      localStorage.setItem(`${index}`, `${array[index]}`);
      refreshData();
    });
  }

  function refreshData() {
    costo.innerHTML = 0;
    Object.keys(localStorage).forEach((key) => {
      valor_temp += parseInt(localStorage.getItem(key));
      costo.innerHTML = valor_temp;
    });
    valor_temp = 0;
  }
}, 500);
