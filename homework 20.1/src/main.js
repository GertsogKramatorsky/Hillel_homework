import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'bootstrap'; 
class ToDoList {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.$inputEl = $('.js--form__input');
        this.$ulEl = $('.js--todos-wrapper');
    }

    _create() {
        const taskText = this.$inputEl.val().trim();
        if (!taskText) return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        this.tasks.push(newTask);
        this._saveToLocalStorage();
        this._renderTask(newTask);

        this.$inputEl.val('');
    }

    _renderTask(task) {
        const $newLiEl = $(`
            <li class="todo-item ${task.completed ? 'todo-item--checked' : ''}" data-id="${task.id}">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
                <span class="todo-item__description">${task.text}</span>
                <button class="todo-item__delete">Видалити</button>
            </li>
        `);

        this.$ulEl.append($newLiEl);
    }

    _delete(event) {
        const $target = $(event.target);
        if ($target.hasClass('todo-item__delete')) {
            const $liEl = $target.closest('li');
            const id = Number($liEl.data('id'));

            this.tasks = this.tasks.filter(task => task.id !== id);
            this._saveToLocalStorage();
            $liEl.remove();
        }
    }

    _checked(event) {
        const $target = $(event.target);
        if ($target.hasClass('checkbox')) {
            const $liEl = $target.closest('li');
            const id = Number($liEl.data('id'));

            const task = this.tasks.find(task => task.id === id);
            task.completed = $target.prop('checked');
            this._saveToLocalStorage();

            $liEl.toggleClass('todo-item--checked', task.completed);
        }
    }

    _saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    _renderAllTasks() {
        this.tasks.forEach(task => this._renderTask(task));
    }
}


const MyToDoList = new ToDoList();
MyToDoList._renderAllTasks();

$('.form__btn').on('click', function(event) {
    event.preventDefault();
    MyToDoList._create();
});

$('.js--todos-wrapper').on('click', function(event) {
    MyToDoList._delete(event);
    MyToDoList._checked(event);
});


const $modalEl = $('#exampleModal');
const $modalBodyEl = $('.modal-body');
const bootstrapModal = new Modal($modalEl[0]);

$('.js--todos-wrapper').on('click', '.todo-item__description', function () {
    const taskText = $(this).text(); 
    $modalBodyEl.text(taskText); 
    bootstrapModal.show(); 
});

