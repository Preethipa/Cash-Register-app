const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBotton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

checkBotton.addEventListener("click", function validateBillandCashAmount(){
   showhideError();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else{
            showError("Cash should  atleast be equal to bill amount");

        }
  
    } else{
        showError("Invalid amount");
    }
});

function calculateChange(amountToBeReturned){
    for( let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
}

function showhideError(msg){
    message.style.display = "none";
}

function showError(msg){
    message.style.display = "block";
        message.innerText = msg;
}