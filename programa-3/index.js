
var idCount = 1;
const data = [];
document.addEventListener("DOMContentLoaded", ()=>{
    const formulario = document.getElementById("formulario");
    const taskInput = document.getElementById("task");
    const taskDescriptionInput = document.getElementById("task-description");
    const listaDatos = document.getElementById("hero")

    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        const task= taskInput.value.trim();
        const description = taskDescriptionInput.value.trim();
        // creacio de los objetos
        const newTask = {
            id: idCount++,
            task:task,
            description:description,
            status:false,
        };

        // arreglo no se puede modificar 
        data.push(newTask);

        /*let data2 = [];
        data2 = [...data2, newTask] */
        // console.log(data);

        data.map((taskItem)=>{
            const nuevoElemento = taskItem.status?
            `<div class="card-task">
                <p class="task-name">${taskItem.task}</p>
                <span class="task-desc">${taskItem.description}</span>
                <div class="card_buttons">
                    <button class="delete">X</button>
                    <button class="complete" >✔</button>
                </div>
            </div>`:
            `<div class="card-task">
                <p class="task-name">T${taskItem.task}</p>
                <span class="task-desc">${taskItem.description}</span>
                <div class="card_buttons">
                    <button class="delete">X</button>
                    <button class="complete" >✔</button>
                </div>
            </div>`;
            listaDatos.innerHTML+=nuevoElemento;

        });


    })
})