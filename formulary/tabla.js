var row="";
var cars = [];
function addrow() {

    const correo = document.getElementById('correo');
    const descripcion = document.getElementById('descripcion');
    const addr = document.getElementById('add');
    row += `<tr>
        <th scope="row">${correo.value}</th>
        <td>${descripcion.value}</td>
    </tr>`;
    addr.innerHTML = row;

}
function agregarfrt(){
const addr = document.getElementById('agregarfrt');

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
console.log(fila);
}