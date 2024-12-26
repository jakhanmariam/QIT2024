const todoList = document.getElementById('todoList');
const addButton = document.getElementById('addButton');
const searchButton = document.getElementById('searchButton');

addButton.addEventListener('click', () => {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value !== '') {
        const task = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');

        span.textContent = taskInput.value;
        deleteButton.textContent = 'delete';

        taskInput.value = "";
        task.style.width = "250px";
        task.style.display = 'flex';
        task.style.justifyContent = 'space-between';
        task.style.background = 'gainsboro';
        task.style.padding = '5px';


        task.appendChild(span);
        task.appendChild(deleteButton);
        todoList.appendChild(task);
        task.addEventListener(dbclick, () => {
            const changeName = document.createElement('input');
            changeName.placeholder = 'change name';
            task.replaceChild(change,span);
        })

        todoList.appendChild(task);

        deleteButton.addEventListener('click', () => {
            todoList.removeChild(task);
        });
        searchButton.addEventListener('click', () => {
            const searchInput = document.getElementById('searchInput');
            const tasks = document.querySelectorAll('li');
            tasks.forEach((task) => {
                const text = task.querySelector('span')
                if (!text.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                    task.style.display = 'none';
                } else {
                    task.style.display = 'flex';
                }
            })
        })

    }
})