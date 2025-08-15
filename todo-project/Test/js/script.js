document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector("#todo-input");
    const addTaskBtn = document.querySelector("#add-task-btn");
    const taskList = document.querySelector("#task-list");
    const totalTasks = document.querySelector("#total-tasks");
    const completedTasks = document.querySelector("#completed-tasks");
    const currentDate = document.querySelector("#current-date");

    // check, edit, delete 
    taskList.addEventListener('click', (e) => {
        const target = e.target;
        const listItem = target.closest('li');

        if (target.classList.contains('check-btn') || target.closest(".check-btn")) {
            taskComlpletion(listItem);
        } else if (
            target.classList.contains('edit-btn') || target.closest(".edit-btn"
            )) {
            editTask(listItem);
        } else if (target.classList.contains('delete-btn') || target.closest(".delete-btn"
        )) {
            taskDelete(listItem);
        }

    })

    // Add task 
    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText === '') {
            alert("Таскын нэр оруулна уу");
            return;
        }
        const li = document.createElement("li");
        li.setAttribute('data-id', Date.now());

        li.innerHTML =
            `   
<div class="list">
<span class="task-text">${taskText}</span>
    <button class="check-btn" title="Дууссан"> <i class="fas fa-check"></i></button>
    <button class="edit-btn" title="Засах" ><i class="fas fa-edit"></i></button>
    <button class="delete-btn" title="Устгах" ><i class="fas fa-trash-alt"></i></button>
</div>`;
        taskList.appendChild(li);
        todoInput.value = "";

        updateCount();
    };
    addTaskBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    //edid task 
    function editTask(listItem) {
        const taskText = listItem.querySelector(".task-text");
        const originalText = taskText.textContent;

        taskText.contentEditable = 'true';
        taskText.focus();

        addTaskBtn.disabled = true;
        const handleEditSave = (e) => {
            if (e.type === "keypress" && e.key !== "Enter") return;
            if (e.key === "Enter") e.preventDefault();

            const newText = taskText.textContent.trim();
            if (newText === '') {
                alert('Хоосон байна');
                taskText.textContent = originalText;
            } else {
                taskText.textContent = newText;
            }
            taskText.contentEditable = 'false';
            taskText.removeEventListener('blur', handleEditSave);
            taskText.removeEventListener('keypress', handleEditSave);
            addTaskBtn.disabled = false;
        }
        taskText.addEventListener('blur', handleEditSave);
        taskText.addEventListener('keypress', handleEditSave);
    }
    // check
    function taskComlpletion(listItem) {
        listItem.classList.toggle('completed');
        updateCount();
    }
    // delete
    function taskDelete(listItem) {
        taskList.removeChild(listItem);
        updateCount();
    }
    // totaltask 
    function updateCount() {
        const total = taskList.children.length;
        const completed = taskList.querySelectorAll(".completed").length;

        totalTasks.textContent = total;
        completedTasks.textContent = completed;
    }

    //currentDate
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    currentDate.textContent = `Он сар өдөр: ${formattedDate}`;

})