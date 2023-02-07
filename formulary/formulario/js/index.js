function guardar(texto) {
    //console.log("guardar")
    function persona(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;


    }
    var idsave = document.getElementById("id").value;
    console.log(idsave);
    var nombresave = document.getElementById("nombre").value;
    console.log(nombresave);
    var apellidosave = document.getElementById("apellido").value;
    console.log(apellidosave);
    alert(texto);



}

function limpiarformulario(texto) {
    document.getElementById("id").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    alert(texto);
}

