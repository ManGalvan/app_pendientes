window.addEventListener("storage", mostrarTareas);
mostrarTareas();

function showHide() {
    const frm = document.getElementById("formInsert");
    const btnvo = document.getElementById("btnNuevo");
    const btnoc = document.getElementById("btnOcultar");
    frm.classList.toggle("oculto");
    btnvo.classList.toggle("oculto");
    btnoc.classList.toggle("oculto");
}

function agregarTarea(){
    const getTitulo = document.getElementById("txtTitulo").value;
    const getDesc = document.getElementById("txtDesc").value;
    localStorage.setItem(getTitulo, getDesc);
    document.getElementById("txtTitulo").value = "";
    document.getElementById("txtDesc").value = "";
    mostrarTareas();
}

function mostrarTareas() {
    const contenedorListado = document.getElementById("formList");
    contenedorListado.innerHTML = "";
    for(let i = 0; i < localStorage.length; i++){
        const inputGroup = document.createElement("div");
        const contentPendiente = document.createElement("div");
        const titulo = document.createElement("div");
        const separador = document.createElement("hr");
        const descripcion = document.createElement("div");
        const opciones = document.createElement("div");
        const btnEliminar = document.createElement("span");
        const btnEditar = document.createElement("span");
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave);
        const nodoTitulo = document.createTextNode(clave);
        const nodoDesc = document.createTextNode(valor);
        titulo.appendChild(nodoTitulo);
        descripcion.appendChild(nodoDesc);

        btnEliminar.innerText = "Eliminar";
        btnEditar.innerText = "Editar";
        btnEliminar.dataset.IdTarea = clave;
        btnEditar.dataset.IdTarea = clave;

        btnEliminar.className = "btn btn-danger";
        btnEditar.className = "btn btn-warning";
        opciones.className = "opciones";
        descripcion.className = "descripcion";
        separador.className = "separador";
        titulo.className = "titulo";
        contentPendiente.className = "contentPendiente";
        inputGroup.className = "input-group";

        btnEliminar.addEventListener("click", function(){
            eliminar(clave);
        });

        btnEditar.addEventListener("click", function(){
            editar(clave);
        })

        opciones.appendChild(btnEliminar);
        opciones.appendChild(btnEditar);

        contentPendiente.appendChild(titulo);
        contentPendiente.appendChild(separador);
        contentPendiente.appendChild(descripcion);
        contentPendiente.appendChild(opciones);

        inputGroup.appendChild(contentPendiente);

        contenedorListado.insertAdjacentElement("afterbegin", inputGroup);
    }
}

function accion(event) {
    const tareaId = event.target.dataset.tareaId;
    const accion = event.target.innerText.toLowerCase();

    if (accion === "eliminar") {
        eliminar(tareaId);
    } else if (accion === "editar") {
        editar(tareaId);
    }
}

function eliminar(tareaId) {
    if(confirm("¿Estás seguro?")){
        localStorage.removeItem(tareaId);
        mostrarTareas();
    }
}

function editar(clave) {
    console.log("Editando clave: " + clave);
}