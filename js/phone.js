function updatePhoneNumber(isIncrease) {
    let phoneNumberField = document.getElementById('phone-number-field')
    let phoneNumberString = phoneNumberField.value
    let previousPhoneNumber = parseInt(phoneNumberString)

    let newPhoneNumber;
    isIncrease ? newPhoneNumber = previousPhoneNumber + 1 : newPhoneNumber = previousPhoneNumber - 1

    phoneNumberField.value = newPhoneNumber

    if (newPhoneNumber == 0) {
        // element.setAttribute(name, value) 
        document.getElementById('phone-minus').setAttribute('disabled', 'true')
    } else {
        // element.removeAttribute(name) 
        document.getElementById('phone-minus').removeAttribute('disabled')
    }
    return newPhoneNumber
}

// update phone price 
function updatePhoneTotalPrice(newPhoneNumber) {
    let newPrice = newPhoneNumber * 1219
    document.getElementById('phone-price').innerText = newPrice
    calculateTotal()
}

// plus button 
document.getElementById('phone-plus').addEventListener('click', function () {
    let newPhoneNumber = updatePhoneNumber(true)
    updatePhoneTotalPrice(newPhoneNumber)
})

//minus button
document.getElementById('phone-minus').addEventListener('click', function () {
    let newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)
})




