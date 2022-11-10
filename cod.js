function createTable() {
    const table = document.createElement("table");
    table.setAttribute("id", "mytable");
    document.getElementById("container").appendChild(table);

    document.getElementById("btnCreateTable").disabled = true;
    document.getElementById("btnAddRow").disabled = false;
    document.getElementById("btnRemoveRow").disabled = false;
    document.getElementById("rowToDeleteNumber").disabled = false;
}

function addRowCount() {
    const rowCountInput = document.getElementById("rowCount");
    const newRowCount = parseInt(rowCountInput.value) + 1;
    rowCountInput.value = newRowCount;
    return newRowCount;
}

function addRow() {

    const table = document.getElementById("mytable");
    const rowNum = addRowCount();
    const row = document.createElement("tr");
    row.setAttribute("id", "num-" + rowNum);

    const tdNum = document.createElement("td");
    tdNum.innerText = rowNum;

    const tdVal = document.createElement("td");
    tdVal.innerText = "value";

    row.appendChild(tdNum);
    row.appendChild(tdVal);

    table.appendChild(row);
}

function removeRow() {
    const numberToRemove = document.getElementById("rowToDeleteNumber").value   ;
    document.getElementById("num-" + numberToRemove).remove();
}