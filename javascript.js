let contador = 0;
let FooterBox = document.getElementsByClassName("footerChild");
let pendientes = FooterBox[0];
let completadas = FooterBox[1];

function adicionar(){
    let input = document.getElementById("input");
    if(input.value !== ""){
        const father = document.getElementById("container");
        let tarea = document.createElement("div");
        tarea.setAttribute("class","containerChild"); 
        tarea.setAttribute("onclick","tareasCumplidas()")
        tarea.innerHTML="<label class='label'><input type='checkbox'>‎ ‎ ‎ "  + input.value+"</label><i onclick='remove(this)' class='fa-solid fa-trash-can' style='color: #000000;'></i>";
        father.append(tarea);
        contador++;
        pendientes.innerHTML = "Tareas pendientes: " + contador;
    }
    input.value="";

}
function remove(elemento) {
    let item = elemento.parentElement;
    item.remove();
    contador--;
    pendientes.innerHTML = "Tareas pendientes: " + contador;
}
function tareasCumplidas(){
    let checkboxList = document.querySelectorAll("input[type='checkbox']:checked");
    let realizadas = checkboxList.length;
    completadas.innerHTML = "Completadas: " + realizadas;
}
