let tenDollarPlan = 10;
let fiftyDollarPlan = 50;
let hundredDollarPlan = 100;

function processPayment(subscription) {
    if(subscription === tenDollarPlan) {
        userAvaliableSub = 10;
        planAmountPerSub = 10;
    } else if(subscription === fiftyDollarPlan) {
        userAvaliableSub = 60 * 20
        planAmountPerSub = 60 * 20
    } else if(subscription === hundredDollarPlan) {
        userAvaliableSub = 1000000
        planAmountPerSub = 1000000
    }

    hasSubscription

}

function removeSubFromDom() {
    subscriptionPlan.classList.remove("show-display")
    subscriptionPlan.classList.add("hide-sub")

    if(userAvaliableSub > 0) {
        hasSubscription = true
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute("disabled", true)
        }
    }

    handleInterval()
}

function buyBtn10Handler() {
    processPayment(tenDollarPlan)
    removeSubFromDom()
    console.log("you've been given 5 min")
}

function buyBtn50Handler() {
    processPayment(fiftyDollarPlan)

    removeSubFromDom()
    console.log("you've been given 20 min")
}

function buyBtn100Handler() {
    processPayment(hundredDollarPlan)

    removeSubFromDom()
    console.log("you've been given unlimited plan")
}

buyBtn10.addEventListener("click", buyBtn10Handler)
buyBtn50.addEventListener("click", buyBtn50Handler)
buyBtn100.addEventListener("click", buyBtn100Handler)