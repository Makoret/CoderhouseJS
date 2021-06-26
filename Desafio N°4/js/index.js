class Seguro {
    constructor(
        Titulo,
        Costo,
        Descripcion,
        Clausula
    ){
        this.Titulo = Titulo;
        this.Costo = Costo;
        this.Descripcion = Descripcion;
        this.Clausula = Clausula;
    }
    getTitulo(){return this.Titulo}
    getCosto(){return this.Costo}
    getDescripcion(){return this.Descripcion}
    getClausula(){return this.Clausula}
}

window.addEventListener("DOMContentLoaded", () => {
    fetch("../json/data.json")
    .then((response) => response.json())
    .then((data) => {
        const DataList = [];
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.Clausula = undefined) {
                    let seguro = new Seguro(
                        element.Titulo,
                        element.Costo,
                        element.Descripcion,
                        ""
                        );
                        DataList.push(seguro);
                } else {
                    let seguro = new Seguro(
                        element.Titulo,
                        element.Costo,
                        element.Descripcion,
                        element.Clausula
                    );
                    DataList.push(seguro);
                }
            }
        DataList.forEach(element => {
            document.getElementById("grid-container").innerHTML +=
                `<div class="grid-item">
                    <div class="subtitulo">
                        <h3>1. ${element.Titulo}</h3>
                        <h4>$<span class="valor">${element.Costo}</span></h4>
                    </div>
                    <p>${element.Descripcion}</p>
                    <b>${element.Clausula}<\b>
                </div>`
        });
    })
})

var array = [3000000, 800000, 800000,25000,48000,130000,90000, 10000,90000,80000,4800,14400]
var log = []
var cotizado = document.getElementById("cotizar")
var valor_temp = 0

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

cotizado.addEventListener("click", function(){
    console.log(valor_temp)
    do {
        entrada = prompt(`Costo de seguro: ${valor_temp}\nIngrese su opción preferida u "ok" para culminar`)
        console.log(entrada)
        if (entrada === null) {
            return;
        } else {
            if (entrada <= 0 || entrada >= 13) {
                alert ("Ingrese una opción válida")
            } else {
                if (entrada === "ok" || entrada === "Ok" || entrada === "OK") {
                    alert(`Gracias por cotizar con nosotros!\n El costo total tendria un valor de ${valor_temp.toLocaleString(undefined,{ minimumFractionDigits: 2 })} de pesos argentinos.`)
                    return;
                } else{
                    if (parseInt(array[parseInt(entrada)-1]) === 0) {
                        alert("Esa opción ya esta incluida")
                    } else{
                        console.log(typeof(entrada))
                        valor_temp += parseInt(array[parseInt(entrada)-1])
                        array[parseInt(entrada-1)] = 0;
                    }
                }
            }
        }
    } while (entrada >= 0 && entrada <= 12 && entrada != "" && entrada != null);
})