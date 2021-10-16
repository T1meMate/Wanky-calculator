var firstNumber= 0;
var secondNumber= 0;

function addDigit(DigitToAdd) {
    if (document.getElementById('result').value ==0){
        document.getElementById('result').value =DigitToAdd;
    }
    else{
    document.getElementById('result').value +=DigitToAdd;
    }
}

function operation(code) {
    firstNumber = document.getElementById('result').value;
    codes = code;
    clear();
}

function clear() {
    document.getElementById('result'). value=0
}

function calc(){
    {
     secondNumber = document.getElementById('result').value;
    if(codes==2){
         itog = parseInt(firstNumber)+parseInt(secondNumber);
     }
    else if(codes==1){
         itog = parseInt(firstNumber)*parseInt(secondNumber);
     }
    else if(codes==3){
         itog = parseInt(firstNumber)-parseInt(secondNumber);
     }
    else if(codes==0){
        itog = parseInt(firstNumber)/parseInt(secondNumber);
    }
    else if(codes==4){
        itog = parseInt(firstNumber)2/parseInt(secondNumber);
    }
    else if(codes==5){
        clear();
    }
    document.getElementById('result').value = itog;
    }
}