// Handle deposit
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = currentBalanceTotal;

    depositField.value = '';
});

// Handle withdrawal
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawStrAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawStrAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawStr = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawStr);

    const currentWithdrawTotal = previousWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const finalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = finalBalance;

    withdrawField.value = '';
});
