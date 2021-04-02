//declared variable, parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN .
// Creates Table for new data
let table = document.querySelector("tbody");
let monthlyIncome = parseInt(document.getElementById("monthlyIncome").innerHTML);
let currentIncome = parseInt(document.getElementById("currentIncome").innerHTML);


let listItem = JSON.parse(localStorage.getItem('Data'));

if (!listItem) {
  listItem = [];
}

function renderList() {
  table.textContent = "";

  for (let i = 0; i <listItem.length; i++) {
    addRow(listItem[i].name, listItem[i].amount, i);
  }
}

function addMoney() {

  //added if statement and alert if no value is added to monthly income
  let money = parseInt(document.getElementById('money').value);
  console.log(money);
  if (money == " " || isNaN(money)) {
    alert("Please enter a valid amount");
  }
  //added value to a variable and assigned the results
  else {
    monthlyIncome += money;
    currentIncome += money;
    //used to return the element that has the ID attribute with the specified value
    document.getElementById("monthlyIncome").innerHTML = monthlyIncome;
    document.getElementById("currentIncome").innerHTML = currentIncome;
    localStorage.setItem("Income",monthlyIncome)
  }
}

function addExpense() {
  let currentIncome = parseInt(document.getElementById("currentIncome").innerHTML);
  let expenseName = document.getElementById('expenseName').value;
  //
  let expenseAmount = parseInt(document.getElementById('expenseAmount').value);
  if (expenseName.length == "") {
    alert("Enter your expense name");
  }
  else if (expenseAmount == " " || isNaN(expenseAmount)) {
    alert('Enter your valid expense amount');
  }
  //if less than or equal to
  else if (expenseAmount <= currentIncome) {
    //subtraction
    currentIncome -= expenseAmount;
    document.getElementById('currentIncome').innerHTML = currentIncome;
  } else {
    console.log(expenseName);
    addRow(expenseName, expenseAmount, listItem.length);
    listItem.push({
      name: expenseName,
      amount: expenseAmount
    });
    localStorage.setItem("Data", JSON.stringify(listItem))
  }
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
}

renderList();
