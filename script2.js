
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawStrAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawStrAmount);

   
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return; 
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawStr = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawStr);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Check if the withdrawal amount exceeds the current balance
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Insufficient balance");
        return; 
    }

    const currentWithdrawTotal = previousWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const finalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = finalBalance;

    withdrawField.value = '';
});
