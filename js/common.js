// When the page loads
window.addEventListener("load", function(){
    let subTotalTag = document.getElementById('sub-total')
    console.log(subTotalTag)
    let subTotalValue = parseInt(subTotalTag.innerText)
    console.log(subTotalValue)

    // Tax calculation 
    let taxTag = document.getElementById('tax')
    let subTotalWithTax = subTotalValue + (subTotalValue * (20 / 100))
    let taxAmount = Math.ceil(subTotalWithTax - subTotalValue)
    taxTag.innerText = taxAmount

    // Total Calculation 
    let total = subTotalValue + taxAmount
    document.getElementById('total').innerText = total
});

//calculate subtotal
function calculateTotal() {
    // Phone Price 
    let phonePriceTag = document.getElementById('phone-price')
    let phonePrice = parseInt(phonePriceTag.innerText)

    // Case Price 
    let casePriceTag = document.getElementById('case-price')
    let casePrice = parseInt(casePriceTag.innerText)

    // Subtotal calculation 
    let subTotal = phonePrice + casePrice
    console.log("SubTotal :" + subTotal)

    let subTotalTag = document.getElementById('sub-total')
    subTotalTag.innerText = subTotal

    // Tax calculation 
    let taxTag = document.getElementById('tax')
    let subTotalWithTax = subTotal + (subTotal * (20 / 100))
    let taxAmount = Math.ceil(subTotalWithTax - subTotal)
    taxTag.innerText = taxAmount

    // Total Calculation 
    let total = subTotal + taxAmount
    document.getElementById('total').innerText = total
}
