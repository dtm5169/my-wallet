//declared variable, parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN .
// Creates Table for new data
let table = document.querySelector("tbody");
let monthlyIncome = 0;
let currentIncome = 0;
let listItem = JSON.parse(localStorage.getItem('Data'));

if (!listItem) {
  listItem = [];
}

function renderList() {
  currentIncome = monthlyIncome;
  table.textContent = "";

  for (let i = 0; i <listItem.length; i++) {
    addRow(listItem[i].name, listItem[i].amount, i);
    currentIncome -= listItem[i].amount;
  }
  
  document.getElementById("monthlyIncome").innerHTML = monthlyIncome;
  document.getElementById("currentIncome").innerHTML = currentIncome;
}

function addMoney() {

  //added if statement and alert if no value is added to monthly income
  let money = parseInt(document.getElementById('money').value);
  console.log(money);
  if (money == " " || isNaN(money)) {
  }
  //added value to a variable and assigned the results
  else {
    monthlyIncome += money;
    currentIncome += money;
    renderList();
  }
}

function addExpense() {
  let expenseName = document.getElementById('expenseName').value;
  let expenseAmount = parseInt(document.getElementById('expenseAmount').value);

  if (expenseName.length == "") {
    return;
  }
  else if (expenseAmount == " " || isNaN(expenseAmount)) {
    return;
  }

  listItem.push({
    name: expenseName,
    amount: expenseAmount
  });
  localStorage.setItem("Data", JSON.stringify(listItem));

  document.getElementById('expenseName').value = "";
  document.getElementById('expenseAmount').value = "";
  renderList();
}
function addRow(expenseName, expenseAmount, index) {
  let row = table.insertRow();
  row.setAttribute("data-index", index);

  let cell = row.insertCell();
  let text = document.createTextNode(expenseName);
  cell.appendChild(text);

  cell1 = row.insertCell();
  let text1 = document.createTextNode(expenseAmount);
  cell1.appendChild(text1);

  cell2 = row.insertCell();
  let clear = document.createElement('button');
  clear.textContent = "delete";
  cell2.appendChild(clear);
}

table.addEventListener('click', function(event) {
  var element = event.target;
  if (element.matches('button')) {
    let row_index = element.parentElement.parentElement.getAttribute("data-index");
    listItem.splice(row_index, 1);
    localStorage.setItem("Data", JSON.stringify(listItem));
  
   renderList();
  }
});

renderList();
