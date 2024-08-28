document.addEventListener('DOMContentLoaded', function() {
    // Variables para el manejo de la institución
    const btnAgregar = document.getElementById('btn-agregar');
    const formularioInstitucion = document.getElementById('formulario-institucion');
    const inputInstitucion = document.getElementById('input-institucion');
    const inputDireccion = document.getElementById('input-direccion');
    const inputTelefono = document.getElementById('input-telefono');
    const inputTitulo = document.getElementById('input-titulo');
    const btnGuardar = document.getElementById('btn-guardar');
    const tablaInstituciones = document.getElementById('tabla-instituciones');
  
    let instituciones = []; // Arreglo para almacenar las instituciones
    let institucionActual = null; // Variable para la institución en edición
  
   
        
      
  
    // Mostrar/ocultar el formulario de institución
    btnAgregar.addEventListener('click', function() {
        formularioInstitucion.style.display = formularioInstitucion.style.display === 'none' ? 'block' : 'none';
        limpiarFormulario();
        institucionActual = null; // Resetear la institución actual
    });
  
    // Función para actualizar la tabla de instituciones
    function actualizarTabla() {
        tablaInstituciones.innerHTML = '';
  
        instituciones.forEach((institucion, index) => {
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td>${institucion.nombre}</td>
                <td>${institucion.direccion}</td>
                <td>${institucion.telefono}</td>
                <td>${institucion.titulo}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarInstitucion(${index})">Actualizar</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarInstitucion(${index})">Eliminar</button>
                </td>
            `;
            tablaInstituciones.appendChild(nuevaFila);
        });
    }
  
    // Función para limpiar el formulario de institución
    function limpiarFormulario() {
        inputInstitucion.value = '';
        inputDireccion.value = '';
        inputTelefono.value = '';
        inputTitulo.value = '';
    }
  
    // Función para agregar una nueva institución
    function agregarInstitucion(institucion) {
        instituciones.push(institucion);
        actualizarTabla();
    }
  
    // Función para actualizar una institución existente
    function actualizarInstitucion(institucion, index) {
        instituciones[index] = institucion;
        actualizarTabla();
    }
  
    // Función para eliminar una institución
    window.eliminarInstitucion = function(index) {
        instituciones.splice(index, 1);
        actualizarTabla();
    };
  
    // Función para manejar la edición de una institución
    window.editarInstitucion = function(index) {
        institucionActual = index;
        const institucion = instituciones[index];
  
        inputInstitucion.value = institucion.nombre;
        inputDireccion.value = institucion.direccion;
        inputTelefono.value = institucion.telefono;
        inputTitulo.value = institucion.titulo;
  
        formularioInstitucion.style.display = 'block';
    };
  
    // Manejar el evento de guardar
    btnGuardar.addEventListener('click', function() {
        const nombre = inputInstitucion.value.trim();
        const direccion = inputDireccion.value.trim();
        const telefono = inputTelefono.value.trim();
        const titulo = inputTitulo.value.trim();
  
        if (nombre && direccion && telefono && titulo) {
            const nuevaInstitucion = { nombre, direccion, telefono, titulo };
  
            if (institucionActual !== null) {
                actualizarInstitucion(nuevaInstitucion, institucionActual);
                institucionActual = null;
            } else {
                agregarInstitucion(nuevaInstitucion);
            }
  
            limpiarFormulario();
            formularioInstitucion.style.display = 'none';
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de contacto
    const form = document.getElementById('contacto-form');
    const tableBody = document.querySelector('#contacto-table');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario
  
      // Obtiene los valores del formulario
      const email = document.getElementById('email').value.trim();
      const motivo = document.getElementById('motivo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
  
      // Verifica si los campos no están vacíos
      if (email && motivo && mensaje) {
        // Crea una nueva fila en la tabla
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${email}</td>
          <td>${motivo}</td>
          <td>${mensaje}</td>
        `;
  
        // Agrega la nueva fila al cuerpo de la tabla
        tableBody.appendChild(newRow);
  
        // Limpia el formulario
        form.reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  });
  