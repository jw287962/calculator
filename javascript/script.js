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
                
                if(this.id === "clear"){
                 
                    clear();
                   
                }
                else if(this.id === 'equal')  {
                    
                            let total = operate(window.numbers.firstNum,window.numbers.secondNumber,window.numbers.operator);
                            changeDisplay(total);
                            window.numbers.firstNum = total;
                            window.numbers.secondNumber = 0.0;
                            window.numbers.operator ='';
                        }
               
                else if(isOperator()){

                        
                         if(this.id === 'operator') {
                            window.numbers.operator = this.textContent;
                            changeDisplay(0);
                            
                        } 
                        else if(this.id ==='plusminus'){
                            
                            window.numbers.secondNumber = window.numbers.secondNumber * -1;
                             
                                changeDisplay(window.numbers.secondNumber)
                            }
                        else if(this.id ==='percent'){
                            window.numbers.secondNumber = window.numbers.secondNumber/100;
                            
                            changeDisplay(window.numbers.secondNumber)
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
                             
                                
                            }
                         else if(this.id ==='plusminus'){
                    
                            window.numbers.firstNum = window.numbers.firstNum * -1;
                             
                                changeDisplay(window.numbers.firstNum)
                            }
                            else if(this.id ==='percent'){
                                window.numbers.firstNum = window.numbers.firstNum/100;
                             
                                changeDisplay(window.numbers.firstNum)
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

        let buttonClick = document.querySelectorAll('body');
        buttonClick.forEach(div => div
            .addEventListener('keydown',function(event){
               var button = event.key;
               event.stopPropagation();
                // console.log(event);
             if(window.numbers.operator === 'Escape'){
               
                        clear();
             }
                 if(isOperator()){

                        if(button === 'Enter')  {
                            let total = operate(window.numbers.firstNum,window.numbers.secondNumber,window.numbers.operator);
                            changeDisplay(total);
                            window.numbers.firstNum = total;
                            window.numbers.secondNumber = 0.0;
                            window.numbers.operator = '+';
                        }
                        else if(!isFinite(button) ) {
                            window.numbers.operator = button;
                           
                        }
                        else if(!window.numbers.secondNumber){
                            let newNum = ((button))
                     
                        window.numbers.secondNumber = newNum;
                        changeDisplay(newNum);
                      
                        }
                        else {
                            let newNum = (window.numbers.secondNumber+  (button));
                       
                        window.numbers.secondNumber = newNum;
                        changeDisplay(newNum);
                        }
                        
                        // else{
                        // window.numbers.secondNumber = this.textContent;
                    
                        // changeDisplay(window.numbers.secondNumber);
                        // }
                }else{
                        if(!isFinite(button)) {
                                window.numbers.operator = button;                                
                            }
                           else if(!window.numbers.firstNum){
                                let newNum = ( (button))
                                window.numbers.firstNum = newNum;
                            changeDisplay(newNum);
                            
                          
                            }
                            else {
                                let newNum = (window.numbers.firstNum + (button));
                                window.numbers.firstNum = newNum;
                            changeDisplay(newNum);
                           
                            }
                           
                          
                    }
                    event.preventDefault(); //have to click button before keyboard works
                
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
    changeDisplay(0);
}
function add(num1,num2){
    return ((num1*1000)+(num2*1000))/1000;
}

function subtract(num1,num2){
    return ((num1*1000)-(num2*1000))/1000;
}

function multiply(num1,num2){
    return ((num1*10000)*(num2*10000))/(10000*10000);
}

function divide(num1,num2){
    return ((num1)/(num2));
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
        return 0+0;
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

function isNumber(event){
    return isFinite(event.key)
}