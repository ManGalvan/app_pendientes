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
    const nodoTitulo = document.createTextNode(getTitulo);
    const nodoDesc = document.createTextNode(getDesc);

    titulo.appendChild(nodoTitulo);
    descripcion.appendChild(nodoDesc);

    inputGroup.className = "input-group";
    contentPendiente.className = "contentPendiente";
    titulo.className = "titulo";
    separador.className = "separador";
    descripcion.className = "descripcion";

    contentPendiente.appendChild(titulo);
    contentPendiente.appendChild(separador);
    contentPendiente.appendChild(descripcion);
    inputGroup.appendChild(contentPendiente);

    contenedorListado.insertAdjacentElement("afterbegin", inputGroup);

    contenedorListado.insertBefore(inputGroup, contenedorListado.children[0]);

    // const div = document.createElement("div");
    // const inputGroup = div.className = "input-group";
    // const contentPendiente = div.className = "contentPendiente";
    // const titulo = div.className = "titulo";
    // const separador = document.createElement("hr").className = "separador";
    // const descripcion = div.className = "descripcion";
}