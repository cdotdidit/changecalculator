// Write your JavaScript here

function calculateChange(amountDue, amountReceived){
    
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value;
    var result = amountReceived - amountDue;
    console.log(result);

    return result;
};


  function handleClickEvent() {
    var amountDue = document.getElementById("amount-due").value;
    var amountReceived = document.getElementById("amount-received").value;
    var result = calculateChange(amountDue, amountReceived);

        document.getElementById("calculate-change").innerHTML = "Your change is: $" + result+ ".";
    }
