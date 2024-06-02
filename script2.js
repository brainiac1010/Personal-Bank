document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = formatNumber(currentDepositTotal);

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = formatNumber(currentBalanceTotal);

    depositField.value = '';
});

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawStrAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawStrAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawStr = withdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawStr);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Insufficient balance");
        return; // Exit the function early if there's insufficient balance
    }

    const currentWithdrawTotal = previousWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = formatNumber(currentWithdrawTotal);

    const finalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = formatNumber(finalBalance);

    withdrawField.value = '';
});

function formatNumber(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
