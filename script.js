inputTareas = document.querySelector('#inputTareas')
botonAgregar = document.querySelector('#botonAgregar')
spanTotal = document.querySelector('#totalTareas')
spanRealizadas = document.querySelector('#totalRealizadas')
tableBody = document.querySelector('tbody')
botonBorrar = document.querySelector('#botonBorrar')
botonTachar = document.querySelectorAll('.checkListo')

let tareas = [
    { id: 1, nombreTarea: "Pasear al perro", completado: false},
    { id: 2, nombreTarea: "Comprar pan", completado: false },
    { id: 3, nombreTarea: "Lavar ropa sucia", completado: false}]



function renderTareas() {
    let tableData = ''
    tareas.forEach(tarea => {
        const tareaStyle = tarea.completado ? 'style="color: var(--Grey);"' : '';
        tableData += `<tr> 
                                            <td ${tareaStyle}> ${tarea.id} </td> 
                                            <td ${tareaStyle}> ${tarea.nombreTarea} </td> 
                                            <td> <button onclick='tachar(${tarea.id})' class='checkListo'> ✔ </button> </td> 
                                            <td> <button onclick='borrar(${tarea.id})'  id="botonBorrar">x</button> </td> </tr>`})
    
                                          
    spanTotal.innerHTML = tareas.length;
    tableBody.innerHTML = tableData;
    spanRealizadas.innerHTML = tareas.filter(tarea => tarea.completado).length;
    
}


botonAgregar.onclick = () => {
    const tareasNuevas = inputTareas.value
    tareas.push({ id: Date.now(), nombreTarea: tareasNuevas, completado: false})
    inputTareas.value = ''
    renderTareas();
    

}

function borrar(id) {
    const indice = tareas.findIndex(tarea => tarea.id == id)
    tareas.splice(indice, 1)
    renderTareas()

}

function tachar(id){ 
    let indice = tareas.find(tarea => tarea.id == id); 
    indice.completado = true;

    renderTareas();
}

renderTareas();


