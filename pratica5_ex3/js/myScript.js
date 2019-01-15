//Start value is sum
var operacao;

//Gets current operator, the selected one
function getOperacao() {
    
    var e = document.getElementById("operacao");
    
    //Goes to select on index.html and checks current selected operation
    operacao = e.options[e.selectedIndex].value;
    
    //If factorial operator is the selected, disable second input field
    if (operacao == "!")
        document.getElementById("op2").disabled = true
    else
        document.getElementById("op2").disabled = false;
    
    /* Implementation with ternary operator
    
    (operacao == "!") ? 
        document.getElementById("op2").disabled = true 
    : document.getElementById("op2").disabled = false;
    */
}

function calcula() {
    //Get result field and current values at inputs
    var res = document.getElementById("res");
    var op1 = parseFloat(document.getElementById("op1").value);
    var op2 = parseFloat(document.getElementById("op2").value);
    
    switch(operacao){
        case "+":
            res.value = op1 + op2; 
            break;
        case "-":
            res.value = op1 - op2;
            break;
        case "*":
            res.value = op1 * op2;
            break;
        case ":":
            if (op2 != 0)
                res.value = op1 / op2;
            else{
                alert("Can't divide by zero!");
                res.value = null;
            }
            break;
        case "%":
            if (Number.isInteger(op1) && Number.isInteger(op2)){
                res.value = op1 % op2;
            }else{
                alert("Values must be both integers!");
                res.value = null;
            }
            break;
        case "!":
            if (op1 >= 0 && Number.isInteger(op1)){
                var temp = 1;
                for (var i = op1; i > 0; i--) temp *= i;
                res.value = temp;
            }else{
                alert("Value must be a positive integer!");
                res.value = null;
            }
            break;
    }
}