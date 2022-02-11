// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }

// const test = doubleIt(5);
// console.log(test);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);


    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}


// document.getElementById('deposit-button').addEventListener('click', function () {
//     // const depositInput = document.getElementById('deposit-input');
//     // const depositAmountText = depositInput.value;
//     // const depositAmount = parseFloat(depositAmountText);
//     const depositAmount = getInputValue('deposit-input');
//     if (depositAmount > 0) {

//     }

//     //get & update deposit total
//     /* const depositTotal = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText;
//     const previousDepositTotal = parseFloat(depositTotalText); */


//     // depositTotal.innerText = previousDepositTotal + depositAmount; //for setting new amount
//     updateTotalField('deposit-total', depositAmount);

//     //update balance

//     // const balanceTotal = document.getElementById('balance-total');
//     // const balanceTotalText = balanceTotal.innerText;
//     // const previousBalanceTotal = parseFloat(balanceTotalText);

//     // balanceTotal.innerText = previousBalanceTotal + depositAmount;
//     updateBalance(depositAmount, true);

//     // //clear input field
//     // depositInput.value = '';

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {

        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);

    }
    if (withdrawAmount > currentBalance) {
        console.log("You can't withdraw more than what your have in your account");
    }
});


//handle withdraw button
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     // const withdrawInput = document.getElementById('withdraw-input');
//     // const withdrawAmountText = withdrawInput.value;
//     // const withdrawAmount = parseFloat(withdrawAmountText);
//     const withdrawAmount = getInputValue('withdraw-input');


//     //get & update withdraw total
//     /* const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawTotalText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

//     withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */ //for setting new amount
//     updateTotalField('withdraw-total', withdrawAmount);

//     //update balance after withdraw
//     // const balanceTotal = document.getElementById('balance-total');
//     // const balanceTotalText = balanceTotal.innerText;
//     // const previousBalanceTotal = parseFloat(balanceTotalText);

//     // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
//     updateBalance(withdrawAmount, false);

//     // //clear input field
//     // withdrawInput.value = '';

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);

    }
});