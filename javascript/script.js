var numbers = [{
    firstNum: 0,
    secondNumber: 0,
    operator: "",

}]


    let buttonClick = document.querySelectorAll('.calcButtons');
    var isEqual = false;


awaitClick(buttonClick);



function awaitClick(buttons){
   
      
      
        buttons.forEach(div => div
            .addEventListener('click',function(){
                
                if(this.id === 'clear'){
                    changeDisplay(0);
                    window.numbers.secondNumber = 0;
                    window.numbers.firstNum = 0;
                    window.numbers.operator = '';
                   
                }
                else if(isOperator()){

                        if(this.id === 'equal')  {
                            let total = operate(window.numbers.firstNum,window.numbers.secondNumber,window.numbers.operator);
                            changeDisplay(total);
                            window.numbers.firstNum = total;
                            window.numbers.secondNumber = 0;
                        }
                        else if(this.id === 'operator') {
                            window.numbers.operator = this.textContent;
                            changeDisplay(0);
                            
                        }
                        else if(window.numbers.secondNumber > 0){
                            let newNum = window.numbers.secondNumber*10+  (this.textContent*1)
                        changeDisplay(newNum);
                        window.numbers.secondNumber = newNum;
                        }
                        
                        else{
                        window.numbers.secondNumber = this.textContent;
                    
                        changeDisplay(window.numbers.secondNumber);
                        }
                }else{

            //     if(this.id === 'equal')  {
            //     let total = operate(window.numbers.firstNum,window.number.secondNumber,window.number.operator);
            //     changeDisplay(total);
            //     window.firstNum = total;
            // }
            //     else 
                        if(this.id === 'operator') {
                                window.numbers.operator = this.textContent;
                                changeDisplay(0);
                                
                            }

                            else if(window.numbers.firstNum > 0){
                                let newNum = window.numbers.firstNum*10+  (this.textContent*1)
                            changeDisplay(newNum);
                            window.numbers.firstNum = newNum;
                            }
                            
                            else{
                            window.numbers.firstNum = this.textContent;
                            changeDisplay(window.numbers.firstNum);
                            }
            }
                
        }))


    }
    

function changeDisplay(num1){
    let display = document.querySelector('.calculatorInputs');
 

     display.textContent = num1
    
    
 }

function add(num1,num2){
    return (num1*1)+(num2*1);
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(num1,num2,operator){
    if(operator === '+'){
       return add(num1,num2);
    }
    else if(operator === '-'){
        return subtract(num1,num2);
    }
    else if(operator === 'x' || operator === '*'){
        return multiply(num1,num2);
    }
    else if(operator === '/'){
        return divide(num1,num2);
    }
    else {
        return ;
    }


}

function isOperator(){
        
    if(window.numbers.operator){
     
        return true;
    }
    else{ 
    return false;
    }
}