var array = [3000000, 800000, 800000,25000,48000,130000,90000, 10000,90000,80000,4800,14400]
var cotizado = document.getElementById("cotizar")
var usuario = ""
var valor_temp = 0
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

