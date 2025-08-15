document.addEventListener('DOMContentLoaded', () => {
    // DOM element songoh
    const todoInput = document.getElementById('todo-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const totalTaskSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');
    const currentDateElement = document.getElementById('current-date');

    //Unuudriin ognoog haruulah ni 
    function date() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: "long" };
        currentDateElement.textContent = now.toLocaleDateString('mn-Mn', options);
    }
    date();

    // local storage ees taskuudiig achaalah
    loadTasks();

    //Event Listeners 
    addTaskBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });

    // Event delegation for dynamically added buttons (check, edit, delete)
    taskList.addEventListener('click', (e) => {
        const target = e.target;
        const listItem = target.closest('li');
        if (!listItem) return; // Not a list item
        if (target.classList.contains('check-btn') || target.closest('.check-btn')) {
            toggleTaskCompletion(listItem);
        } else if (target.classList.contains('edit-btn') || target.closest('.edit-btn')) {
            // edit tovch deer darahad shuud zasah gorimd shiljine
            editTaskInPlace(listItem);
        } else if (target.classList.contains('delete-btn') || target.closest('.delete-btn')) {
            deleteTask(listItem);
        }
    });

    //Daalgawar 1: Task nemeh 
    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText === '') {
            alert('Та таскын нэр оруулна уу!'); //Eniig UI messegeer solih bolomjtoi
            return;
        }
        const li = document.createElement('li');
        li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="check-btn" title="Дууссан"><i class="fas fa-check"></i></button>
            <button class="edit-btn" title="Засах"><i class="fas fa-edit"></i></button>
            <button class="delete-btn" title="Устгах"><i class="fas fa-trash-alt"></i></button>
        </div>
        `;
        taskList.appendChild(li);
        todoInput.value = ''; // oroltiin talbariig tseverleh
        saveTasks(); // taskiig hadgalah
        updateTaskCounts(); // Toog shinechleh
    }

    //daalgawar 3 taskiin toloviig uurchluh (completed)
    function toggleTaskCompletion(listItem) {
        listItem.classList.toggle('completed');
        saveTasks();
        updateTaskCounts();
    }

    // daalgawar 2 task zasah (prompt guigeer shuud zasah gorimd oruulah)
    function editTaskInPlace(listItem) {
        const taskTextSpan = listItem.querySelector('.task-text');
        const originalText = taskTextSpan.textContent; // Zasahiin umnuh textiig hadgalah 

        // textiig shuud zasah bolomjtoi bolgono
        taskTextSpan.contentEditable = 'true';
        taskTextSpan.focus(); //Cursoriig text dr oruulah

        // zasah gorimd baih ued busad uildluudiig idevhgui bolgoh
        addTaskBtn.disabled = 'true';
        // nemeh temdegiig idevhgui bolgoh 
        // busad taskuudiin tovchuudiig idevhgui bolgoh ni arai nariin tovogtei tul odoo orhino
        // esvel zasah gorimd bga taskiig ontsolj haruulah zagvar hiij bolno

        //Event Listener uudiig nemeh - Zasvar duusah 
        const handleSaveEdit = (e) => {
            if (e.type === 'keypress' && e.key !== 'Enter') return;
            if (e.type === 'keypress') e.preventDefault(); // Enter darahad shine mor uusgehees sergiilne
            const newText = taskTextSpan.textContent.trim();

            if (newText === '') {
                // Hooson utga oruulbal aldaa uguud, umnuh utgiig sergeeh esvel dahin zasuulah
                alert('Таскын нэр хоосон байж болохгүй! Өмнөх утгыг сэргээлээ');
                taskTextSpan.textContent = originalText;
            } else {
                taskTextSpan.textContent = newText; // shine utgiig onooh
            }
            // zasah gorimoos gargah 
            taskTextSpan.contentEditable = 'false';
            taskTextSpan.removeEventListener('blur', handleSaveEdit);
            taskTextSpan.removeEventListener('keypress', handleSaveEdit);

            // Busad uildluudiig idevhjuuleh
            addTaskBtn.disabled = false;
            saveTasks();
        };

        // Blur (focus aldahad) bolon Keypress (Enter darahad) event listener
        taskTextSpan.addEventListener('blur', handleSaveEdit);
        taskTextSpan.addEventListener('keypress', handleSaveEdit);
    }
    // daalgawar 4  task ustgah 
    function deleteTask(listItem) {
        if (confirm('Та энэ таскыг устгахдаа итгэлтэй байна уу?')) {
            taskList.removeChild(listItem);
            saveTasks();
            updateTaskCounts();
        }
    }
    // daalgawar 5 & 7 Niit bolon duussan taskiin toog shinechleh 
    function updateTaskCounts() {
        const total = taskList.children.length;
        const completed = taskList.querySelectorAll('.completed').length;

        totalTaskSpan.textContent = total;
        completedTasksSpan.textContent = completed;
    }
    // daalgawar 7 Ognoo haruulah 
    function displayCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getDate() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');

        currentDateElement.textContent = 'Он сар өдөр: ${year}-${month}-${day}';
    }
    // local Storage d taskuudiig hadgalah
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('.task-text').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('todos', JSON.stringify(tasks));
    }
    // local Storage ees taskuudig achaalah
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('todos'));
        if (tasks) {
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.setAttribute('data-id', Date.now()); // ID ogoh 
                li.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="icons">
                    <button class="check-btn" title="Дууссан"><i class="fas fa-check"></i></button>
                    <button class="edit-btn" title="Засах"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn" title="Устгах"><i class="fas fa-trash-alt"></i></button>
                </div>
                `;
                if (task.completed) {
                    li.classList.add('completed');
                }
                taskList.appendChild(li);
            });
        }
        updateTaskCounts();
    }




});