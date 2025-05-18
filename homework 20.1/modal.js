import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'bootstrap'; 

const modalEl = document.getElementById('exampleModal');
const modalBodyEl = modalEl.querySelector('.modal-body');
const bootstrapModal = new Modal(modalEl); 

$('.js--todos-wrapper').on('click', '.todo-item__description', function () {
    const taskText = $(this).text(); 
    modalBodyEl.textContent = taskText; 
    bootstrapModal.show(); 
});
