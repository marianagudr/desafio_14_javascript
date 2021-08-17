const URLGET = "https://jsonplaceholder.typicode.com/users"

$("#botonLlamada").append('<button id="btn1">Buscar</button>');

$("#btn1").click(() => { 
    $.get(URLGET, function (resultado, estado) {
        if(estado === "success"){
            console.log(resultado);

            resultado.forEach(elemento => {
                $("#prueba").append(
                    `<div class="mt-3">
                        <div class="bg-primary text-white fw-bold">Nombre: ${elemento.name}</div>
                        <div>Email:
                            <p class="fw-lighter">${elemento.email}</p>
                        </div>
                        <div>Compañía para la que trabaja:
                            <p class="fw-lighter">${elemento.company.name}</p>
                        </div>
                    </div>
                    `)
            })
        }
    })
})
