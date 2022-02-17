// js starts here::
// our main handler is "calculate" button for this page.
// so,we will do these function for "calculate" button.
// then we will another function for "save" part.
var zerocost = 32;
document.getElementById("mainBtn").addEventListener("click", function() {
    /*
     for ::Total Expenses:: part;
    */
    // for food input area::
    const foodCost = parseFloat(document.getElementById("foodexpense").value);
    console.log(foodCost);
    if (foodCost == Number) {
        return totalCost;
    } else {
        alert('use only number in Food Expenses area!!!');
        return false;
    }
    // console.log(foodCost);
    // for apartment rent input area::
    const rentCost = parseFloat(document.getElementById("rentExpense").value);
    // console.log(rentCost);
    // for clothes input area::
    const clothesCost = parseFloat(document.getElementById("clothesExpense").value);
    // console.log(clothesCost);
    // for totalExpenses ::
    const totalCost = foodCost + rentCost + clothesCost;
    // console.log(totalCost);
    // deliver console.log(totalExpenses).value to #totalExpenses.
    document.getElementById("totalExpenses").innerText = totalCost;
    // console.log(totalExpenses.innerText);
    /*
     for update balance part;
    */
    //  for income input area::
    const incomeAmount = parseFloat(document.getElementById("earningPoint").value);
    // console.log(incomeAmount);
    // for balance Statement area ::
    const totalBalance = document.getElementById("balance");
    const remainingBalance = incomeAmount - totalCost;
    totalBalance.innerText = remainingBalance;
    // console.log(totalBalance.innerText);
});
// 
/*
for "save" button,we added another function::
*/
document.getElementById('secondaryBtn').addEventListener('click', function() {
    // for %saving input area::
    const savingPercentAmount = parseFloat(document.getElementById('savings').value);
    const percentPoint = savingPercentAmount / 100;
    // console.log(percentPoint);
    // Savings Statement::
    const totalIncome = parseFloat(document.getElementById("earningPoint").value);
    // console.log(totalIncome);
    const totalSavings = totalIncome * percentPoint;
    // console.log(totalSavings);
    const savingsStatement = document.getElementById('totalSavings');
    savingsStatement.innerText = totalSavings;
    // remaining balace after savings ::
    const remainingBalance = parseFloat(document.getElementById('balance').innerText);
    const updateBalance = document.getElementById("updateBalance");
    updateBalance.innerText = remainingBalance - totalSavings;
    console.log(updateBalance.innerText);

})