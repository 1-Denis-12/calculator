var numButtonsContiner = document.querySelector(".numbers");
var operatorButtonsContainer = document.querySelector(".operators");
var total = document.querySelector(".total");
var num1
var num2
var opp
    for (i =  0; i <= 9; i++) {
        numButtonsContiner.innerHTML += `<button class="btn" onclick="addText(${i})">${i}</button>`;
    }
    for (a = 0; a <= 4; a++) {
        var operators = ["/", "*", "-", "+", "="]
        operatorButtonsContainer.innerHTML += `<button class="operator" onclick="addText(operators[${a}])">${operators[a]}</button>`;
    }

    function addText(num) {
        if (num == "/" || num == "*" || num == "-" || num == "+") {
            num1 = total.textContent
            opp = num
            console.log(num1);
            total.textContent = ""
            
        } else if (num == "=") {
            num2 = total.textContent
            total.textContent = operator()
            console.log(num2);
             
        } else {
        total.textContent += num        
        }
    }

    function operator() {
        num1 = Number(num1)
        num2 = Number(num2)
        var output
        if (opp == "/")  {
             output = num1 / num2
        } else if (opp == "*") {
            output = num1 * num2
        } else if (opp == "-") {
            output = num1 - num2
        } else if (opp == "+") {
            output = num1 + num2
        }        
        return output
    }