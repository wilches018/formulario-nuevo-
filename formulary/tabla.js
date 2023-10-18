
// funcion de guardar
function guardar_herramientas() {
  // const id = document.getElementById("id"); 
  const nombre = document.getElementById("nombre").value;
  const Bodega = document.getElementById("Bodega").value;
  const Estante = document.getElementById("Estante").value;
  const Gaveta = document.getElementById("Gaveta").value;
  const rubro = document.getElementById("rubro").value;
  const Fecha = document.getElementById("Fecha").value;
  const Cantidad = document.getElementById("Cantidad").value;
  const Codigo = document.getElementById("Codigo").value;
  const Estado = document.getElementById("Estado").value;
  const Descripcion = document.getElementById("Descripcion").value;



  axios.post('/fronted/guardar_herramientas', {
    nombre: nombre,
    Bodega: Bodega,
    Estante: Estante,
    Gaveta: Gaveta,
    rubro: rubro,
    Fecha: Fecha,
    Cantidad: Cantidad,
    Codigo: Codigo,
    Estado: Estado,
    Descripcion: Descripcion



  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  )
    .then((res) => {
      console.log(res.data)
      if (res.data === 'la herramienta ya existe') {
        // Mostrar la alerta indicando que el correo ya está registrado
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: 'esta herraminenta ya esta guardada!',
        })
      
        // Restablecer los campos de entrada
        document.getElementById("nombre").value = "";
        document.getElementById("Bodega").value = "";
        document.getElementById("Estante").value = "";
        document.getElementById("Gaveta").value = "";
        document.getElementById("rubro").value = "";
        document.getElementById("Fecha").value = "";
        document.getElementById("Cantidad").value = "";
        document.getElementById("Codigo").value = "";
        document.getElementById("Estado").value = "";
        document.getElementById("Descripcion").value = "";

      } else {
        mostrar();
        // Mostrar la alerta de éxito
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: '¡Registrado Exitosamente!',
          showConfirmButton: false,
          timer: 2000,
  

        });

        document.getElementById("nombre").value = "";
        document.getElementById("Bodega").value = "";
        document.getElementById("Estante").value = "";
        document.getElementById("Gaveta").value = "";
        document.getElementById("rubro").value = "";
        document.getElementById("Fecha").value = "";
        document.getElementById("Cantidad").value = "";
        document.getElementById("Codigo").value = "";
        document.getElementById("Estado").value = "";
        document.getElementById("Descripcion").value = "";
      }

    })
    .catch((error) => {
      console.error(error);


    });
}
// fin de funcion de guardar

// mostrar datos de la db a la tabla html
let divcate = document.getElementById('tabla');
function mostrar() {
  axios.get('mostrars', {
    responseType: 'json'
  })
    .then(function (response) {
      let datos = response.data
      var length = (Object.keys(datos).length) + 1;
      let mostrar = '';
     
      for (let index = 1; index < length; index++) {
        mostrar += ` <tr>   
                <td >${datos[index].id} </td>
                <td>${datos[index].nombre}  </td>
                <td>${datos[index].bodega}  </td> 
                <td>${datos[index].estante}  </td> 
                <td>${datos[index].gaveta}  </td> 
                <td>${datos[index].rubro}  </td> 
                <td>${datos[index].fecha}  </td>
                <td>${datos[index].cantidad}  </td> 
                <td>${datos[index].codigo}  </td> 
                <td>${datos[index].estado}  </td> 
                <td>${datos[index].descripcion}  </td> 
                <td>
                <button class="chanfle" onclick="castisgo(${datos[index].id}, '${datos[index].nombre}', '${datos[index].bodega}',
                '${datos[index].estante}', '${datos[index].gaveta}', '${datos[index].rubro}', '${datos[index].fecha}', '${datos[index].cantidad}', 
                '${datos[index].codigo}', '${datos[index].estado}', '${datos[index].descripcion}')"> <i class="fas fa-sync"></i></button>
                <button class="chanfle2" onclick="eliminar(${datos[index].id})"> <i class="fas fa-trash"></i></button>
              </tr> `;

      }
      divcate.innerHTML = mostrar
    })
    .catch(function (error) {
      // Maneja los errores aquí
      console.log(error);
    });
}
window.addEventListener('load', function () {
  mostrar();
})
// FIN DEL MOSTRA

// funcion que abre el modal para actualizar
function castisgo(id , nombre , bodega , estante , gaveta , rubro , fecha , cantidad , codigo , estado , descripcion ) {
  var modal7 = document.getElementById("modal7");

  const nuevo_id = document.getElementById('id-e')
  nuevo_id.value = id

  const nuevo_nombre = document.getElementById('nombre2')
  nuevo_nombre.value = nombre

  const nuevo_bodega = document.getElementById('Bodega2')
  nuevo_bodega.value = bodega

  const nuevo_estante = document.getElementById('Estante2')
  nuevo_estante.value = estante

  const nuevo_gaveta = document.getElementById('Gaveta2')
  nuevo_gaveta.value = gaveta

  const nuevo_rubro = document.getElementById('rubro2')
  nuevo_rubro.value = rubro


  const nuevo_fecha = document.getElementById('Fecha2')
  nuevo_fecha.value = fecha

  console.log(fecha)


  const nuevo_cantidad = document.getElementById('Cantidad2')
  nuevo_cantidad.value = cantidad


  const nuevo_codigo = document.getElementById('Codigo2')
  nuevo_codigo.value = codigo


  const nuevo_estado = document.getElementById('Estado2')
  nuevo_estado.value = estado

  const nuevo_descripcion = document.getElementById('Descripcion2')
  nuevo_descripcion.value = descripcion




  modal7.style.display = "block";

  modal7.addEventListener('click', function (event) {
  if (event.target === modal7) {
    modal7.style.display = 'none';
  }
  mostrar();
});
}
// fin de abrir el modal para actualizar

