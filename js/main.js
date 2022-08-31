import Task from "./Task.js";

let taskList = [];
let addItem = () => {
    let content = document.querySelector("#newTask").value;
    if (content === "") {
        alert("Activity is not empty!");
        return;
    }
    taskList.push(new Task(content, false));
    loadTask();
};

let loadTask = () => {
    removeAllTask();
    taskList.map((item, index) => {
        document.querySelector(
            `#${item.isDone ? "completed" : "todo"}`
        ).innerHTML += `
                <li>
                    ${item.content}
                    <div class="buttons">
                        <span class="remove">
                            <i class="fa-regular fa-trash-can" onclick="deleteTask(${index})"></i>
                        </span>
                        <span class="complete" onclick="finishTask(${index}, ${item.isDone})">
                            <i class="fa-regular fa-circle-check"></i>
                        </span>
                    </div>
                </li>
            `;
    });
};

let removeAllTask = () => {
    document.querySelector("#completed").innerHTML = "";
    document.querySelector("#todo").innerHTML = "";
};

let finishTask = (index, isDone) => {
    if (isDone) {
        taskList[index].isDone = false;
    } else {
        taskList[index].isDone = true;
    }
    loadTask();
};

let deleteTask = (index) => {
    taskList.splice(index, 1);
    loadTask();
};

let sortAscByName = () => {
    taskList.sort((a, b) => {
        return a.content.localeCompare(b.content);
    });
    loadTask();
};

let sortDescByName = () => {
    taskList.sort((a, b) => {
        return a.content.localeCompare(b.content) * -1;
    });
    loadTask();
};

window.finishTask = finishTask;
window.deleteTask = deleteTask;
window.sortAscByName = sortAscByName;
window.sortDescByName = sortDescByName;

document.querySelector("#addItem").onclick = addItem;
