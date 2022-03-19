let calResult = document.getElementById("calculation-result")
let displayCalculation = document.getElementById("display-calculation")
let typeValueArea = document.getElementById("type-value-area")
let addition = document.getElementById("addition")
let subtraction = document.getElementById("subtraction")
let multiply = document.getElementById("multiply")
let division = document.getElementById("division")
let equalSign = document.getElementById("equal-sign")
let inputs = document.getElementsByTagName("input")
let displayPop = document.getElementById("display-ctrl-pop")
let goToBuyPage = document.getElementById("go-buy-page")
let subscriptionPlan = document.getElementById("subscription-plans")
let buyBtn10 = document.getElementById("buy-btn-10")
let buyBtn50 = document.getElementById("buy-btn-50")
let buyBtn100 = document.getElementById("buy-btn-100")



function displayResult(result) {
    calResult.textContent = result
}

function displayCurrentCal(calValues) {
    let holdCalValue = document.createElement("div")
    holdCalValue.textContent = calValues
    displayCalculation.appendChild(holdCalValue)
}
// should display whenever we press the equal sign

