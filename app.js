numberField = document.getElementById("number");
calculateBtn = document.getElementById("handleCalculate");
result = document.getElementById("result");
calculateBtn.addEventListener('click',handleCalculate);
memory = {};

function handleCalculate(e){
    e.preventDefault();
    
    result.innerHTML = fib(numberField.value)  
}
function fib(n){
    if(n <=1){
        return 1;
    }
    if(memory[n]){
        return memory[n];
    }


    return memory[n]=fib(n-1)+ fib(n-2);
}