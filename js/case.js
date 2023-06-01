function updateCaseNumber (isIncrease){
    let caseNumberField = document.getElementById('case-number-field')
    let caseNumberString = caseNumberField.value
    let previousCaseNumber = parseInt(caseNumberString)
    let newCaseNumber;

    isIncrease ? newCaseNumber = previousCaseNumber + 1 : newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;

    if(newCaseNumber > 0){
        // element.removeAttribute(name) 
        document.getElementById('case-minus').removeAttribute('disabled');
    }
    else{
        // element.setAttribute(name, value) 
        document.getElementById('case-minus').setAttribute('disabled', 'true');
    }
    return newCaseNumber
}

// update case price 
function updateCaseTotalPrice(newCaseNumber) {
    let newPrice =  newCaseNumber * 59
    document.getElementById('case-price').innerText = newPrice
    calculateTotal()
}

// plus button 
document.getElementById('case-plus').addEventListener('click', function () {
    let newCaseNumber = updateCaseNumber(true)
    updateCaseTotalPrice(newCaseNumber)
})

//minus button
document.getElementById('case-minus').addEventListener('click', function () {
    let newCaseNumber = updateCaseNumber(false)
    updateCaseTotalPrice(newCaseNumber)
})





