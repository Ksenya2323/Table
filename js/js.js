const Create = document.getElementById("create");
const Add = document.getElementById('add');
const Del = document.getElementById('delete');
let Table;
i = 1;


Create.addEventListener('click', function(e) {              // описывает собитие
    if (Table) {
        alert("Ошибка! Таблица уже создана!");
        return;
    }


    let table = document.createElement('table');
    table.id = "table";

    let firstLine = document.createElement('tr');           // создание шапки таблицы
    firstLine.append(createTd('Номер'));
    firstLine.append(createTd('Содержание'));
    table.append(firstLine);       
    
    document.body.append(table);

    Add.removeAttribute('disabled');
    Del.removeAttribute('disabled');
    Del.previousElementSibling.removeAttribute('disabled');
    Table = table;

})                          

function createTd(text) {
    let td = document.createElement('td');
    td.innerText = text;
    return td;
}

Add.addEventListener('click', function(e){
    createLine();
})

function createLine() {
    let line = document.createElement('tr');
    line.append(createTd(i++));
    line.append(createTd('Описание'));
    Table.append(line);
}

Del.addEventListener('click', function(e){
    const del = this.previousElementSibling;
    deleteLine(del.value);
    del.value = '';
})

function deleteLine(id) {
    const line = getLineById(id);
    if (!line) {
        return;
    }
    Table.removeChild(line);
}

function getLineById(id) {
    for (const line of document.querySelectorAll('tr')) {
        if (line.querySelector('td').innerText == id) {
            return line;
        }
    }
    return false;
}