const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBotton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

checkBotton.addEventListener("click", function validateBillandCashAmount(){
   showhideError();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculate(amountToBeReturned);

        } else{
            showError("Cash should  atleast be equal to bill amount");

        }
 
    } else{
        showError("Invalid amount");
    }
});

function showhideError(msg){
    message.style.display = "none";
}

function showError(msg){
    message.style.display = "block";
        message.innerText = msg;
}