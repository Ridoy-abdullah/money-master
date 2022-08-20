function getElementByIdValue(incomeId) {
    const inputField = document.getElementById(incomeId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
};
function getAllElementsById(elementsId) {
    const elements = document.getElementById(elementsId);
    const elementsString = elements.innerText;
    const elementsValue = parseFloat(elementsString);
    return elementsValue;

}
function setElementsById(elementsId, newValue) {
    const elementsText = document.getElementById(elementsId);
    elementsText.innerText = newValue;
}


