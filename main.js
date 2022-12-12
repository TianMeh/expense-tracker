function pushData() {
    const expenseTable = document.getElementById('table2');
    const newTableLine = document.createElement('tr');
    const expenseElement = document.createElement('td');
    let getInputName = document.getElementById('name-input');
    const nameNode = document.createTextNode(getInputName.value);
    expenseTable.appendChild(newTableLine);
    expenseElement.appendChild(nameNode);
    newTableLine.appendChild(expenseElement);

    const expenseElement2 = document.createElement('td');
    let getInputDate = document.getElementById('date-input');
    const dateNode = document.createTextNode(getInputDate.value);
    expenseElement2.appendChild(dateNode);
    newTableLine.appendChild(expenseElement2);

    const expenseElement3 = document.createElement('td');
    let getInputAmount = document.getElementById('amount-input');
    const amountNode = document.createTextNode(getInputAmount.value);
    expenseElement3.appendChild(amountNode);
    newTableLine.appendChild(expenseElement3);

    let removeExpenseBtn = document.createElement('button');
    removeExpenseBtn.innerHTML = '&times;';
    newTableLine.appendChild(removeExpenseBtn);

    getInputName.value = "";
    getInputDate.value = "";
    getInputAmount.value = "";

    removeExpenseBtn.addEventListener("click", () => {
        expenseTable.removeChild(newTableLine);
    })
    
}