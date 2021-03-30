//declared variable, parseInt function converts its first argument to a string, parses that string, then returns an integer or NaN .
      // Creates Table for new data
let table = document.querySelector("table");
let monthlyIncome = parseInt(document.getElementById("monthlyIncome").innerHTML);
let currentIncome = parseInt(document.getElementById("currentIncome").innerHTML);  
function addMoney(){
  
    //added if statement and alert if no value is added to monthly income
        let money = parseInt(document.getElementById('money').value);
                console.log(money);   
        if (money == " " || isNaN(money)) {
            alert("Please enter a valid amount");
        }
        //added value to a variable and assigned the results
        else{
            monthlyIncome += money;
            currentIncome += money;
            //used to return the element that has the ID attribute with the specified value
            document.getElementById("monthlyIncome").innerHTML = monthlyIncome;
            document.getElementById("currentIncome").innerHTML = currentIncome;
        }
    }
    
    function addExpense() {
    let currentIncome = parseInt(document.getElementById("currentIncome").innerHTML);
    let expenseName = document.getElementById('expenseName').value;
    //
      let expenseAmount = parseInt (document.getElementById('expenseAmount').value);
      if (expenseName.length =="") {
        alert("Enter your expense name");
      }
      else if (expenseAmount == " " || isNaN(expenseAmount) ) {
        alert('Enter your valid expense amount');
      }
      //if less than or equal to
      else if (expenseAmount <= currentIncome){
          //subtraction
        currentIncome -= expenseAmount;
        document.getElementById('currentIncome').innerHTML = currentIncome;
      }
      console.log(expenseName);
      addRow (expenseName, expenseAmount);
    }
      function addRow(expenseName, expenseAmount) {
        
          let row = table.insertRow();
            let cell = row.insertCell();
            let text = document.createTextNode(expenseName);
            cell.appendChild(text);
            cell1 = row.insertCell();
            let text1 = document.createTextNode(expenseAmount);
            cell1.appendChild(text1);
          }
          
          localStorage.setItem("expenseName", expenseName);
          console.log(localStorage);


          function init() {
            // local storage
            let table = JSON.parse(localStorage.getItem("addExpense"));
            if (storedCities) {
                cities = storedCities;
                renderCities();
                weather(cities[cities.length -1]);
            }; 
        };
        init();

   

