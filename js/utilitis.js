function getInputValueByID(valueById) {
    const playerField = document.getElementById(valueById);
    const playerFieldString = playerField.value;
    const playerValue = parseFloat(playerFieldString);
    return playerValue;
}

function getInputElementByid(elementId) {
    const playerExpenceElement = document.getElementById(elementId);
    const playerExpenceString = playerExpenceElement.innerText;
    const playerExpenceValue = parseFloat(playerExpenceString);
    return playerExpenceValue;
}