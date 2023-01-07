function aparecer() {
    const frm = document.getElementById("formInsert");
    const btnvo = document.getElementById("btnNuevo");
    const btnoc = document.getElementById("btnOcultar");
    frm.style = "display:block;";
    btnvo.style = "display:none;";
    btnoc.style = "display:block;";
}

function ocultar() {
    const frm = document.getElementById("formInsert");
    const btnvo = document.getElementById("btnNuevo");
    const btnoc = document.getElementById("btnOcultar");
    frm.style = "display:none;";
    btnvo.style = "display:block;";
    btnoc.style = "display:none;";
}

function agregarTarea() {
    const getTitulo = document.getElementById("txtTitulo").value;
    const getDesc = document.getElementById("txtDesc").value;
    const contenedorListado = document.getElementById("formList");

    const inputGroup = document.createElement("div");
    const contentPendiente = document.createElement("div");
    const titulo = document.createElement("div");
    const separador = document.createElement("hr");
    const descripcion = document.createElement("div");
    const opciones = document.createElement("div");
    const btnEliminar = document.createElement("span");
    const btnEditar = document.createElement("span");
    const nodoTitulo = document.createTextNode(getTitulo);
    const nodoDesc = document.createTextNode(getDesc);
    const nodoEliminar = document.createElement("Eliminar");
    const nodoEditar = document.createElement("Editar");

    titulo.appendChild(nodoTitulo);
    descripcion.appendChild(nodoDesc);
    btnEliminar.innerText = "Eliminar"
    btnEditar.innerText = "Editar"

    inputGroup.className = "input-group";
    contentPendiente.className = "contentPendiente";
    titulo.className = "titulo";
    separador.className = "separador";
    descripcion.className = "descripcion";
    btnEliminar.className = "btn btn-danger";
    btnEditar.className = "btn btn-warning";

    opciones.appendChild(btnEliminar);
    opciones.appendChild(btnEditar);

    contentPendiente.appendChild(titulo);
    contentPendiente.appendChild(separador);
    contentPendiente.appendChild(descripcion);
    contentPendiente.appendChild(opciones);
    inputGroup.appendChild(contentPendiente);

    contenedorListado.insertAdjacentElement("afterbegin", inputGroup);

    contenedorListado.insertBefore(inputGroup, contenedorListado.children[0]);
}