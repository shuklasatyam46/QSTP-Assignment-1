function calc(){
const num1=document.getElementById("n1").value
const num2=document.getElementById("n2").value
const opEl=document.getElementById("op-el").value
const hEl=document.getElementById("h-el")
    n1=num1*1
    n2=num2*1
    if (opEl=="M"){
       hEl.textContent="The answer is "+(n1)*(n2)
    }
    else if (opEl=="S"){
       hEl.textContent="The answer is "+(n1-n2)
    } 
    else if (opEl=="A"){
      hEl.textContent="The answer is "+(n1+n2)
    }

console.log(opEl)
}