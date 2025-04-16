let toDoListEl = document.querySelector('.to-do-list');
let btnAddTaskEl = document.querySelector('.btn-add-task');

toDoListEl.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
})

btnAddTaskEl.addEventListener('click', () => {
    let inputValue = document.querySelector('.input-task').value;
    let newTask = document.createElement('li');
    newTask.innerHTML = `
        ${inputValue}
        <button>Видалити</button>`;
    toDoListEl.appendChild(newTask);
    document.querySelector('.input-task').value = '';
})
