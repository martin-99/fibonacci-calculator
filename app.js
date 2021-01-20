numberField = document.getElementById("numberField");
calculationButton = document.getElementById("handleCalculate");
result = document.getElementById("result");
calculationButton.addEventListener("click",handleCalculate);

memory = {};

function handleCalculate(e){
    e.preventDefault();
    if(numberField.value>0 && numberField.value<=250){ 
        anime({
            targets: result,
            innerHTML: [0,fib(numberField.value)],
            easing: 'linear',
            round: 10
        });

    }else{
        result.innerHTML = "Please enter a valid number"
    }
 }

 function fib(number){
     if(number <=1){
         return 1;
     }
     if(memory[number]){
         return memory[number];
     }
     return memory[number] = fib(number-1)+ fib(number-2);

 }