const table = document.createElement('table');
const firstRow = document.createElement('tr');
const emptyTd = document.createElement('td');
firstRow.appendChild(emptyTd);

for (let i = 1; i <= 10; i++) {  
    const td = document.createElement('td');
    td.textContent = i;
    firstRow.appendChild(td);
    td.style.border = '1px solid black';
    td.style.textAlign = 'center';
    td.style.padding = '10px'; 
}
table.appendChild(firstRow); // перший рядок
firstRow.style.backgroundColor = 'grey';

for (let row = 1; row <= 10; row++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = row;
    tr.appendChild(td);      // перша колонка (по факту 10 рядків з першим значенням від 1 до 10)
    td.style.border = '1px solid black';
    td.style.textAlign = 'center';
    td.style.padding = '10px';
    td.style.backgroundColor = 'grey';

    for (let col = 1; col <= 10; col++) {
        const td = document.createElement('td');
        td.textContent = row * col;
        tr.appendChild(td);  // результати перемноження записуємо в комірки, які вкладаємо в рядки
        td.style.border = '1px solid black';
        td.style.textAlign = 'center';
        td.style.padding = '10px';
    }

    table.appendChild(tr);
}

document.body.appendChild(table); // додаємо всю таблицю в body

table.style.border = '2px solid black';
table.style.borderCollapse = 'collapse';