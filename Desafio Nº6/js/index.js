class Seguro {
    constructor(Titulo, Costo, Descripcion, Clausula) {
        this.Titulo = Titulo;
        this.Costo = Costo;
        this.Descripcion = Descripcion;
        this.Clausula = Clausula;
    }
    getTitulo() {
        return this.Titulo;
    }
    getCosto() {
        return this.Costo;
    }
    getDescripcion() {
        return this.Descripcion;
    }
    getClausula() {
        return this.Clausula;
    }
}

$(document).ready(function () {
    fetch("json/data.json")
        .then((response) => response.json())
        .then((data) => {
            const DataList = [];
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.Clausula.length > 1) {
                    let seguro = new Seguro(element.Titulo, element.Costo, element.Descripcion, element.Clausula);
                    DataList.push(seguro);
                } else {
                    let seguro = new Seguro(element.Titulo, element.Costo, element.Descripcion, "");
                    DataList.push(seguro);
                }
            }
            DataList.forEach((element) => {
                $("#grid-container").append(
                    `<div class="grid-item">
                    <div class="subtitulo">
                        <h3>${DataList.indexOf(element) + 1}. ${element.Titulo}</h3>
                        <h4>$<span class="valor">${element.Costo}</span></h4>
                    </div>
                    <p>${element.Descripcion}</p>
                    <b>${element.Clausula}</b>
                    </div>`
                );
            });
        });
});