// funcion de actualizar
function update() {
  const ontide = document.getElementById('id-e')
  const nombre = document.getElementById('nombre2');
  const Bodega = document.getElementById('Bodega2')
  const Estante = document.getElementById('Estante2');
  const Gaveta = document.getElementById('Gaveta2');
  const rubro = document.getElementById('rubro2');
  const fecha = document.getElementById('Fecha2').value;
  const Cantidad = document.getElementById('Cantidad2');
  const Codigo = document.getElementById('Codigo2');
  const Estado = document.getElementById('Estado2');
  const Descripcion = document.getElementById('Descripcion2');

  axios
    .post(
      'actualizar',
      {
        id: ontide.value,
        nombre: nombre.value,
        Bodega: Bodega.value,
        Estante: Estante.value,
        Gaveta: Gaveta.value,
        rubro: rubro.value,
        fecha: fecha,
        Cantidad: Cantidad.value,
        Codigo: Codigo.value,
        Estado: Estado.value,
        Descripcion: Descripcion.value
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    .then((res) => {
      console.log(res.data)
      if (res.data == 'message')
      console.log("dato actualizado")
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Herramienta actualizada exitosamente!',
        showConfirmButton: false,
        timer: 2000,
      })
      
        

    })
    .catch((error) => {
      console.error(error)
      
    })
}
// fin de la funcion actualizar

// funcion de eliminar los datos de la db
function eliminar(id) {
  Swal.fire({
    title: '¿Desea eliminar esta herramienta?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: 'red',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
  axios.post('delete', {
    ids: id
  })
    .then(function (response) {ƒ
      console.log(response);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Herramienta Eliminado Exitosamente!',
        showConfirmButton: false,
        timer: 2000,
      })
      mostrar();
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: '¡No puedo eliminar verifique su conecion de internet!',
        showConfirmButton: false,
        timer: 3000,
      })
    });
  } else {
    Swal.fire({
      title: '¡Proceso cancelado!',
      icon: 'error'
    })
  }
})
}
// fin de la funcion de eliminar los datos de la db 

// funcion de buscar datos en l tabla
function searchTable() {
  // Obtiene el valor del campo de búsqueda
  var input = document.getElementById("searchInput").value.toUpperCase();

  // Obtiene la tabla y los registros de la misma
  var table = document.getElementById("tabla");
  var rows = table.getElementsByTagName("tr");

  // Itera sobre los registros y los oculta si no coinciden con la búsqueda
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var match = false;
    for (var j = 0; j < cells.length; j++) {
      if (cells[j].innerHTML.toUpperCase().indexOf(input) > -1) {
        match = true;
        break;
      }
    }
    if (match) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
// fin del buscador





//aca estan los metodos en pyhton

from config.db import db
from flask import Blueprint, Flask,  redirect, request, jsonify, json, session, render_template
from model.Herramientas import Herramientas


routes_guardar_herramientas = Blueprint("routes_guardar_herramientas", __name__)



@routes_guardar_herramientas.route('/guardar_herramientas', methods=['POST'])
def cuenta():
    # id = request.form['id']
    Nombre = request.form['nombre']
    Bodega = request.form['Bodega']
    Estante = request.form['Estante']
    gaveta = request.form['Gaveta']
    Rubro = request.form['rubro']
    Fecha = request.form['Fecha']
    Cantidad = request.form['Cantidad']
    Codigo = request.form['Codigo']
    Estado = request.form['Estado']
    descripcion = request.form['Descripcion']

    print( Nombre , Bodega)

    # Verificar si la herramienta  ya está registrado
    aprendiz_existente = db.session.query(Herramientas).filter(Herramientas.codigo == Codigo).first()

    if aprendiz_existente:                
        return "la herramienta ya existe"
    

    new_section = Herramientas( Nombre, Bodega, Estante, gaveta, Rubro, Fecha,
                               Cantidad, Codigo, Estado, descripcion  )
    db.session.add(new_section)
    db.session.commit()

    return "exitoso"




    

@routes_guardar_herramientas.route('/actualizar', methods=['POST'] )
def actualiza():
    id = request.form.get('id')
    Nombre = request.form.get('nombre')
    Bodega = request.form.get('Bodega')
    Estante = request.form.get('Estante')
    gaveta = request.form.get('Gaveta')
    Rubro = request.form.get('rubro')
    Fecha = request.form.get('fecha')
    Cantidad = request.form.get('Cantidad')
    codigo = request.form.get('Codigo')
    Estado = request.form.get('Estado')
    descripcion = request.form.get('Descripcion')




    paciente = Herramientas.query.get(id)
    paciente.Nombre = Nombre
    paciente.Bodega = Bodega
    paciente.Estante = Estante
    paciente.gaveta = gaveta
    paciente.Rubro = Rubro
    paciente.Fecha = Fecha
    paciente.Cantidad = Cantidad
    paciente.codigo = codigo
    paciente.Estado = Estado
    paciente.descripcion = descripcion
    
    # Guardar los cambios en la base de datos
    db.session.commit()
      
    # Enviar una respuesta exitosa
    return jsonify({'message': 'Datos actualizados correctamente'})






@routes_guardar_herramientas.route('/delete', methods=['POST'] )
def eliminarregistross():
    id_a = request.json['ids']
    Id_Aprendiz = Herramientas.query.get(id_a)


    if Id_Aprendiz:
        db.session.delete(Id_Aprendiz)
        db.session.commit()
        return jsonify({'message': 'Registro eliminado' }) 
    else:
        return jsonify({'message': 'Registro  no eliminado' }) 







