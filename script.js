const buttonsEL = document.querySelectorAll("button");

const inputFieldEL = document.getElementById("result");

for(let i=0; i< buttonsEL.length; i++){
    buttonsEL[i].addEventListener("click",() => {
        const buttonValue = buttonsEL[i].innerText;
        if(buttonValue === "C"){
         clearResult();
         return;
        } else if(buttonValue === "=") { 
         calculateResult();
         return;
        } else {
         appendValue(buttonValue);
        }  
    });
}
function clearResult(){
    inputFieldEL.value = "";
}
function calculateResult(){
    inputFieldEL.value = eval(inputFieldEL.value);
}
function appendValue(buttonValue){
    inputFieldEL.value += buttonValue;
}