document.getElementById('save-btn').addEventListener('click', function () {
    const incomeValue = getElementByIdValue('income-input');
    const saveValue = getElementByIdValue('save-input')
    if (saveValue < 100) {
        const newSavingValue = incomeValue * saveValue / 100;
        const previousSaving = getAllElementsById('save-money')
        const newTotalSaving = previousSaving + newSavingValue;
        const previousBalance = getAllElementsById('total-balance');
        setElementsById('save-money', newTotalSaving);
        const totalSaving = previousBalance - newTotalSaving;
        console.log(totalSaving)
        const remainingBalance = getAllElementsById('remaining-balance');
        const totalRemainringBalance = remainingBalance + totalSaving;

        setElementsById('remaining-balance', totalRemainringBalance)
    }
    else {
        alert ('please type under 100');
    }
});