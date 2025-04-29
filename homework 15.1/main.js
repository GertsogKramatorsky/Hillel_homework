const addBtnEl = document.querySelector('.form__btn');
const deleteBtnsEl = document.querySelectorAll('.todo-item__delete');
const ulEl = document.querySelector('.js--todos-wrapper');
const inputEl = document.querySelector('.js--form__input');

function ToDoList() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []; 

    this._create = function() {
        const taskText = inputEl.value;

        const newTask = {
            id: Date.now(), // унікальний id
            text: taskText,
            completed: false
        };

        this.tasks.push(newTask);
        this._saveToLocalStorage();
        this._renderTask(newTask);

        inputEl.value = '';
    }

    this._renderTask = function(task) {
        const newLiEl = document.createElement('li');
        newLiEl.classList.add('todo-item');
        if (task.completed) {
            newLiEl.classList.add('todo-item--checked');
        }
        newLiEl.dataset.id = task.id; // збереження id у атрибуті

        newLiEl.innerHTML = `
            <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="todo-item__description">${task.text}</span>
            <button class="todo-item__delete">Видалити</button>
        `
        ulEl.appendChild(newLiEl);
    }
        
    this._delete = function(event) {
        if (event.target.classList.contains('todo-item__delete')) {
            const liEl = event.target.parentElement;
            
            const id = Number(liEl.dataset.id);
            this.tasks = this.tasks.filter(task => task.id !== id);
            this._saveToLocalStorage();
            liEl.remove();
        }
    }

    this._checked = function(event) {
        if (event.target.classList.contains('checkbox')) {
            const liEl = event.target.parentElement;
            const checkBoxEl = event.target;
    
            const id = Number(liEl.dataset.id);
            const task = this.tasks.find(task => task.id === id);
            task.completed = event.target.checked;
            this._saveToLocalStorage();

            if (task.completed) {
                liEl.classList.add('todo-item--checked');
            } else {
                liEl.classList.remove('todo-item--checked');
            }
        }
    }

    this._saveToLocalStorage = function() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    this._renderAllTasks = function() {
        this.tasks.forEach(task => this._renderTask(task));
    }
}

const MyToDoList = new ToDoList();
MyToDoList._renderAllTasks();

addBtnEl.addEventListener('click', function(event) {
    event.preventDefault();
    MyToDoList._create();
});

ulEl.addEventListener('click', function(event) {
    MyToDoList._delete(event);
    MyToDoList._checked(event);
});

