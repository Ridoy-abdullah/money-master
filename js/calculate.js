document.getElementById('btn-calculate').addEventListener('click', function () {
    const incomeValue = getElementByIdValue('income-input');
    const foodValue = getElementByIdValue('food-input');
    const rentValue = getElementByIdValue('rent-input');
    const othersValue = getElementByIdValue('others-input');
    const newTotalExpenses = foodValue + rentValue + othersValue;
    const previousTotalExpenses = getAllElementsById('total-expenses');
    const TotalExpenses = previousTotalExpenses + newTotalExpenses;
    setElementsById('total-expenses', TotalExpenses);

    const newBalance = incomeValue - newTotalExpenses;
    const previousBalance = getAllElementsById('total-balance');
    const newBalanceTotal = newBalance - previousBalance;
    setElementsById('total-balance', newBalanceTotal);
})