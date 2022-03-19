let typedValues = []
let hasClearedInitialArr = false

let freeTrial = 10
let watchTrial = 10;
let userAvaliableSub = freeTrial;
let planAmountPerSub;
let hasSubscription = true

// it's job is to decrease the plan base on minutes/sec/days
function ongoingSubscription() {
    
    userAvaliableSub--
    freeTrial--
    console.log(userAvaliableSub)

    // check if the avaliable plan is half way finished
    if(userAvaliableSub === (watchTrial/2) && freeTrial > 0) {
        console.log("your free trial finishes soon")
    } else if(userAvaliableSub === (planAmountPerSub/2) && hasSubscription) {
        console.log("your paid is half way through")
    }

    // check if userAvaliable is finished and thus disables the use for the calculator
    if(userAvaliableSub === 0 && freeTrial === 0) {
        hasSubscription = false
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("disabled", true)
            displayPop.classList.remove("hide-pop")
            displayPop.classList.add("show-display")
        }
        console.log("free Trial over")
        
    } else if(userAvaliableSub === 0 && planAmountPerSub > freeTrial) {
        hasSubscription = false
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute("disabled", true)
            displayPop.classList.remove("hide-pop")
            displayPop.classList.add("show-display")
        }
        console.log("paid plan over")
    }
}


// This interval help call the ongoingSubscription which it's job is to decrease the plan base on minutes/sec/days
function handleInterval() {
let callOngoingSub = setInterval(() => {
    ongoingSubscription()

    if(userAvaliableSub <= 0) {
        clearInterval(callOngoingSub)
    }
}, 1000); 
}

handleInterval()


// bring up purchase page 
function buyPlanPage() {
    displayPop.classList.remove("show-display")
    displayPop.classList.add("hide-pop")

    subscriptionPlan.classList.remove("hide-sub")
    subscriptionPlan.classList.add("show-display")
}

goToBuyPage.addEventListener("click", buyPlanPage)


// calculator functionalities
function typeValue() {
    let receivedValue = typeValueArea.value
    typedValues.push(receivedValue)
}

function useSign(sign) {
    if(hasClearedInitialArr === false) {
        typeValue()
    }
    typedValues.push(sign)
}

function additionCal() {
    useSign("+")

}

function subCal() {
    useSign("-")

}

function multipleCal() {
    useSign("*")

}

function divisionCal() {
    useSign("/")

}


function equalCal() {
    typeValue()
    let valueOne = parseInt(typedValues[0])
    let valueTwo = parseInt(typedValues[2])

    let resultingValue;

    if(typedValues.includes("+")) {
        resultingValue = valueOne + valueTwo 
        typedValues = [];
        console.log(resultingValue)
        displayResult(resultingValue)
    } else if(typedValues.includes("-")) {
        resultingValue = valueOne - valueTwo 
        typedValues = [];
        console.log(resultingValue)
        displayResult(resultingValue)
    } else if(typedValues.includes("*")) {
        resultingValue = valueOne * valueTwo 
        typedValues = [];
        console.log(resultingValue)
        displayResult(resultingValue)
    } else if(typedValues.includes("/")) {
        resultingValue = valueOne / valueTwo 
        typedValues = [];
        console.log(resultingValue)
        displayResult(resultingValue)
    }

    typedValues.push(resultingValue)
    hasClearedInitialArr = true
}



addition.addEventListener("click", additionCal)
subtraction.addEventListener("click", subCal)
multiply.addEventListener("click", multipleCal)
division.addEventListener("click", divisionCal)
equalSign.addEventListener("click", equalCal)
