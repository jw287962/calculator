var numbers = [{
    firstNum: 0,
    secondNumber: 0,
    operator: "",

}]


    let buttonClick = document.querySelectorAll('.calcButtons');
    var isEqual = false;
    clear();

awaitClick(buttonClick);



function awaitClick(buttons){

      
      
        buttons.forEach(div => div
            .addEventListener('click',function(){
                
                if(this.id === 'clear'){
                    changeDisplay(0);
                    clear();
                   
                }
                else if(isOperator()){

                        if(this.id === 'equal')  {
                            let total = operate(window.numbers.firstNum,window.numbers.secondNumber,window.numbers.operator);
                            changeDisplay(total);
                            window.numbers.firstNum = total;
                            window.numbers.secondNumber = 0.0;
                        }
                        else if(this.id === 'operator') {
                            window.numbers.operator = this.textContent;
                            changeDisplay(0);
                            
                        }
                        else if(!window.numbers.secondNumber){
                            let newNum = ((this.textContent))
                     
                        window.numbers.secondNumber = newNum;
                        changeDisplay(newNum);
                        }
                        else {
                            let newNum = (window.numbers.secondNumber+  (this.textContent));
                       
                        window.numbers.secondNumber = newNum;
                        changeDisplay(newNum);
                        }
                        
                        // else{
                        // window.numbers.secondNumber = this.textContent;
                    
                        // changeDisplay(window.numbers.secondNumber);
                        // }
                }else{
                        if(this.id === 'operator') {
                                window.numbers.operator = this.textContent;
                                changeDisplay(0);
                                
                            }
                           else if(!window.numbers.firstNum){
                                let newNum = ( (this.textContent))
                                window.numbers.firstNum = newNum;
                            changeDisplay(newNum);
                            
                          
                            }
                            else {
                                let newNum = (window.numbers.firstNum + (this.textContent));
                                window.numbers.firstNum = newNum;
                            changeDisplay(newNum);
                           
                            }
                           
                          
            }
                
        }))


    }
    

function changeDisplay(num1){
    let display = document.querySelector('.calculatorInputs');
 

     display.textContent = num1
    
    
 }
function clear(){
    window.numbers.secondNumber = 0;
    window.numbers.firstNum = 0;
    window.numbers.operator = '';
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