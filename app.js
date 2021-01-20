//Getting the elements
numberField = document.getElementById("numberField");
calculationButton = document.getElementById("handleCalculate");
result = document.getElementById("result");

// addding click handler for our button that will execute handleCalculate function
calculationButton.addEventListener("click",handleCalculate);

// initializing memory object that will keep our calculated results from the fibonnacci
memory = {};

// initializing function that will handle the click event for our button
function handleCalculate(e){
    //preventing default handling
    e.preventDefault();
    // checking if the input is valid
    if(numberField.value>=0 && numberField.value<=250){ 
        // If true creating anime object with wanted properties
        result.style.color = 'black';

        anime({
            targets: result,
            innerHTML: [0,fib(numberField.value)], // execute fib with the given value and populate result with the answer animate from zero to the desired value
            easing: 'linear',
            round: 10,
            color: 'black'
        });
        numberField.value = 0;

    }else{
        //if input is not valid we print the following error message
        result.innerHTML = "Please enter a valid number"
        result.style.color = 'tomato';
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